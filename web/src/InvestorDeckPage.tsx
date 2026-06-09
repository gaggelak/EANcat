import { useEffect, useMemo, useRef, useState } from 'react';
import PageTopBar from './PageTopBar';
import SiteFooter from './SiteFooter';
import { useDocumentMeta } from './useDocumentMeta';

export default function InvestorDeckPage() {
  useDocumentMeta({
    title: 'Investor Deck',
    description: 'Explore the EANrunner investor deck, including market opportunity, traction, business model, and current fundraising details.',
    path: '/ir',
  });

  const slides = useMemo(
    () => [
      {
        kicker: 'Investor page',
        title: 'TAM: €1,000,000,000,000+',
        body: (
          <div className="flex h-full flex-col justify-between gap-6">
            <div className="space-y-6">
              <p className="text-[24px] font-medium leading-10 text-[hsl(214_100%_83%)]">
                The biggest TAM that you ever will get a chance to invest in
              </p>
              <p className="text-[22px] leading-9 text-[hsl(214_40%_90%)]">
                EANrunner helps suppliers and retailers turn product data into active sales channels.
              </p>
              <p className="text-[22px] leading-9 text-[hsl(214_40%_90%)]">
                European commerce is fragmented. Suppliers have products. Retailers want assortment. But too many
                commercial agreements never become live products because data, integrations, translations, pricing, and
                operational setup are too slow - especially across borders.
              </p>
              <p className="text-[22px] leading-9 text-[hsl(214_40%_90%)]">
                We are building the data layer between product supply and retail demand.
              </p>
            </div>

            <div className="border-t border-[hsl(220_34%_30%)] pt-3 text-[11px] leading-5 text-[hsl(217_22%_72%)]">
              <p>
                <sup>1</sup> Annual product purchasing volume behind European non-food retail.
              </p>
              <p className="mt-1">
                Source:{' '}
                <a
                  href="https://ec.europa.eu/eurostat/statistics-explained/index.php"
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-[hsl(214_100%_83%)] hover:underline"
                >
                  Eurostat Statistics Explained
                </a>
              </p>
              <p className="mt-1">
                Eurostat reports that EU distributive trade generated €11.2 trillion in net turnover in 2022. Based
                on these market structures, we estimate the annual purchasing layer behind European non-food retail is
                comfortably above €1 trillion.
              </p>
            </div>
          </div>
        ),
      },
      {
        kicker: 'Slide 2',
        title: 'The Problem',
        body: (
          <div className="flex h-full flex-col gap-8">
            <p className="max-w-4xl text-[24px] leading-10 text-[hsl(214_40%_92%)]">
              Products exist. Demand exists. But products do not go live because the data layer breaks between supplier and retailer.
            </p>
            <div className="mt-3 flex-1 md:mt-6">
              <ul className="max-w-5xl space-y-5 text-[22px] leading-9 text-[hsl(218_22%_92%)]">
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">1. Supplier data is inconsistent</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">2. Formats and quality vary by source</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">3. Cross-border requirements are missing</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">4. Price and stock are not synchronized</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">5. Retail systems reject non-ready data</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">6. Signed deals never become live products</li>
              </ul>
            </div>
            <p className="pb-1 text-3xl font-semibold text-[hsl(214_100%_83%)]">The bottleneck is data activation.</p>
          </div>
        ),
      },
      {
        kicker: 'Slide 3',
        title: 'What EANrunner does',
        body: (
          <div className="flex h-full flex-col gap-8">
            <p className="max-w-4xl text-[24px] leading-10 text-[hsl(214_40%_92%)]">
              We collect product data, format it, and integrate it with retailers.
            </p>
            <div className="mt-3 flex-1 md:mt-6">
              <ul className="max-w-5xl space-y-5 text-[22px] leading-9 text-[hsl(218_22%_92%)]">
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">1. Ingest supplier data</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">2. Structure product content</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">3. Enrich and translate</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">4. Sync price and stock</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">5. Deliver retailer-ready feeds</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">6. Keep products live across channels</li>
              </ul>
            </div>
            <p className="pb-1 text-3xl font-semibold text-[hsl(214_100%_83%)]">Make products go live faster.</p>
          </div>
        ),
      },
      {
        kicker: 'Slide 4',
        title: 'Business model',
        body: (
          <div className="flex h-full flex-col gap-8">
            <p className="max-w-4xl text-[24px] leading-10 text-[hsl(214_40%_92%)]">
              Simple model: we earn when product data turns into active sales.
            </p>
            <div className="mt-3 flex-1 md:mt-6">
              <div className="max-w-5xl space-y-5 text-[22px] leading-9 text-[hsl(218_22%_92%)]">
                <ul className="space-y-5">
                  <li>- 2% sales commission for suppliers on incremental export-market sales</li>
                  <li>- €0.1 per product per month for retailer updates when no supplier agreement is in place</li>
                </ul>
                <p>Lean core team with automation-first operations, scaling through partners. Only significant costs are servers and salaries for the two founders. We budget with a 90% margin.</p>
              </div>
            </div>
            <p className="pb-1 text-3xl font-semibold text-[hsl(214_100%_83%)]">Low fixed cost, recurring upside.</p>
          </div>
        ),
      },
      {
        kicker: 'Slide 5',
        title: 'Status',
        body: (
          <div className="flex h-full flex-col gap-8">
            <p className="max-w-4xl text-[24px] leading-10 text-[hsl(214_40%_92%)]">
              EANrunner is already connected to real retailers and supplier data.
            </p>
            <div className="mt-3 flex-1 md:mt-6">
              <ul className="max-w-5xl space-y-5 text-[22px] leading-9 text-[hsl(218_22%_92%)]">
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- 6 retailer integrations in progress, including 3 retailers with more than €10M annual revenue</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- Supplier product feeds connected</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- Pricing and stock workflows validated</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- First paying customer live</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- Approx. €1M GMV handled through pricing and sales workflows in the last 12 months</li>
              </ul>
            </div>
            <p className="pb-1 text-3xl font-semibold text-[hsl(214_100%_83%)]">Validated in market, ready to scale.</p>
          </div>
        ),
      },
      {
        kicker: 'Slide 6',
        title: 'Seed round and why now',
        body: (
          <div className="flex h-full flex-col gap-8">
            <section>
              <h3 className="text-[24px] font-semibold leading-10 text-[hsl(214_40%_92%)]">Seed round</h3>
              <div className="mt-3 max-w-5xl space-y-5 text-[22px] leading-9 text-[hsl(218_22%_92%)]">
                <p>We are raising €200,000 for 20%.</p>
                <p>18-24 months of focused founder execution.</p>
              </div>
            </section>

            <section className="mt-3 flex-1 md:mt-6">
              <h3 className="text-[24px] font-semibold leading-10 text-[hsl(214_40%_92%)]">Why now</h3>
              <ul className="mt-3 max-w-5xl space-y-5 text-[22px] leading-9 text-[hsl(218_22%_92%)]">
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- AI and automation make this possible now</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- No need for a large IT department</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- No need for a traditional sales organization</li>
                <li className="border-b border-[hsl(220_34%_30%)] pb-2">- No need to hire every function internally</li>
              </ul>
            </section>

            <p className="pb-1 text-3xl font-semibold text-[hsl(214_100%_83%)]">Efficient model, right timing.</p>
            </div>
        ),
      },
      {
        kicker: 'Slide 7',
        title: '3 phases of execution',
        body: (
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="rounded-xl border border-[hsl(341_70%_80%)] bg-[hsl(341_100%_98%)] p-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[hsl(341_74%_34%)]">2025</p>
              <h3 className="mt-2 text-xl font-bold text-[hsl(341_74%_32%)]">Phase 1) MVP</h3>
              <ul className="mt-3 space-y-1 text-[14px] leading-7 text-[hsl(341_52%_28%)]">
                <li>- First paying customer live</li>
                <li>- One retailer</li>
                <li>- One distributor</li>
                <li>- ~€1M GMV handled (pricing + sales)</li>
                <li>- Core workflows validated end-to-end</li>
              </ul>
            </article>

            <article className="rounded-xl border border-[hsl(36_74%_76%)] bg-[hsl(38_100%_97%)] p-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[hsl(36_84%_34%)]">Now</p>
              <h3 className="mt-2 text-xl font-bold text-[hsl(36_84%_34%)]">Phase 2) Standardize</h3>
              <ul className="mt-3 space-y-1 text-[14px] leading-7 text-[hsl(30_48%_30%)]">
                <li>- 5-10 new retailers onboarded</li>
                <li>- Move from manual to repeatable integrations</li>
                <li>- Build scalable product used across customers</li>
                <li>- Structure data</li>
                <li>- Secure Seed capital</li>
                <li>- Partnership in place</li>
              </ul>
            </article>

            <article className="rounded-xl border border-[hsl(215_14%_80%)] bg-[hsl(220_20%_97%)] p-4">
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[hsl(215_12%_46%)]">From next year</p>
              <h3 className="mt-2 text-xl font-bold text-[hsl(215_12%_42%)]">Phase 3) Scale up</h3>
              <ul className="mt-3 space-y-1 text-[14px] leading-7 text-[hsl(215_14%_40%)]">
                <li>- 10,000 retailers, 200 suppliers</li>
                <li>- Self-service onboarding</li>
                <li>- Platform-led growth and automation</li>
              </ul>
            </article>
          </div>
        ),
      },
      {
        kicker: 'Slide 8',
        title: 'About us',
        body: (
          <div className="space-y-5">
            <div className="space-y-4 text-[22px] leading-9 text-[hsl(218_22%_92%)]">
              <p>EANrunner was founded by Jacob and Anders after years in eCommerce, distribution, and product data.</p>
              <p>
                We saw the same challenge repeatedly: distributors and retailers wanted to work together, but products
                often never made it online because the systems behind them did not connect.
              </p>
              <p>EANrunner helps brands, distributors, and retailers connect through product data, automation, and AI.</p>
              <p>Amazon famously started in a garage. We already have two.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <figure className="overflow-hidden">
                <img src="/about/jacob-hq-black.jpg" alt="Jacob's garage" className="h-56 w-full object-contain md:h-64" loading="lazy" />
                <figcaption className="flex flex-col items-center gap-1 px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-[hsl(214_36%_92%)]">Jacob's garage</p>
                  <a href="mailto:jacob@eanrunner.com" className="text-xs text-[hsl(214_100%_83%)] hover:underline">jacob@eanrunner.com</a>
                  <a
                    href="https://www.linkedin.com/in/jacob-marup-lorentzen/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Jacob LinkedIn"
                    title="Jacob LinkedIn"
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#0A66C2] text-[10px] font-bold text-white"
                  >
                    in
                  </a>
                </figcaption>
              </figure>

              <figure className="overflow-hidden">
                <img src="/about/anders-garage-white.jpg" alt="Anders' garage" className="h-56 w-full object-contain md:h-64" loading="lazy" />
                <figcaption className="flex flex-col items-center gap-1 px-4 py-3 text-center">
                  <p className="text-sm font-semibold text-[hsl(214_36%_92%)]">Anders' garage</p>
                  <a href="mailto:anders@eanrunner.com" className="text-xs text-[hsl(214_100%_83%)] hover:underline">anders@eanrunner.com</a>
                  <a
                    href="https://www.linkedin.com/in/anderslorenzenandersen/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Anders LinkedIn"
                    title="Anders LinkedIn"
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-[4px] bg-[#0A66C2] text-[10px] font-bold text-white"
                  >
                    in
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        ),
      },
      {
        kicker: 'Slide 9',
        title: 'Make the first move',
        body: (
          <div className="space-y-5">
            <p className="text-[16px] leading-8 text-[hsl(214_40%_90%)]">
              Make the first move and reach out to us at info@eanrunner.com.
            </p>
            <a
              href="mailto:info@eanrunner.com?subject=Investor%20inquiry"
              className="inline-flex h-11 items-center rounded-lg border border-[hsl(221_72%_66%)] bg-[hsl(221_84%_95%)] px-5 text-sm font-semibold text-[hsl(221_72%_30%)] hover:brightness-95"
            >
              Email info@eanrunner.com
            </a>
          </div>
        ),
      },
    ],
    [],
  );

  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = slides.length;
  const mobileViewportRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mobileContentRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [mobileScale, setMobileScale] = useState(1);
  const deckBackground = {
    backgroundImage: [
      'radial-gradient(120% 120% at 80% 0%, rgba(84, 112, 255, 0.30) 0%, rgba(84, 112, 255, 0.0) 42%)',
      'radial-gradient(120% 120% at 0% 100%, rgba(50, 88, 235, 0.24) 0%, rgba(50, 88, 235, 0.0) 40%)',
      'linear-gradient(135deg, hsl(226 88% 14%) 0%, hsl(227 86% 12%) 46%, hsl(231 78% 19%) 100%)',
    ].join(','),
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setActiveSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      }
      if (event.key === 'ArrowLeft') {
        setActiveSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [totalSlides]);

  useEffect(() => {
    const computeMobileScale = () => {
      const slideScales = slides.map((_, index) => {
        const viewport = mobileViewportRefs.current[index];
        const content = mobileContentRefs.current[index];

        if (!viewport || !content) {
          return 1;
        }

        const availableHeight = viewport.clientHeight;
        const naturalHeight = content.scrollHeight;

        if (availableHeight <= 0 || naturalHeight <= 0) {
          return 1;
        }

        return Math.min(1, availableHeight / naturalHeight);
      });

      setMobileScale(Math.min(...slideScales));
    };

    const animationFrame = requestAnimationFrame(computeMobileScale);
    window.addEventListener('resize', computeMobileScale);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', computeMobileScale);
    };
  }, [slides]);

  const progressPercent = ((activeSlide + 1) / totalSlides) * 100;

  return (
    <div className="min-h-screen bg-[hsl(220_24%_96%)] text-[hsl(222_47%_10%)]">
      <PageTopBar />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-8 sm:py-10">
        <section className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-[12px]">
            <span className="inline-flex items-center rounded-full border border-[hsl(221_72%_66%)] bg-[hsl(221_84%_95%)] px-3 py-1 font-semibold text-[hsl(221_72%_30%)]">
              Investor slideshow
            </span>
            <span className="hidden items-center rounded-full border border-[hsl(220_16%_84%)] bg-white px-3 py-1 font-medium text-[hsl(220_14%_30%)] sm:inline-flex">
              Use arrow keys
            </span>
            <span className="inline-flex items-center rounded-full border border-[hsl(220_16%_84%)] bg-white px-3 py-1 font-medium text-[hsl(220_14%_30%)] sm:hidden">
              Swipe side to side
            </span>
          </div>
          <p className="hidden text-sm font-semibold text-[hsl(220_12%_46%)] sm:block">Slide {activeSlide + 1} / {totalSlides}</p>
        </section>

        <section className="sm:hidden">
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {slides.map((slide, index) => {
              const mobileBody = index === 0 ? (
                <div className="flex h-full flex-col justify-between gap-4">
                  <div className="space-y-4 text-[hsl(214_40%_90%)]">
                    <p className="text-[18px] font-semibold leading-8 text-[hsl(214_100%_83%)]">
                      The biggest TAM that you ever will get a chance to invest in
                    </p>
                    <p>EANrunner helps suppliers and retailers turn product data into active sales channels.</p>
                    <p>
                      European commerce is fragmented. Suppliers have products. Retailers want assortment, but too many
                      agreements never become live products because data and integrations are too slow.
                    </p>
                    <p>We are building the data layer between product supply and retail demand.</p>
                  </div>

                  <div className="border-t border-[hsl(220_34%_30%)] pt-2 text-[10px] leading-4 text-[hsl(217_22%_72%)]">
                    <p>
                      <sup>1</sup> Annual product purchasing volume behind European non-food retail.
                    </p>
                    <p className="mt-1">
                      Source:{' '}
                      <a
                        href="https://ec.europa.eu/eurostat/statistics-explained/index.php"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium text-[hsl(214_100%_83%)] hover:underline"
                      >
                        Eurostat Statistics Explained
                      </a>
                    </p>
                  </div>
                </div>
              ) : index === 7 ? (
                <div className="space-y-4 text-[hsl(218_22%_92%)]">
                  <div className="space-y-3">
                    <p>EANrunner was founded by Jacob and Anders after years in eCommerce, distribution, and product data.</p>
                    <p>We help brands, distributors, and retailers connect through product data, automation, and AI.</p>
                    <p>Amazon famously started in a garage. We already have two.</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <article className="overflow-hidden rounded-lg border border-[hsl(220_34%_30%)] bg-[hsl(225_42%_16%/0.65)] text-center">
                      <img src="/about/jacob-hq-black.jpg" alt="Jacob's garage" className="h-36 w-full bg-[hsl(225_36%_14%)] object-contain" loading="lazy" />
                      <div className="p-2.5">
                      <p className="font-semibold text-[hsl(214_36%_92%)]">Jacob</p>
                      <a href="mailto:jacob@eanrunner.com" className="mt-1 block text-[11px] text-[hsl(214_100%_83%)] hover:underline">jacob@eanrunner.com</a>
                      </div>
                    </article>
                    <article className="overflow-hidden rounded-lg border border-[hsl(220_34%_30%)] bg-[hsl(225_42%_16%/0.65)] text-center">
                      <img src="/about/anders-garage-white.jpg" alt="Anders' garage" className="h-36 w-full bg-[hsl(225_36%_14%)] object-contain" loading="lazy" />
                      <div className="p-2.5">
                      <p className="font-semibold text-[hsl(214_36%_92%)]">Anders</p>
                      <a href="mailto:anders@eanrunner.com" className="mt-1 block text-[11px] text-[hsl(214_100%_83%)] hover:underline">anders@eanrunner.com</a>
                      </div>
                    </article>
                  </div>
                </div>
              ) : slide.body;

              return (
                <article
                  key={slide.title}
                  className="relative h-[calc(100vh-190px)] min-h-[520px] w-[88vw] shrink-0 snap-center overflow-hidden rounded-3xl border border-[hsl(225_72%_28%)] shadow-[0_20px_44px_rgb(8_20_60/0.38)]"
                  style={deckBackground}
                  aria-label={`Slide ${index + 1} of ${totalSlides}`}
                >
                  <div className="h-1 w-full bg-[hsl(223_48%_20%)]">
                    <div className="h-full bg-[hsl(221_92%_55%)]" style={{ width: `${((index + 1) / totalSlides) * 100}%` }} />
                  </div>

                  <div
                    ref={(node) => {
                      mobileViewportRefs.current[index] = node;
                    }}
                    className="h-[calc(100%-4px)] overflow-hidden px-5 py-6"
                  >
                    <div
                      ref={(node) => {
                        mobileContentRefs.current[index] = node;
                      }}
                      className="origin-top-left [&_h3]:text-[20px] [&_h3]:leading-8 [&_li]:text-[15px] [&_li]:leading-6 [&_p]:text-[15px] [&_p]:leading-7 [&_.text-3xl]:text-[26px] [&_.text-3xl]:leading-9 [&_ul]:space-y-2.5"
                      style={{
                        transform: `scale(${mobileScale})`,
                        width: `${100 / mobileScale}%`,
                      }}
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[hsl(214_100%_82%)]">{slide.kicker}</p>
                      <h2 className="mt-2 text-[38px] font-bold leading-[1.08] text-white">{slide.title}</h2>
                      <div className="mt-4">
                        {mobileBody}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mt-2 text-center text-xs font-medium text-[hsl(220_12%_46%)]">Swipe to browse all {totalSlides} slides</p>
        </section>

        <section
          className="relative hidden h-[78vh] min-h-[700px] max-h-[860px] flex-col overflow-hidden rounded-3xl border border-[hsl(225_72%_28%)] shadow-[0_24px_60px_rgb(8_20_60/0.45)] sm:flex"
          style={deckBackground}
        >
          <div className="pointer-events-none absolute -right-10 top-20 h-16 w-72 rounded-xl bg-[hsl(220_60%_75%/0.12)] blur-[1px]" />
          <div className="pointer-events-none absolute -right-24 top-44 h-16 w-80 rounded-xl bg-[hsl(220_60%_75%/0.12)] blur-[1px]" />
          <div className="pointer-events-none absolute -right-4 top-68 h-16 w-72 rounded-xl bg-[hsl(220_60%_75%/0.12)] blur-[1px]" />

          <div className="h-1 w-full bg-[hsl(223_48%_20%)]">
            <div className="h-full bg-[hsl(221_92%_55%)] transition-all duration-300" style={{ width: `${progressPercent}%` }} />
          </div>

          <article className="relative z-10 flex-1 overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(214_100%_82%)]">
              {slides[activeSlide].kicker}
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-5xl">
              {slides[activeSlide].title}
            </h1>
            <div className="mt-6 h-[calc(100%-110px)] overflow-y-auto pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">{slides[activeSlide].body}</div>
          </article>

          <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-[hsl(222_38%_24%)] bg-[hsl(225_68%_12%/0.82)] px-6 py-4 backdrop-blur-sm sm:px-8">
            <button
              type="button"
              onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 0))}
              disabled={activeSlide === 0}
              className="inline-flex h-10 items-center rounded-lg border border-[hsl(222_26%_34%)] bg-[hsl(225_48%_16%)] px-4 text-sm font-semibold text-[hsl(214_30%_88%)] disabled:cursor-not-allowed disabled:opacity-45"
            >
              Previous
            </button>

            <div className="flex flex-wrap items-center justify-center gap-1.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    index === activeSlide ? 'w-7 bg-[hsl(221_92%_55%)]' : 'bg-[hsl(220_22%_52%)] hover:bg-[hsl(220_26%_68%)]'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setActiveSlide((prev) => Math.min(prev + 1, totalSlides - 1))}
              disabled={activeSlide === totalSlides - 1}
              className="inline-flex h-10 items-center rounded-lg border border-[hsl(221_76%_52%)] bg-[hsl(221_92%_55%)] px-4 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              Next
            </button>
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </main>
    </div>
  );
}
