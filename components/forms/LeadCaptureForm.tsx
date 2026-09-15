/**
 * Lead Capture Form - Optimized for FUB Integration
 *
 * Features:
 * - Real-time validation
 * - Auto-enrichment with source tracking
 * - Success/error handling
 * - Accessible (WCAG 2.1)
 * - Mobile-optimized
 */

"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CTA_PHONE,
  CTA_TEL,
  AGENT_EMAIL,
  AGENT_EMAIL_MAILTO,
  TEXT_LINK_CLASS,
} from "@/lib/contact";

export interface LeadCaptureFormProps {
  source?: string;
  stage?: string;
  defaultTags?: string[];
  formType?: "contact" | "property-search" | "home-valuation" | "newsletter";
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const selectClassName =
  "min-h-11 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50";

const textareaClassName =
  "min-h-[5.5rem] w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 disabled:cursor-not-allowed disabled:opacity-50";

export function LeadCaptureForm({
  source = "website-form",
  stage = "New Lead",
  defaultTags = [],
  formType = "contact",
  onSuccess,
  onError,
}: LeadCaptureFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const errorRef = useRef<HTMLDivElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const formId = useId();
  const ids = {
    error: `${formId}-error`,
    firstName: `${formId}-firstName`,
    lastName: `${formId}-lastName`,
    email: `${formId}-email`,
    phone: `${formId}-phone`,
    priceMin: `${formId}-priceMin`,
    priceMax: `${formId}-priceMax`,
    bedrooms: `${formId}-bedrooms`,
    bathrooms: `${formId}-bathrooms`,
    timeline: `${formId}-timeline`,
    preApproved: `${formId}-preApproved`,
    message: `${formId}-message`,
    turnstile: `${formId}-turnstile-pending`,
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    // Property search fields
    priceMin: "",
    priceMax: "",
    bedrooms: "",
    bathrooms: "",
    neighborhoods: [] as string[],
    timeline: "",
    preApproved: false,
  });

  useEffect(() => {
    if (!error) {
      return;
    }
    errorRef.current?.focus();
  }, [error]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setInvalidFields((prev) => prev.filter((field) => field !== name));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const missing: string[] = [];
    if (!formData.firstName.trim()) missing.push("firstName");
    if (!formData.lastName.trim()) missing.push("lastName");
    if (!formData.email.trim()) missing.push("email");

    if (missing.length > 0) {
      setInvalidFields(missing);
      setError("Please complete the required fields.");
      setLoading(false);
      const firstMissing = missing[0];
      if (firstMissing === "firstName") firstNameRef.current?.focus();
      else if (firstMissing === "lastName") lastNameRef.current?.focus();
      else emailRef.current?.focus();
      return;
    }

    const email = formData.email.trim();
    if (!email.includes("@") || !email.includes(".")) {
      setInvalidFields(["email"]);
      setError("Enter an email with an @ and a domain.");
      setLoading(false);
      emailRef.current?.focus();
      return;
    }

    try {
      const response = await fetch("/api/leads/capture", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          priceMin: formData.priceMin ? parseInt(formData.priceMin) : undefined,
          priceMax: formData.priceMax ? parseInt(formData.priceMax) : undefined,
          bedrooms: formData.bedrooms ? parseInt(formData.bedrooms) : undefined,
          bathrooms: formData.bathrooms
            ? parseInt(formData.bathrooms)
            : undefined,
          source,
          stage,
          tags: defaultTags,
          turnstileToken, // CAPTCHA verification
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to submit form");
      }

      setSuccess(true);
      setInvalidFields([]);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        priceMin: "",
        priceMax: "",
        bedrooms: "",
        bathrooms: "",
        neighborhoods: [],
        timeline: "",
        preApproved: false,
      });
      setTurnstileToken(""); // Reset CAPTCHA

      if (onSuccess) onSuccess();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError(errorMessage);
      if (onError) onError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fieldInvalid = (name: string) => invalidFields.includes(name);
  const turnstileRequired = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
  const turnstilePending = turnstileRequired && !turnstileToken;

  if (success) {
    return (
      <div
        className="rounded-lg border border-green-200 bg-green-50 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="text-4xl mb-4" aria-hidden="true">
          ✓
        </div>
        <h3 className="text-xl font-semibold text-green-900 mb-2">
          Request received
        </h3>
        <p className="text-green-700">
          I will call or email during posted office hours. For a faster reply,
          call{" "}
          <a href={CTA_TEL} className={TEXT_LINK_CLASS}>
            {CTA_PHONE}
          </a>{" "}
          or email{" "}
          <a href={AGENT_EMAIL_MAILTO} className={TEXT_LINK_CLASS}>
            {AGENT_EMAIL}
          </a>
          .
        </p>
        <Button
          onClick={() => setSuccess(false)}
          variant="outline"
          className="mt-4 min-h-11"
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {error && (
        <div
          ref={errorRef}
          id={ids.error}
          tabIndex={-1}
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </div>
      )}

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor={ids.firstName}
            className="block text-sm font-medium mb-1"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <Input
            ref={firstNameRef}
            id={ids.firstName}
            name="firstName"
            autoComplete="given-name"
            autoCapitalize="words"
            autoCorrect="off"
            value={formData.firstName}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={fieldInvalid("firstName")}
            aria-describedby={error ? ids.error : undefined}
            disabled={loading}
          />
        </div>

        <div>
          <label
            htmlFor={ids.lastName}
            className="block text-sm font-medium mb-1"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <Input
            ref={lastNameRef}
            id={ids.lastName}
            name="lastName"
            autoComplete="family-name"
            autoCapitalize="words"
            autoCorrect="off"
            value={formData.lastName}
            onChange={handleChange}
            required
            aria-required="true"
            aria-invalid={fieldInvalid("lastName")}
            aria-describedby={error ? ids.error : undefined}
            disabled={loading}
          />
        </div>
      </div>

      <div>
        <label htmlFor={ids.email} className="block text-sm font-medium mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <Input
          ref={emailRef}
          id={ids.email}
          name="email"
          type="email"
          autoComplete="email"
          spellCheck={false}
          value={formData.email}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={fieldInvalid("email")}
          aria-describedby={error ? ids.error : undefined}
          disabled={loading}
        />
      </div>

      <div>
        <label htmlFor={ids.phone} className="block text-sm font-medium mb-1">
          Phone{" "}
          <span className="font-normal text-slate-600">
            (recommended for a faster callback)
          </span>
        </label>
        <Input
          id={ids.phone}
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          disabled={loading}
          placeholder="(702) 555-1234…"
        />
      </div>

      {/* Property Search Fields */}
      {formType === "property-search" && (
        <>
          <div className="border-t pt-4 mt-4">
            <h3 className="font-semibold mb-3">Property Search Criteria</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={ids.priceMin}
                className="block text-sm font-medium mb-1"
              >
                Min Price
              </label>
              <Input
                id={ids.priceMin}
                name="priceMin"
                type="number"
                inputMode="numeric"
                autoComplete="off"
                value={formData.priceMin}
                onChange={handleChange}
                disabled={loading}
                placeholder="300000…"
              />
            </div>

            <div>
              <label
                htmlFor={ids.priceMax}
                className="block text-sm font-medium mb-1"
              >
                Max Price
              </label>
              <Input
                id={ids.priceMax}
                name="priceMax"
                type="number"
                inputMode="numeric"
                autoComplete="off"
                value={formData.priceMax}
                onChange={handleChange}
                disabled={loading}
                placeholder="600000…"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={ids.bedrooms}
                className="block text-sm font-medium mb-1"
              >
                Bedrooms
              </label>
              <Input
                id={ids.bedrooms}
                name="bedrooms"
                type="number"
                inputMode="numeric"
                autoComplete="off"
                value={formData.bedrooms}
                onChange={handleChange}
                disabled={loading}
                min="1"
                max="10"
              />
            </div>

            <div>
              <label
                htmlFor={ids.bathrooms}
                className="block text-sm font-medium mb-1"
              >
                Bathrooms
              </label>
              <Input
                id={ids.bathrooms}
                name="bathrooms"
                type="number"
                inputMode="decimal"
                autoComplete="off"
                step="0.5"
                value={formData.bathrooms}
                onChange={handleChange}
                disabled={loading}
                min="1"
                max="10"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor={ids.timeline}
              className="block text-sm font-medium mb-1"
            >
              Timeline
            </label>
            <select
              id={ids.timeline}
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              disabled={loading}
              className={selectClassName}
            >
              <option value="">Select timeline…</option>
              <option value="Immediately">Immediately (ASAP)</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="6-12 months">6-12 months</option>
              <option value="Just looking">Just looking</option>
            </select>
          </div>

          <div className="flex items-center gap-2 min-h-11">
            <input
              id={ids.preApproved}
              name="preApproved"
              type="checkbox"
              checked={formData.preApproved}
              onChange={handleChange}
              disabled={loading}
              className="h-5 w-5 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            />
            <label htmlFor={ids.preApproved} className="text-sm">
              I am pre-approved for financing
            </label>
          </div>
        </>
      )}

      {/* Message */}
      <div>
        <label htmlFor={ids.message} className="block text-sm font-medium mb-1">
          {formType === "home-valuation" ? "Address and notes" : "Message"}
        </label>
        <textarea
          id={ids.message}
          name="message"
          autoComplete={
            formType === "home-valuation" ? "street-address" : "off"
          }
          value={formData.message}
          onChange={handleChange}
          disabled={loading}
          rows={4}
          className={textareaClassName}
          placeholder={
            formType === "home-valuation"
              ? "Street address, occupancy (owner / vacant / tenant), and anything that would change a CMA…"
              : "How can Dr. Jan Duffy help you…"
          }
        />
      </div>

      {/* Cloudflare Turnstile CAPTCHA */}
      {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
        <div className="flex justify-center">
          <Turnstile
            siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
            onSuccess={setTurnstileToken}
            onError={() =>
              setError(
                "CAPTCHA verification failed. Please refresh and try again.",
              )
            }
            onExpire={() => setTurnstileToken("")}
            options={{
              theme: "light",
              size: "normal",
            }}
          />
        </div>
      )}

      {turnstilePending && (
        <p id={ids.turnstile} className="text-center text-sm text-slate-600">
          Complete the CAPTCHA to send.
        </p>
      )}

      <Button
        type="submit"
        disabled={loading || turnstilePending}
        aria-describedby={turnstilePending ? ids.turnstile : undefined}
        className="min-h-11 w-full"
      >
        {loading
          ? "Submitting…"
          : formType === "home-valuation"
            ? "Request a CMA"
            : formType === "property-search"
              ? "Ask about listings"
              : "Send to Dr. Jan Duffy"}
      </Button>

      <p className="text-xs text-slate-600 text-center">
        By submitting this form, you consent to be contacted by Dr. Jan Duffy.
      </p>
    </form>
  );
}
