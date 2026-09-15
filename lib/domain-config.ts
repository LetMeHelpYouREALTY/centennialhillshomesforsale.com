/**
 * Multi-domain configuration for Dr. Jan Duffy's Las Vegas real estate network.
 * Each domain maps to neighborhood-specific content rendered server-side via middleware.
 */

import { clipSerpDescription, withClientEmail } from "./page-seo";

export interface DomainConfig {
  domain: string;
  neighborhood: string;
  tagline: string;
  description: string;
  heroHeadline: string;
  heroSubheadline: string;
  keywords: string[];
  pageType:
    | "community"
    | "search"
    | "lifestyle"
    | "investment"
    | "55plus"
    | "luxury";
  realscoutAgentId: string;
  ctaBadge: string;
  ctaHeadline: string;
  ctaSubheadline: string;
}

const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";

export const DOMAIN_CONFIGS: Record<string, DomainConfig> = {
  "consenzaestates.com": {
    domain: "consenzaestates.com",
    neighborhood: "Consenza Estates",
    tagline: "Consenza Estates Homes for Sale",
    description:
      "Search Consenza Estates listings in Las Vegas with Dr. Jan Duffy.",
    heroHeadline: "Consenza Estates Homes for Sale",
    heroSubheadline:
      "Custom and estate listings in this west-side Las Vegas community.",
    keywords: [
      "Consenza Estates homes",
      "Las Vegas luxury real estate",
      "Consenza Estates Las Vegas",
    ],
    pageType: "luxury",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Consenza Estates listings",
    ctaHeadline: "Search live Consenza Estates MLS",
    ctaSubheadline:
      "I will pull live MLS for this community. Call (702) 222-1964 or email homes@heyberkshire.com with the address.",
  },
  "aliantehomesforsale.com": {
    domain: "aliantehomesforsale.com",
    neighborhood: "Aliante",
    tagline: "Aliante Homes for Sale",
    description:
      "Search Aliante homes for sale in North Las Vegas. Live MLS with Dr. Jan Duffy.",
    heroHeadline: "Aliante Homes for Sale",
    heroSubheadline:
      "Confirm the Aliante village on live MLS, then tour. Call (702) 222-1964 or email homes@heyberkshire.com.",
    keywords: [
      "Aliante homes for sale",
      "Aliante North Las Vegas",
      "Aliante real estate",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Aliante listings",
    ctaHeadline: "Search Aliante Homes Today",
    ctaSubheadline:
      "Get current Aliante listings from MLS. Call (702) 222-1964 or email homes@heyberkshire.com for a live pull.",
  },
  "californiaforeverbroker.com": {
    domain: "californiaforeverbroker.com",
    neighborhood: "Las Vegas",
    tagline: "Relocating from California to Las Vegas",
    description:
      "California to Las Vegas relocation. Compare live Las Vegas comps with Dr. Jan Duffy.",
    heroHeadline: "Leaving California for Las Vegas?",
    heroSubheadline:
      "No state income tax on wages. Confirm purchase price, HOA, and insurance against your California file — not a sunshine slogan.",
    keywords: [
      "California to Las Vegas move",
      "relocation Las Vegas",
      "Nevada real estate for Californians",
    ],
    pageType: "lifestyle",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "California relocation",
    ctaHeadline: "Sequence a California sale and a Las Vegas purchase",
    ctaSubheadline:
      "I've helped California buyers sequence a sale and a Las Vegas purchase. Call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  "centennialhillshomesforsale.com": {
    domain: "centennialhillshomesforsale.com",
    neighborhood: "Centennial Hills",
    tagline: "Centennial Hills Homes for Sale",
    description:
      "Centennial Hills homes for sale in northwest Las Vegas (89149, 89131, 89143). Current listings with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
    heroHeadline: "Centennial Hills Homes for Sale",
    heroSubheadline:
      "Northwest Las Vegas listings near Centennial Hills Park and Town Center — 89149, not 89144.",
    keywords: [
      "centennial hills real estate",
      "centennial hills las vegas real estate",
      "homes for sale in centennial hills nv",
      "centennial hills homes for sale",
      "centennial hills town center nv real estate",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Centennial Hills listings",
    ctaHeadline: "See Centennial Hills homes this week",
    ctaSubheadline:
      "I will send live 89149 / 89131 / 89143 matches — call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  "drjanduffyreviews.com": {
    domain: "drjanduffyreviews.com",
    neighborhood: "Las Vegas",
    tagline: "Dr. Jan Duffy — Client Reviews",
    description:
      "Read Google reviews for Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964 or email homes@heyberkshire.com.",
    heroHeadline: "What Clients Say About Dr. Jan",
    heroSubheadline:
      "Read Google reviews on the profile. License S.0197614.LLC. Serving Las Vegas since 2008.",
    keywords: [
      "Dr Jan Duffy reviews",
      "BHHS Nevada Properties reviews",
      "Las Vegas realtor reviews",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Las Vegas REALTOR®",
    ctaHeadline: "Call or email the client line",
    ctaSubheadline:
      "Call (702) 222-1964 or email homes@heyberkshire.com with the address. I answer the client line.",
  },
  "drjanetduffy.com": {
    domain: "drjanetduffy.com",
    neighborhood: "Las Vegas",
    tagline: "Dr. Jan Duffy — Las Vegas REALTOR®",
    description:
      "Dr. Jan Duffy, Las Vegas REALTOR® at Berkshire Hathaway HomeServices Nevada Properties.",
    heroHeadline: "Dr. Jan Duffy | Las Vegas Real Estate",
    heroSubheadline: "Serving Las Vegas since 2008. License S.0197614.LLC.",
    keywords: [
      "Dr Jan Duffy",
      "Dr. Jan Duffy Las Vegas realtor",
      "BHHS Nevada Properties",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Las Vegas REALTOR®",
    ctaHeadline: "Call or email with the address",
    ctaSubheadline:
      "Call, text, or email homes@heyberkshire.com — I answer the client line.",
  },
  "eaglehillshomes.com": {
    domain: "eaglehillshomes.com",
    neighborhood: "Eagle Hills",
    tagline: "Eagle Hills Homes for Sale",
    description:
      "Search Eagle Hills homes for sale in Las Vegas. Live MLS with Dr. Jan Duffy.",
    heroHeadline: "Eagle Hills Homes for Sale",
    heroSubheadline:
      "Eagle Hills listings in Las Vegas. Call (702) 222-1964 or email homes@heyberkshire.com for a live pull.",
    keywords: [
      "Eagle Hills homes",
      "Eagle Hills Las Vegas",
      "Las Vegas real estate",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Eagle Hills listings",
    ctaHeadline: "Search live Eagle Hills MLS",
    ctaSubheadline:
      "I will pull live Eagle Hills MLS. Call (702) 222-1964 or email homes@heyberkshire.com with the address.",
  },
  "goodtoknowrealtor.com": {
    domain: "goodtoknowrealtor.com",
    neighborhood: "Las Vegas",
    tagline: "Las Vegas Real Estate — Good to Know",
    description:
      "Las Vegas real estate tips, market data, and insider knowledge from Dr. Jan Duffy.",
    heroHeadline: "Good to Know — Las Vegas Real Estate",
    heroSubheadline:
      "Market data, neighborhood guides, and first-party notes from a Las Vegas practice since 2008.",
    keywords: [
      "Las Vegas real estate tips",
      "Las Vegas market data",
      "Las Vegas realtor advice",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Market notes",
    ctaHeadline: "Get sourced listing medians",
    ctaSubheadline:
      "Sourced listing medians, neighborhood snapshots, and live MLS search.",
  },
  "heritageatstonebridgehomes.com": {
    domain: "heritageatstonebridgehomes.com",
    neighborhood: "Heritage at Stonebridge",
    tagline: "Heritage at Stonebridge Homes for Sale",
    description:
      "Heritage at Stonebridge 55+ active adult community homes. Confirm HOA and occupancy with Dr. Jan Duffy.",
    heroHeadline: "Heritage at Stonebridge Homes",
    heroSubheadline:
      "Heritage at Stonebridge 55+ HOPA campus in Summerlin. Confirm occupancy, HOA, and live MLS with Dr. Jan Duffy.",
    keywords: [
      "Heritage Stonebridge homes",
      "55 plus Summerlin",
      "active adult Las Vegas",
    ],
    pageType: "55plus",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "55+ communities",
    ctaHeadline: "Heritage at Stonebridge resales",
    ctaSubheadline:
      "I tour Heritage by HOPA occupancy and live MLS. Call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  "heritagestonebridge.com": {
    domain: "heritagestonebridge.com",
    neighborhood: "Heritage at Stonebridge",
    tagline: "Heritage Stonebridge Las Vegas",
    description:
      "Heritage Stonebridge 55+ community in Summerlin Las Vegas. Confirm HOPA occupancy and live MLS with Dr. Jan Duffy.",
    heroHeadline: "Heritage Stonebridge Homes for Sale",
    heroSubheadline:
      "Summerlin 55+ HOPA campus — rec building, floor plans, and occupancy rules on the resale docs.",
    keywords: [
      "Heritage Stonebridge",
      "Summerlin 55 plus",
      "active adult Summerlin",
    ],
    pageType: "55plus",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Heritage Stonebridge",
    ctaHeadline: "Your Heritage Stonebridge Home",
    ctaSubheadline:
      "Floor plans, rec access, and occupancy are on the resale packet. Call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  "justcalldrjan.com": {
    domain: "justcalldrjan.com",
    neighborhood: "Las Vegas",
    tagline: "Just Call Dr. Jan — Las Vegas Real Estate",
    description:
      "Ready to buy or sell in Las Vegas? Call Dr. Jan Duffy at (702) 222-1964 or email homes@heyberkshire.com.",
    heroHeadline: "Just Call Dr. Jan",
    heroSubheadline:
      "Serving Las Vegas since 2008. No runaround — just local MLS work.",
    keywords: ["call Dr Jan Duffy", "Las Vegas realtor phone", "BHHS Nevada"],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Direct Access",
    ctaHeadline: "I Answer My Own Phone",
    ctaSubheadline:
      "No assistant, no callback queue. Call or text (702) 222-1964 or email homes@heyberkshire.com — I answer the client line.",
  },
  "lasvegashomeexpert.com": {
    domain: "lasvegashomeexpert.com",
    neighborhood: "Las Vegas",
    tagline: "Las Vegas REALTOR® — Dr. Jan Duffy",
    description:
      "Las Vegas home buying and selling. Dr. Jan Duffy, BHHS Nevada Properties.",
    heroHeadline: "Las Vegas REALTOR®",
    heroSubheadline:
      "Las Vegas REALTOR® since 2008. Call (702) 222-1964 or email homes@heyberkshire.com for a live MLS pull — not a ranking slogan.",
    keywords: [
      "Las Vegas home expert",
      "Las Vegas real estate expert",
      "buy sell Las Vegas homes",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Las Vegas REALTOR®",
    ctaHeadline: "Work with Dr. Jan Duffy",
    ctaSubheadline: "Las Vegas market knowledge from a practice since 2008.",
  },
  "lonemountainheights.com": {
    domain: "lonemountainheights.com",
    neighborhood: "Lone Mountain Heights",
    tagline: "Lone Mountain Heights Homes",
    description:
      "Lone Mountain Heights homes for sale in Northwest Las Vegas. Dr. Jan Duffy, REALTOR®.",
    heroHeadline: "Lone Mountain Heights Homes for Sale",
    heroSubheadline:
      "Northwest Las Vegas lots near Lone Mountain. Confirm street and ZIP on a CMA.",
    keywords: [
      "Lone Mountain Heights",
      "Northwest Las Vegas homes",
      "Lone Mountain real estate",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Lone Mountain listings",
    ctaHeadline: "Search live Lone Mountain MLS",
    ctaSubheadline:
      "I will pull live Lone Mountain MLS. Call (702) 222-1964 or email homes@heyberkshire.com with the address.",
  },
  "lonemountainvistas.com": {
    domain: "lonemountainvistas.com",
    neighborhood: "Lone Mountain Vistas",
    tagline: "Lone Mountain Vistas Homes",
    description:
      "Lone Mountain Vistas homes for sale in Las Vegas. Live MLS with Dr. Jan Duffy.",
    heroHeadline: "Lone Mountain Vistas Homes for Sale",
    heroSubheadline:
      "Lone Mountain corridor listings. Confirm lot and view on the live MLS sheet.",
    keywords: [
      "Lone Mountain Vistas",
      "Lone Mountain Las Vegas",
      "Northwest Las Vegas real estate",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Lone Mountain Vistas",
    ctaHeadline: "Lone Mountain Vistas listings",
    ctaSubheadline:
      "Lone Mountain views and lot sizes vary by street — I will pull live inventory, not a vista slogan.",
  },
  "macdonaldhighlandshomes.com": {
    domain: "macdonaldhighlandshomes.com",
    neighborhood: "MacDonald Highlands",
    tagline: "MacDonald Highlands Luxury Homes",
    description:
      "MacDonald Highlands luxury homes for sale in Henderson, Nevada. Live comps with Dr. Jan Duffy.",
    heroHeadline: "MacDonald Highlands Homes for Sale",
    heroSubheadline:
      "Guard-gated Henderson hillside community. Price from live comps, not a prestige slogan.",
    keywords: [
      "MacDonald Highlands homes",
      "Henderson luxury real estate",
      "MacDonald Highlands Henderson",
    ],
    pageType: "luxury",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Luxury listings",
    ctaHeadline: "MacDonald Highlands private tours",
    ctaSubheadline:
      "Private tours available. Confirm hillside vs valley lots on the live MLS sheet.",
  },
  "midtownlasvegascondos.com": {
    domain: "midtownlasvegascondos.com",
    neighborhood: "Midtown Las Vegas",
    tagline: "Midtown Las Vegas Condos for Sale",
    description:
      "Search midtown Las Vegas condos and high-rise living with Dr. Jan Duffy.",
    heroHeadline: "Midtown Las Vegas Condos for Sale",
    heroSubheadline:
      "Confirm the building, HOA, and any Strip view on the live MLS sheet.",
    keywords: [
      "midtown Las Vegas condos",
      "Las Vegas urban living",
      "downtown Las Vegas real estate",
    ],
    pageType: "luxury",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Condo listings",
    ctaHeadline: "Search live Las Vegas condo MLS",
    ctaSubheadline:
      "High-rises and lofts: I pull the building, HOA, and live inventory — not a floor-plan slogan.",
  },
  "mountainedgehomes.com": {
    domain: "mountainedgehomes.com",
    neighborhood: "Mountain's Edge",
    tagline: "Mountain's Edge Homes for Sale",
    description:
      "Search Mountain's Edge homes for sale in Southwest Las Vegas with Dr. Jan Duffy.",
    heroHeadline: "Mountain's Edge Homes for Sale",
    heroSubheadline:
      "Mountain's Edge is a southwest Las Vegas master plan around Exploration Peak Park. Confirm ZIP 89178 vs 89179 on a CMA.",
    keywords: [
      "Mountain's Edge homes",
      "Mountain Edge Las Vegas",
      "Southwest Las Vegas real estate",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Mountain's Edge listings",
    ctaHeadline: "Search live Mountain's Edge MLS",
    ctaSubheadline:
      "Mountain's Edge around Exploration Peak Park. Confirm 89178 vs 89179 on a CMA.",
  },
  "openhouseupdate.com": {
    domain: "openhouseupdate.com",
    neighborhood: "Las Vegas",
    tagline: "Las Vegas Open House Schedule",
    description:
      "Las Vegas open houses this weekend. Find open homes near you with Dr. Jan Duffy.",
    heroHeadline: "Las Vegas Open Houses",
    heroSubheadline:
      "This weekend's open houses across the Las Vegas Valley — confirm times before you drive.",
    keywords: [
      "Las Vegas open houses",
      "open house Las Vegas",
      "homes open this weekend Las Vegas",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Open houses",
    ctaHeadline: "Schedule a Private Showing",
    ctaSubheadline:
      "Can't make the open house? I'll get you a private tour on your schedule.",
  },
  "openhouseupdates.com": {
    domain: "openhouseupdates.com",
    neighborhood: "Las Vegas",
    tagline: "Las Vegas Open House Updates",
    description:
      "Current Las Vegas open house listings and schedule. Find your next home this weekend.",
    heroHeadline: "Las Vegas Open House Updates",
    heroSubheadline:
      "Confirm open-house times before you drive — Las Vegas, Henderson, and Summerlin.",
    keywords: [
      "Las Vegas open house updates",
      "Henderson open houses",
      "Summerlin open houses",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Weekend Open Houses",
    ctaHeadline: "This weekend's matching open houses",
    ctaSubheadline:
      "I will send this weekend's open houses that match beds, ZIP, and budget.",
  },
  "samaritanpharma.com": {
    domain: "samaritanpharma.com",
    neighborhood: "Las Vegas",
    tagline: "Las Vegas Real Estate",
    description:
      "Las Vegas real estate services from Dr. Jan Duffy, BHHS Nevada Properties.",
    heroHeadline: "Las Vegas Homes for Sale",
    heroSubheadline: "Live MLS and a written plan from Dr. Jan Duffy.",
    keywords: [
      "Las Vegas homes for sale",
      "Las Vegas real estate",
      "Dr Jan Duffy",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Las Vegas REALTOR®",
    ctaHeadline: "Search live Las Vegas MLS",
    ctaSubheadline: "Local MLS work from a Las Vegas practice since 2008.",
  },
  "searchforhomesinhenderson.com": {
    domain: "searchforhomesinhenderson.com",
    neighborhood: "Henderson",
    tagline: "Search Homes in Henderson NV",
    description:
      "Search Henderson NV homes for sale. Live MLS with Dr. Jan Duffy.",
    heroHeadline: "Search Homes in Henderson, NV",
    heroSubheadline:
      "Henderson parks, trails, and master-planned villages — Green Valley, Inspirada, Anthem, and Lake Las Vegas.",
    keywords: [
      "Henderson NV homes for sale",
      "Henderson real estate",
      "search Henderson homes",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Henderson listings",
    ctaHeadline: "Search live Henderson MLS",
    ctaSubheadline:
      "Green Valley, MacDonald Highlands, Anthem — I pull live Henderson MLS by village.",
  },
  "searchforlasvegashomes.com": {
    domain: "searchforlasvegashomes.com",
    neighborhood: "Las Vegas",
    tagline: "Search Las Vegas Homes for Sale",
    description:
      "Search all Las Vegas homes for sale. Live MLS search with Dr. Jan Duffy, BHHS.",
    heroHeadline: "Search Las Vegas Homes for Sale",
    heroSubheadline: "Live MLS search for Las Vegas Valley listings.",
    keywords: [
      "search Las Vegas homes",
      "Las Vegas MLS",
      "homes for sale Las Vegas NV",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "MLS search",
    ctaHeadline: "Start Your Home Search",
    ctaSubheadline:
      "Tell me the beds, ZIP, and budget. I will send live MLS matches — not off-market claims.",
  },
  "skyecanyonhomeexpert.com": {
    domain: "skyecanyonhomeexpert.com",
    neighborhood: "Skye Canyon",
    tagline: "Skye Canyon Homes for Sale",
    description:
      "Skye Canyon homes for sale in Northwest Las Vegas with Dr. Jan Duffy.",
    heroHeadline: "Skye Canyon Homes for Sale",
    heroSubheadline:
      "Northwest Las Vegas master plan. Confirm new construction vs resale on that file.",
    keywords: [
      "Skye Canyon homes",
      "Skye Canyon Las Vegas",
      "Northwest Las Vegas new construction",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Skye Canyon listings",
    ctaHeadline: "Search Skye Canyon listings",
    ctaSubheadline:
      "New construction lots, resales, and builder incentives. Register before the first model visit.",
  },
  "skyecanyonrealestateexpert.com": {
    domain: "skyecanyonrealestateexpert.com",
    neighborhood: "Skye Canyon",
    tagline: "Skye Canyon Real Estate",
    description:
      "Skye Canyon new construction and resale in Northwest Las Vegas with Dr. Jan Duffy.",
    heroHeadline: "Skye Canyon Real Estate",
    heroSubheadline:
      "Skye Canyon new construction and resale. Register before the first model-home visit. Confirm builder incentives on that file.",
    keywords: [
      "Skye Canyon real estate",
      "Skye Canyon NW Las Vegas",
      "Skye Canyon new homes",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Skye Canyon REALTOR®",
    ctaHeadline: "Work with Dr. Jan Duffy",
    ctaSubheadline:
      "Skye Canyon files from a Las Vegas practice since 2008. Call (702) 222-1964 or email homes@heyberkshire.com for live inventory.",
  },
  "speedycashhomeoffers.com": {
    domain: "speedycashhomeoffers.com",
    neighborhood: "Las Vegas",
    tagline: "Fast Cash Home Offers Las Vegas",
    description:
      "Sell your Las Vegas home fast for cash. Request a cash-offer worksheet from Dr. Jan Duffy.",
    heroHeadline: "Fast Cash Offers for Las Vegas Homes",
    heroSubheadline:
      "Ask for a cash-offer worksheet. Close date, repairs, and net are file-specific — not a 7-day slogan.",
    keywords: [
      "cash home offer Las Vegas",
      "sell house fast Las Vegas",
      "Las Vegas cash buyers",
    ],
    pageType: "search",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Cash offers",
    ctaHeadline: "Request a cash-offer worksheet",
    ctaSubheadline:
      "Call (702) 222-1964 or email homes@heyberkshire.com for a cash-offer worksheet on your Las Vegas home.",
  },
  "suncitysummerlinhomesforsale.com": {
    domain: "suncitysummerlinhomesforsale.com",
    neighborhood: "Sun City Summerlin",
    tagline: "Sun City Summerlin Homes for Sale",
    description:
      "Sun City Summerlin 55+ community homes for sale. Confirm HOA and occupancy with Dr. Jan Duffy.",
    heroHeadline: "Sun City Summerlin Homes for Sale",
    heroSubheadline:
      "Sun City Summerlin 55+ campus with 3 golf courses and 4 rec centers. Confirm HOA and occupancy on resale docs.",
    keywords: [
      "Sun City Summerlin homes",
      "Sun City Summerlin 55 plus",
      "active adult Summerlin",
    ],
    pageType: "55plus",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Sun City Summerlin",
    ctaHeadline: "Search live Sun City MLS",
    ctaSubheadline:
      "I work Sun City Summerlin files every week. Call (702) 222-1964 or email homes@heyberkshire.com and I will send live inventory.",
  },
  "sunstonelasvegashomes.com": {
    domain: "sunstonelasvegashomes.com",
    neighborhood: "Sunstone",
    tagline: "Sunstone Las Vegas Homes for Sale",
    description:
      "Sunstone community homes for sale in Northwest Las Vegas. Live MLS with Dr. Jan Duffy.",
    heroHeadline: "Sunstone Las Vegas Homes for Sale",
    heroSubheadline:
      "Sunstone master-plan listings in Northwest Las Vegas. Confirm village vs nearby ZIPs on a CMA.",
    keywords: [
      "Sunstone Las Vegas",
      "Sunstone homes for sale",
      "NW Las Vegas Sunstone",
    ],
    pageType: "community",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Sunstone listings",
    ctaHeadline: "Search live Sunstone MLS",
    ctaSubheadline:
      "Call (702) 222-1964 or email homes@heyberkshire.com for a live MLS pull on Sunstone.",
  },
  "theridgessummerlinhomes.com": {
    domain: "theridgessummerlinhomes.com",
    neighborhood: "The Ridges Summerlin",
    tagline: "The Ridges Summerlin Luxury Homes",
    description:
      "The Ridges Summerlin luxury homes for sale. Guard-gated custom villages — confirm HOA and live comps.",
    heroHeadline: "The Ridges Summerlin Homes for Sale",
    heroSubheadline:
      "The Ridges is guard-gated custom Summerlin. Price from live comps, not an exclusivity slogan.",
    keywords: [
      "The Ridges Summerlin",
      "Ridges Summerlin homes",
      "Summerlin luxury real estate",
    ],
    pageType: "luxury",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Luxury listings",
    ctaHeadline: "Private Tours of The Ridges",
    ctaSubheadline:
      "The Ridges is guard-gated custom Summerlin. Price from live comps — I will not claim off-market inventory I cannot show.",
  },
  "trilogysunstonehomes.com": {
    domain: "trilogysunstonehomes.com",
    neighborhood: "Trilogy at Sunstone",
    tagline: "Trilogy at Sunstone 55+ Homes",
    description:
      "Trilogy at Sunstone 55+ active adult community homes in Las Vegas with Dr. Jan Duffy.",
    heroHeadline: "Trilogy at Sunstone Homes for Sale",
    heroSubheadline:
      "Del Webb 55+ campus in Northwest Las Vegas. Confirm HOA, rec access, and occupancy on resale docs.",
    keywords: [
      "Trilogy Sunstone homes",
      "Trilogy at Sunstone Las Vegas",
      "Del Webb Northwest Las Vegas",
    ],
    pageType: "55plus",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Trilogy at Sunstone",
    ctaHeadline: "Trilogy at Sunstone 55+ resales",
    ctaSubheadline:
      "Del Webb rec campus, one-story plans, and HOPA occupancy — call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  "vegas55plushomes.com": {
    domain: "vegas55plushomes.com",
    neighborhood: "Las Vegas 55+",
    tagline: "Las Vegas 55+ Homes for Sale",
    description:
      "Search all Las Vegas 55+ active adult community homes. Sun City, Del Webb, Trilogy and more.",
    heroHeadline: "Las Vegas 55+ Homes for Sale",
    heroSubheadline:
      "Compare Sun City, Del Webb, Trilogy, and Heritage 55+ campuses by HOA, rec buildings, and occupancy rules.",
    keywords: [
      "Las Vegas 55 plus homes",
      "active adult Las Vegas",
      "Las Vegas senior communities",
    ],
    pageType: "55plus",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "55+ communities",
    ctaHeadline: "Search live 55+ MLS",
    ctaSubheadline:
      "I tour Sun City, Del Webb, Trilogy, Siena, and Heritage by ZIP and HOPA rules. Call (702) 222-1964 or email homes@heyberkshire.com.",
  },
  "yourdivorcerealtor.com": {
    domain: "yourdivorcerealtor.com",
    neighborhood: "Las Vegas",
    tagline: "Divorce Real Estate Las Vegas",
    description:
      "Confidential Las Vegas divorce real estate. Dr. Jan Duffy handles court-ordered sales with discretion.",
    heroHeadline: "Divorce real estate in Las Vegas",
    heroSubheadline:
      "Court-ordered and dual-agent-sensitive sales. Compensation and showing rules in writing.",
    keywords: [
      "divorce realtor Las Vegas",
      "divorce real estate Las Vegas",
      "court ordered sale Las Vegas",
    ],
    pageType: "lifestyle",
    realscoutAgentId: REALSCOUT_AGENT_ID,
    ctaBadge: "Confidential Support",
    ctaHeadline: "Confidential divorce-sale file",
    ctaSubheadline:
      "I handle divorce sales with complete discretion. Call (702) 222-1964 or email homes@heyberkshire.com.",
  },
};

// Default config for any domain not specifically listed
export const DEFAULT_CONFIG: DomainConfig = {
  domain: "default",
  neighborhood: "Las Vegas",
  tagline: "Las Vegas Homes for Sale",
  description:
    "Search Las Vegas homes for sale. Live MLS with Dr. Jan Duffy, BHHS Nevada Properties.",
  heroHeadline: "Las Vegas Homes for Sale",
  heroSubheadline:
    "Live MLS and a written plan from Dr. Jan Duffy — serving Las Vegas since 2008.",
  keywords: [
    "Las Vegas homes for sale",
    "Las Vegas real estate",
    "Dr Jan Duffy",
  ],
  pageType: "search",
  realscoutAgentId: REALSCOUT_AGENT_ID,
  ctaBadge: "Las Vegas REALTOR®",
  ctaHeadline: "Search live Las Vegas MLS",
  ctaSubheadline:
    "Call or text Dr. Jan at (702) 222-1964, or email homes@heyberkshire.com — I answer the client line.",
};

export function getDomainConfig(hostname: string): DomainConfig {
  const clean = hostname.replace(/^www\./, "").toLowerCase();
  const config = DOMAIN_CONFIGS[clean] ?? DEFAULT_CONFIG;
  return {
    ...config,
    description: clipSerpDescription(withClientEmail(config.description)),
    heroSubheadline: withClientEmail(config.heroSubheadline),
    ctaSubheadline: withClientEmail(config.ctaSubheadline),
  };
}
