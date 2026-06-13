import { useMemo, useState } from 'react';
import PageTopBar from './PageTopBar';
import SiteFooter from './SiteFooter';
import { useDocumentMeta } from './useDocumentMeta';

export default function InvestorDeckPage() {
  useDocumentMeta({
    title: 'Investor Relations',
    description: 'A fast investor overview of the EANrunner problem, DATA-first solution, business model, status, and team.',
    path: '/ir',
  });

  const [activeSlide, setActiveSlide] = useState(0);
  const [openDetail, setOpenDetail] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const detailItems = useMemo(
    () => [
      {
        title: 'The problem',
        text: 'Deals are signed, but products never go live because supplier and retailer data is messy and incompatible.',
      },
      {
        title: 'What we do',
        text: 'We turn supplier product data into retailer-ready feeds, then keep price and stock synced so listings stay live.',
      },
      {
        title: 'Business model',
        text: '2% commission on incremental supplier sales plus €0.1 per product per month for retailer update workflows.',
      },
      {
        title: 'Status',
        text: 'First paying customer live, active integrations in progress, and ~€1M GMV handled in the last 12 months.',
      },
      {
        title: 'Who we are',
        text: 'Two founders, deep ecommerce operations background, automation-first execution, and direct customer contact.',
        href: 'https://eanrunner.com/about-us',
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        question: 'How do you create value for suppliers and retailers?',
        answer:
          'We remove data friction between both sides. Suppliers get faster market activation, and retailers get cleaner, update-ready product data that keeps listings live.',
      },
      {
        question: 'Why does this model scale?',
        answer:
          'Once structured data pipelines are in place, onboarding and maintenance become repeatable. That allows efficient expansion across more suppliers, retailers, and markets.',
      },
      {
        question: 'What makes this a modern B2B infrastructure play?',
        answer:
          'The core is reliable product data infrastructure with automation-first operations. It is recurring, operationally embedded, and difficult to replace once integrated.',
      },
      {
        question: 'How can investors engage?',
        answer:
          'Reach out to review the deeper one-pager, current integration pipeline, and funding context. We can walk through live workflows and traction data directly.',
      },
    ],
    [],
  );

  const slideBackground = {
    backgroundImage: [
      'radial-gradient(120% 120% at 84% 0%, rgba(84, 112, 255, 0.30) 0%, rgba(84, 112, 255, 0.0) 42%)',
      'radial-gradient(120% 120% at 0% 100%, rgba(50, 88, 235, 0.24) 0%, rgba(50, 88, 235, 0.0) 40%)',
      'linear-gradient(135deg, hsl(226 88% 14%) 0%, hsl(227 86% 12%) 46%, hsl(231 78% 19%) 100%)',
    ].join(','),
  };

  return (
    <div className="min-h-screen bg-[hsl(220_24%_96%)] text-[hsl(222_47%_10%)]">
      <PageTopBar />

      <main className="mx-auto w-full max-w-[1200px] px-4 py-2 sm:py-3">
        <section className="relative [perspective:1400px]">
          <article
            className="relative h-[calc(100vh-120px)] min-h-[560px] max-h-[760px] overflow-hidden rounded-3xl border border-[hsl(225_72%_28%)] shadow-[0_24px_60px_rgb(8_20_60/0.45)]"
          >
            <div
              className={`absolute inset-0 transition-all duration-500 ${activeSlide === 0 ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0 pointer-events-none'}`}
              style={slideBackground}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_420px_at_50%_18%,hsl(225_70%_32%/0.44),transparent_65%)]" />

              <div className="relative flex h-full flex-col justify-center px-6 py-8 text-center sm:px-8 sm:py-10 lg:px-10">
                <h1 className="mx-auto mt-2 max-w-5xl text-4xl font-bold leading-tight text-white sm:text-6xl">
                  Do you want to invest in the product data of tomorrow?
                </h1>
                <p className="mx-auto mt-5 max-w-4xl text-2xl font-semibold leading-9 text-[hsl(214_100%_84%)] sm:text-3xl sm:leading-[1.35]">
                  EANrunner turns messy product data into incremental sales.
                </p>

                <div className="mx-auto mt-10 grid w-full max-w-6xl gap-5 md:grid-cols-3">
                  <article className="flex min-h-[200px] flex-col justify-center rounded-2xl border border-[hsl(221_56%_35%)] bg-[hsl(225_42%_16%/0.78)] p-6 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[hsl(214_100%_84%)]">Problem</p>
                    <p className="mt-3 text-[19px] leading-8 text-[hsl(218_28%_92%)]">Product data breaks go-live execution.</p>
                  </article>
                  <article className="flex min-h-[200px] flex-col justify-center rounded-2xl border border-[hsl(221_56%_35%)] bg-[hsl(225_42%_16%/0.78)] p-6 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[hsl(214_100%_84%)]">Solution</p>
                    <p className="mt-3 text-[19px] leading-8 text-[hsl(218_28%_92%)]">DATA activation layer for retail commerce.</p>
                  </article>
                  <article className="flex min-h-[200px] flex-col justify-center rounded-2xl border border-[hsl(221_56%_35%)] bg-[hsl(225_42%_16%/0.78)] p-6 text-left">
                    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[hsl(214_100%_84%)]">Traction</p>
                    <p className="mt-3 text-[19px] leading-8 text-[hsl(218_28%_92%)]">Paying customer live and integrations underway.</p>
                  </article>
                </div>
              </div>
            </div>

            <div
              className={`absolute inset-0 transition-all duration-500 ${activeSlide === 1 ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0 pointer-events-none'}`}
              style={slideBackground}
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_560px_at_65%_20%,hsl(224_75%_30%/0.38),transparent_65%)]" />

              <div className="relative h-full overflow-y-auto px-6 py-8 sm:px-8 sm:py-10 lg:px-10 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
                <h2 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-5xl">
                  One-page overview
                </h2>

                <div className="mt-6 grid gap-6 pb-24 lg:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <h3 className="text-xl font-semibold text-[hsl(214_100%_92%)]">Business plan</h3>
                    <div className="mt-3 space-y-2.5">
                    {detailItems.map((item, index) => {
                      const isOpen = openDetail === index;
                      return (
                        <article key={item.title} className="overflow-hidden rounded-xl border border-[hsl(221_56%_35%)] bg-[hsl(225_42%_16%/0.78)]">
                          <button
                            type="button"
                            onClick={() => setOpenDetail((prev) => (prev === index ? null : index))}
                            className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                            aria-expanded={isOpen}
                          >
                            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[hsl(214_100%_84%)]">{item.title}</span>
                            <span className="text-lg leading-none text-[hsl(214_100%_86%)]" aria-hidden="true">
                              {isOpen ? '-' : '+'}
                            </span>
                          </button>
                          {isOpen ? (
                            <div className="border-t border-[hsl(221_56%_35%)] px-4 py-3 text-[15px] leading-7 text-[hsl(218_28%_92%)]">
                              <p>{item.text}</p>
                              {item.href ? (
                                <a
                                  href={item.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="mt-1 inline-flex text-[hsl(214_100%_84%)] hover:underline"
                                >
                                  About us
                                </a>
                              ) : null}
                            </div>
                          ) : null}
                        </article>
                      );
                    })}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[hsl(214_100%_92%)]">FAQ</h3>
                    <div className="mt-3 space-y-2.5">
                      {faqs.map((faq, index) => {
                        const isOpen = openFaq === index;
                        return (
                          <article key={faq.question} className="overflow-hidden rounded-xl border border-[hsl(221_56%_35%)] bg-[hsl(225_42%_16%/0.78)]">
                            <button
                              type="button"
                              onClick={() => setOpenFaq((prev) => (prev === index ? null : index))}
                              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                              aria-expanded={isOpen}
                            >
                              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[hsl(214_100%_84%)]">{faq.question}</span>
                              <span className="text-lg leading-none text-[hsl(214_100%_86%)]" aria-hidden="true">
                                {isOpen ? '-' : '+'}
                              </span>
                            </button>
                            {isOpen ? (
                              <p className="border-t border-[hsl(221_56%_35%)] px-4 py-3 text-[15px] leading-7 text-[hsl(218_28%_92%)]">
                                {faq.answer}
                              </p>
                            ) : null}
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
                  <a
                    href="mailto:info@eanrunner.com?subject=Investor%20inquiry"
                    className="inline-flex h-11 items-center rounded-lg border border-[hsl(221_72%_66%)] bg-[hsl(221_84%_95%)] px-5 text-sm font-semibold text-[hsl(221_72%_30%)] hover:brightness-95"
                  >
                    Make the first move - Connect on info@eanrunner.com
                  </a>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
              aria-label={activeSlide === 0 ? 'Go to slide 2 of 2' : 'Go to slide 1 of 2'}
              className="absolute bottom-4 right-4 z-20 rounded-full border border-[hsl(221_56%_35%)] bg-[hsl(225_42%_16%/0.88)] px-3 py-1.5 text-xs font-semibold text-[hsl(214_100%_90%)] backdrop-blur-sm hover:bg-[hsl(225_42%_22%)]"
            >
              {activeSlide + 1}/2
            </button>

          </article>

          <button
            type="button"
            onClick={() => setActiveSlide((prev) => (prev === 0 ? 1 : 0))}
            aria-label={activeSlide === 0 ? 'Go to next slide' : 'Go to previous slide'}
            className="absolute right-2 top-1/2 z-20 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[hsl(221_56%_35%)] bg-[hsl(225_42%_16%/0.9)] text-xl text-[hsl(214_100%_90%)] shadow-[0_8px_20px_rgb(8_20_60/0.35)] backdrop-blur-sm hover:bg-[hsl(225_42%_22%)] sm:-right-14"
          >
            {activeSlide === 0 ? '>' : '<'}
          </button>
        </section>

        <SiteFooter className="mt-4" />
      </main>
    </div>
  );
}
