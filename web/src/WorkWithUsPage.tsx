import { Link } from 'react-router-dom';
import PageTopBar from './PageTopBar';
import SiteFooter from './SiteFooter';

export default function WorkWithUsPage() {
  const topics = [
    'Retailers',
    'Distributors',
    'Investors',
    'Freelancers',
    'AI developers',
    'Consultants',
    'Strategic partners',
  ];

  return (
    <div className="min-h-screen bg-[hsl(220_18%_97%)] text-[hsl(222_47%_8%)]">
      <PageTopBar />
      <div className="mx-auto w-full max-w-5xl px-4 py-10">
        <header className="rounded-xl border border-[hsl(220_14%_89%)] bg-white px-6 py-5 shadow-[0_1px_3px_0_rgb(0_0_0/0.06)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[hsl(220_12%_46%)]">Partnerships</p>
          <h1 className="mt-2 text-2xl font-bold leading-tight">Work With EANrunner</h1>
          <p className="mt-2 text-sm leading-relaxed text-[hsl(220_14%_36%)] max-w-3xl">
            EANrunner is open to cooperation that improves product data quality,
            automation, and distribution outcomes for Nordic ecommerce.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link
              to="/"
              className="inline-flex items-center rounded-md border border-[hsl(220_16%_84%)] bg-[hsl(220_18%_98%)] px-3 py-1.5 text-xs font-semibold text-[hsl(222_47%_18%)] hover:bg-[hsl(220_18%_95%)]"
            >
              Back to catalog
            </Link>
            <a
              href="mailto:contact@eanrunner.com"
              className="inline-flex items-center rounded-md border border-[hsl(221_72%_72%)] bg-[hsl(221_84%_95%)] px-3 py-1.5 text-xs font-semibold text-[hsl(221_72%_32%)] hover:brightness-95"
            >
              Contact us
            </a>
          </div>
        </header>

        <section className="mt-5 rounded-xl border border-[hsl(220_14%_89%)] bg-white px-6 py-5 shadow-[0_1px_3px_0_rgb(0_0_0/0.06)]">
          <h2 className="text-sm font-semibold text-[hsl(222_47%_12%)]">Who we are open to collaborate with</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <span
                key={topic}
                className="inline-flex items-center rounded-full border border-[hsl(220_16%_84%)] bg-[hsl(220_18%_98%)] px-2.5 py-1 text-[11px] font-medium text-[hsl(220_24%_26%)]"
              >
                {topic}
              </span>
            ))}
          </div>
        </section>

        <SiteFooter className="mt-10" />
      </div>
    </div>
  );
}
