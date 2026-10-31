import Link from 'next/link';

type NavKey = 'home' | 'about' | 'services' | 'contact';

type Props = {
  active: NavKey;
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
};

const navItems: Array<{ href: string; label: string; key: NavKey }> = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/services', label: 'Services', key: 'services' },
  { href: '/contact', label: 'Contact', key: 'contact' },
];

export function SectionHeading(props: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">{props.eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{props.title}</h2>
      {props.body ? <p className="mt-5 text-base leading-8 text-slate-600">{props.body}</p> : null}
    </div>
  );
}

export function SiteShell({ active, eyebrow, title, intro, children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold text-white">
              BB
            </div>
            <div>
              <div className="text-sm font-semibold tracking-[0.18em] text-slate-500">BYBRIDGE</div>
              <div className="text-base font-semibold text-slate-950">Corporate Services Singapore</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  'rounded-full px-4 py-2 text-sm font-medium transition',
                  item.key === active ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950',
                ].join(' ')}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="mailto:service@bybridge.com.sg"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:inline-flex"
            >
              service@bybridge.com.sg
            </a>
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">{eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">{title}</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">{intro}</p>
          </div>
        </section>

        {children}
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="text-lg font-semibold text-slate-950">Bybridge Consultancy Pte Ltd</div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
              Professional support for Singapore company incorporation, corporate secretary services, statutory
              compliance and ongoing corporate administration.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Contact</div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>service@bybridge.com.sg</p>
              <p>+65 6221 5600</p>
              <p>+65 9088 8596</p>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Office</div>
            <div className="mt-4 space-y-2 text-sm text-slate-600">
              <p>8 Burn Road #15-03</p>
              <p>Trivex</p>
              <p>Singapore 369977</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
