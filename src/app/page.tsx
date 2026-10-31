import Link from 'next/link';

import { SectionHeading, SiteShell } from '@/components/marketing/SiteShell';

const serviceCards = [
  {
    title: 'Company Incorporation',
    body: 'Support founders and new investors with setup planning, document collection and Singapore company registration coordination.',
  },
  {
    title: 'Corporate Secretary Services',
    body: 'Manage annual obligations, statutory records, filing timelines and routine governance administration in a more structured way.',
  },
  {
    title: 'Shareholder and Board Changes',
    body: 'Handle director changes, share transfers and related resolutions with a process that stays easier to track and complete.',
  },
];

const strengths = [
  'Singapore-based support with bilingual business communication',
  'Practical handling of recurring corporate secretarial work',
  'Clearer client handoff from enquiry to execution and follow-up',
];

export default function HomePage() {
  return (
    <SiteShell
      active="home"
      eyebrow="Singapore Corporate Services"
      title="A proper public website for Bybridge."
      intro="This new standalone project repositions Bybridge as a polished corporate website, with room to present your company profile, core services and contact path more clearly."
    >
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white sm:px-10">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-300">What Bybridge Does</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Support businesses across setup, compliance and corporate updates.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            The first version focuses on a clean, high-end corporate presentation. It gives the domain a confident
            front door while keeping enough structure to expand once you send final copy, photos or reference sites.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950">
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Contact Bybridge
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="text-4xl font-semibold text-slate-950">2015</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Bybridge company information already points to a long-standing Singapore entity.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="text-4xl font-semibold text-slate-950">SG</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Local office address, service email and phone details are already reflected in your existing records.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 sm:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Relaunch Direction</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              The website is now isolated from `gos`, so future server, deployment and design work can happen without
              touching the business portal.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading
          eyebrow="Core Services"
          title="A sharper way to explain what your team handles."
          body="This structure gives Bybridge a concise service overview now, and it is easy to expand into detailed service pages later."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceCards.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-lg font-semibold text-slate-950">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Why Bybridge"
              title="Built for companies that want clear responses and organized follow-through."
            />
          </div>
          <div className="space-y-4">
            {strengths.map((item) => (
              <div key={item} className="rounded-3xl bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-600">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-teal-800 px-8 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">Next Step</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Send me your reference websites and I will restyle this first version further.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-teal-50">
            The current build gives you the standalone project and the public-facing page structure. The next pass can
            focus on visual direction, messaging polish and deployment to your new server.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
