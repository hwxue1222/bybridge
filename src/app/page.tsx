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

const differentiators = [
  {
    title: 'Singapore Corporate Focus',
    body: 'Support centered on incorporation, secretarial compliance and statutory corporate matters in Singapore.',
  },
  {
    title: 'Clear Process Coordination',
    body: 'Structured guidance from initial enquiry through document collection, filing support and follow-up.',
  },
  {
    title: 'Responsive Communication',
    body: 'Practical updates and business-friendly communication for founders, shareholders and operating teams.',
  },
];

const processSteps = [
  'Initial consultation to understand your company stage, structure and immediate filing needs.',
  'Document and information collection with clearer coordination on required items.',
  'Execution support for incorporation, secretary work or corporate changes.',
  'Ongoing follow-up for compliance, record maintenance and future updates.',
];

export default function HomePage() {
  return (
    <SiteShell
      active="home"
      eyebrow="Singapore Corporate Services"
      title="Professional corporate services support for businesses in Singapore."
      intro="Bybridge Consultancy Pte Ltd supports businesses with incorporation, corporate secretary services and key statutory updates, with a focus on clear coordination, responsive communication and practical follow-through."
    >
      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] bg-slate-950 px-8 py-10 text-white sm:px-10">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-300">What We Do</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Incorporation, secretarial support and corporate changes handled with more clarity.</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
            We help businesses establish and maintain their Singapore corporate structure with practical support across
            filings, records, shareholder matters and recurring compliance requirements.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/services" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950">
              View Services
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Speak With Us
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="text-4xl font-semibold text-slate-950">2015</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Established Singapore corporate presence reflected in existing company and invoicing records.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6">
            <div className="text-4xl font-semibold text-slate-950">SGD</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">Singapore office contact details and service channels already align with the business information in use.</p>
          </div>
          <div className="rounded-3xl bg-slate-50 p-6 sm:col-span-2">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">Core Scope</div>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Company incorporation, corporate secretary services, change of director, share transfer, AGM-related
              work and RORC-related support.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading
          eyebrow="Core Services"
          title="Core business services presented in a more professional structure."
          body="The site now reflects the main categories of corporate work clients typically need when setting up or maintaining a Singapore company."
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
              title="A more credible presentation for a professional services firm."
            />
          </div>
          <div className="grid gap-4">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-3xl bg-slate-50 px-5 py-4">
                <div className="text-base font-semibold text-slate-950">{item.title}</div>
                <div className="mt-2 text-sm leading-7 text-slate-600">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading
          eyebrow="How We Work"
          title="A simple engagement flow clients can understand quickly."
          body="Professional services websites feel stronger when visitors can immediately see the path from enquiry to execution."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {processSteps.map((item, index) => (
            <div key={item} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-teal-700">Step {index + 1}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] bg-teal-800 px-8 py-10 text-white sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Discuss your incorporation or corporate secretary requirements with Bybridge.</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-teal-50">
            Reach out for support on company setup, recurring compliance matters or specific corporate changes that
            require structured execution and follow-up.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950">
              Contact Details
            </Link>
            <a
              href="mailto:service@bybridge.com.sg"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              service@bybridge.com.sg
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
