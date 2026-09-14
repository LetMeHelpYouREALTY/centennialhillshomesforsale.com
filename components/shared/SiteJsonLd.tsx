import SchemaScript from "@/components/SchemaScript";
import {
  combineSchemas,
  generateOrganizationSchema,
  generateRealEstateAgentSchema,
  generateWebSiteSchema,
} from "@/lib/schema";

export function SiteJsonLd() {
  return (
    <SchemaScript
      id="site-jsonld"
      schema={combineSchemas(
        generateOrganizationSchema(),
        generateRealEstateAgentSchema(),
        generateWebSiteSchema(),
      )}
    />
  );
}
