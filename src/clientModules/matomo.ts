// Self-hosted Matomo, cookieless. Loads the tracker once and counts every
// route change, since Docusaurus is a single-page app.
const MATOMO_URL = 'https://m.dcvault.net/';
const SITE_ID = '1';

if (typeof window !== 'undefined') {
  const _paq = ((window as any)._paq = (window as any)._paq || []);
  _paq.push(['disableCookies']);
  _paq.push(['enableLinkTracking']);
  _paq.push(['setTrackerUrl', MATOMO_URL + 'matomo.php']);
  _paq.push(['setSiteId', SITE_ID]);
  _paq.push(['trackPageView']);
  const g = document.createElement('script');
  g.async = true;
  g.src = MATOMO_URL + 'matomo.js';
  document.head.appendChild(g);
}

type Loc = {pathname: string; search: string};

export function onRouteDidUpdate({
  location,
  previousLocation,
}: {
  location: Loc;
  previousLocation: Loc | null;
}): void {
  if (!previousLocation) return;
  if (
    location.pathname === previousLocation.pathname &&
    location.search === previousLocation.search
  ) {
    return;
  }
  const _paq = (window as any)._paq || [];
  setTimeout(() => {
    _paq.push(['setCustomUrl', window.location.href]);
    _paq.push(['setDocumentTitle', document.title]);
    _paq.push(['trackPageView']);
  }, 0);
}
