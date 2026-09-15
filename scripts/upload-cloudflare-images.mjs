#!/usr/bin/env node
/**
 * Upload git-backed public/images files to Cloudflare Images.
 * Custom ids match lib/site-images.cloudflareImageId (path with slashes → hyphens).
 *
 * Requires: CLOUDFLARE_ACCOUNT_ID, CLOUDFLARE_API_TOKEN
 * Docs (2026): POST /accounts/{account_id}/images/v1
 *
 * Usage: node scripts/upload-cloudflare-images.mjs
 */

import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const imagesRoot = path.join(root, "public", "images");
const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
const token = process.env.CLOUDFLARE_API_TOKEN;

function toImageId(relativePosix) {
  return relativePosix.replace(/\.[^.]+$/, "").replace(/\//g, "-");
}

async function walk(dir, acc = []) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full, acc);
    } else if (/\.(png|jpe?g|webp|avif|gif)$/i.test(entry.name)) {
      acc.push(full);
    }
  }
  return acc;
}

async function upload(filePath) {
  const relative = path
    .relative(path.join(root, "public"), filePath)
    .split(path.sep)
    .join("/");
  const id = toImageId(relative);
  const buffer = await readFile(filePath);
  const form = new FormData();
  form.set("id", id);
  form.set("file", new Blob([buffer]), path.basename(filePath));
  form.set("metadata", JSON.stringify({ gitPath: `/${relative}` }));

  const res = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    },
  );
  const json = await res.json();
  return { id, relative, ok: Boolean(json.success), json };
}

async function main() {
  if (!accountId || !token) {
    console.error(
      "CLOUDFLARE_ACCOUNT_ID and CLOUDFLARE_API_TOKEN are required. Git copies in public/images remain the live backup until those secrets are set.",
    );
    process.exit(2);
  }

  const files = await walk(imagesRoot);
  if (files.length === 0) {
    console.error("No images found under public/images");
    process.exit(1);
  }

  let failed = 0;
  for (const file of files) {
    try {
      const result = await upload(file);
      if (result.ok) {
        console.log(`uploaded ${result.relative} → ${result.id}`);
      } else {
        failed += 1;
        console.error(`FAILED ${result.relative}`, result.json?.errors);
      }
    } catch (error) {
      failed += 1;
      console.error(`FAILED ${file}`, error);
    }
  }

  if (failed > 0) {
    process.exit(1);
  }
}

main();
