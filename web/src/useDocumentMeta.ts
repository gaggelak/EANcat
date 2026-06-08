import { useEffect } from 'react';

const SITE_NAME = 'EANrunner';
const ORIGIN = 'https://eanrunner.com';

type DocumentMeta = {
  /** Page title. " | EANrunner" is appended automatically unless `rawTitle` is set. */
  title: string;
  /** Meta description for the page. */
  description?: string;
  /**
   * Canonical path (e.g. "/about-us"). Combined with the apex origin to form the
   * absolute canonical + og:url. Defaults to the current pathname.
   */
  path?: string;
  /** Set true to use `title` verbatim without the " | EANrunner" suffix. */
  rawTitle?: boolean;
};

/** Upsert a <meta name|property=...> tag and return whether it was newly created. */
function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * Sets per-route document title + meta for SEO. EANcat renders client-side
 * (React Router declarative mode), so Googlebot (which executes JS) reads these,
 * while non-JS social scrapers fall back to the static defaults in index.html.
 *
 * The apex domain (eanrunner.com) is canonical; www 308-redirects to it.
 */
export function useDocumentMeta({ title, description, path, rawTitle }: DocumentMeta) {
  useEffect(() => {
    const fullTitle = rawTitle ? title : `${title} | ${SITE_NAME}`;
    const canonicalPath = path ?? window.location.pathname;
    const canonicalUrl = `${ORIGIN}${canonicalPath}`;

    document.title = fullTitle;
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertCanonical(canonicalUrl);

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
    }
  }, [title, description, path, rawTitle]);
}
