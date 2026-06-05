import { Link } from 'react-router-dom';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Menu, Search } from 'lucide-react';

export default function PageTopBar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = searchValue.trim();
    if (query) {
      navigate(`/?q=${encodeURIComponent(query)}`);
      return;
    }
    navigate('/');
  };

  return (
    <div className="sticky top-0 z-40 border-b border-[hsl(220_14%_91%)] bg-[hsl(220_18%_97%)]/95 backdrop-blur-sm">
      <div className="mx-auto w-full max-w-[1760px] px-4 py-2.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <Link to="/" className="inline-flex h-9 items-center px-0.5">
            <img
              src="https://www.eanrunner.com/sites/eanrunner.com/assets/img/logo-ean.png"
              alt="EANrunner"
              className="h-6 w-auto object-contain"
            />
          </Link>

          <form
            onSubmit={handleSubmit}
            className="flex h-9 min-w-[260px] flex-1 items-center rounded-lg border border-[hsl(220_14%_89%)] bg-white px-2"
          >
            <button
              type="submit"
              className="inline-flex items-center justify-center text-[hsl(220_12%_55%)]"
              aria-label="Search"
            >
              <Search className="h-3.5 w-3.5" />
            </button>
            <input
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Search EAN, Title, MPN of 54 556 products"
              className="h-full w-full border-0 bg-transparent px-2 text-xs text-[hsl(222_47%_8%)] placeholder:text-[hsl(220_12%_60%)] focus:outline-none"
            />
          </form>

          <div className="ml-auto flex flex-wrap items-center gap-1.5 text-xs text-[hsl(220_12%_50%)]">
            <button className="inline-flex h-7 items-center rounded-md border border-[hsl(220_16%_84%)] bg-white px-2 text-[11px] font-semibold text-[hsl(222_47%_20%)]">
              <Filter className="mr-1 h-3 w-3" />
              Filters
            </button>
            <div className="inline-flex h-7 items-center overflow-hidden rounded-md border border-[hsl(220_16%_84%)] bg-white">
              <button className="h-full bg-[hsl(221_84%_95%)] px-2 text-[10px] font-semibold text-[hsl(221_72%_32%)]">
                Pictures
              </button>
              <button className="h-full border-l border-[hsl(220_16%_84%)] px-2 text-[10px] font-semibold text-[hsl(220_12%_45%)]">
                List
              </button>
            </div>
            <a
              href="https://app.eanrunner.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center rounded-lg border border-[hsl(220_16%_84%)] bg-white px-3 text-xs font-semibold text-[hsl(222_47%_20%)] hover:bg-[hsl(220_18%_95%)]"
            >
              Login
            </a>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[hsl(220_16%_84%)] bg-white text-[hsl(222_47%_20%)]">
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
