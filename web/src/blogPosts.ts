export type BlogPost = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  content: string[];
  quote?: string;
  quoteBy?: string;
  images?: Array<{ src: string; alt: string }>;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'eanrunner-catalog-launched-today',
    date: 'June 6, 2026',
    title: 'EANrunner catalog launched today',
    summary: 'We launched the new catalog with faster search, clearer product views, and a cleaner browsing flow.',
    content: [
      'Today we launched the new EANrunner catalog experience. The main goal was to make product discovery feel clear, structured, and reliable from the first click.',
      'The new version improves how retailers and distributors browse products, compare options, and understand data quality. Search is faster, card and list views are more predictable, and product navigation is cleaner across the whole flow.',
      'We also improved consistency in page layout, menus, and key actions so users can move through the catalog with less friction. This release is a foundation for continuous weekly improvements.',
    ],
  },
  {
    slug: 'passed-50000-products',
    date: 'March 30, 2026',
    title: 'Passed 50,000 products',
    summary: 'Catalog milestone reached with stronger product structure and better market-ready data coverage.',
    content: [
      'We passed 50,000 products in the catalog, which marks an important milestone for our distributor and retailer network.',
      'The number itself matters, but quality matters more. We focused on keeping product data more structured with better titles, cleaner category context, and stronger market relevance.',
      'This milestone gives retailers broader choice while still helping them find products that match their strategy, price expectations, and customer demand.',
    ],
  },
  {
    slug: 'why-we-are-building-eanrunner',
    date: 'March 30, 2026',
    title: 'Why we are building EANrunner',
    summary:
      'Most ecommerce stores do not need more products in stock, they need the right products online.',
    content: [
      'Many retailers struggle with too many suppliers, too much manual product work, and too much messy product data. The challenge is usually not access to products, but getting the right products online with the right quality and speed.',
      'EANrunner is built to connect distributors and retailers in a way that makes products ready to sell, not just available in a file. We focus on structured price, stock, and content that can actually be used in day-to-day ecommerce operations.',
      'Our long-term goal is to reduce repetitive catalog work so teams can spend more time on selection, positioning, and growth. Better structure is what turns product data into business value.',
    ],
  },
  {
    slug: 'microsoft-founders-days-practical-learnings',
    date: 'May 21, 2026',
    title: 'Microsoft Founders Days: practical learnings',
    summary:
      'We joined Founders Days in Stockholm and had strong conversations on B2B execution and go-to-market focus.',
    content: [
      'We spent two days at Founders Days in Stockholm discussing practical B2B growth, distribution, and execution. The sessions were direct, useful, and grounded in real operator experience.',
      'A key theme was that strategy only matters when it can be translated into daily measurable actions. For early-stage teams, distribution, data quality, and relationships are often the real leverage points.',
      'We are very thankful to Microsoft for the support they gave us at this event, and to Netlight for organizing it. We left with useful perspectives that we are already applying in product and partner work at EANrunner.',
    ],
    quote: 'First time founders build product. Second time founders build for distribution (!!!!!).',
    quoteBy: 'Quote shared at the event (original speaker unknown)',
    images: [
      {
        src: '/blog/1779758626161.jpg',
        alt: 'Microsoft Founders Days event group photo',
      },
      {
        src: '/blog/1779758625995.jpg',
        alt: 'Founders Days poster with Microsoft, Netlight, and NVIDIA',
      },
      {
        src: '/blog/Founder_Days_2026_66.jpg',
        alt: 'Speaker at Microsoft Founders Days event',
      },
    ],
  },
];

export function getSortedBlogPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
