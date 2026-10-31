import { SectionHeading, SiteShell } from '@/components/marketing/SiteShell';

const principles = [
  {
    title: 'Practical Execution',
    body: 'Keep the process understandable, reduce back-and-forth and move corporate tasks forward with clear documentation.',
  },
  {
    title: 'Responsive Communication',
    body: 'Make it easier for clients to know what is needed, what is pending and what happens next.',
  },
  {
    title: 'Long-Term Support',
    body: 'Go beyond single filings and help clients stay organized across recurring corporate requirements.',
  },
];

export const metadata = {
  title: 'About',
};

export default function AboutPage() {
  return (
    <SiteShell
      active="about"
      eyebrow="About Bybridge"
      title="A stronger company profile for your relaunch."
      intro="This page is designed to carry your official positioning, company background and trust signals in a cleaner, more premium way."
    >
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Who We Are"
              title="Bybridge Consultancy Pte Ltd"
              body="Bybridge supports companies that need help with incorporation, ongoing secretarial support and corporate updates in Singapore. This first version uses your known company details as a foundation for the new public-facing site."
            />
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Profile Snapshot</p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
              <p>Registered business presence in Singapore.</p>
              <p>Office at 8 Burn Road #15-03, Trivex, Singapore 369977.</p>
              <p>Main contact at service@bybridge.com.sg and +65 6221 5600.</p>
              <p>Standalone website project prepared for cleaner deployment to a new server.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeading
          eyebrow="Working Style"
          title="How the new website positions your brand."
          body="Instead of looking like a login gateway, the domain can now explain your value, services and contact path with proper corporate credibility."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-lg font-semibold text-slate-950">{item.title}</div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
