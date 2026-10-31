import { SectionHeading, SiteShell } from '@/components/marketing/SiteShell';

const principles = [
  {
    title: 'Professional Coordination',
    body: 'Handle corporate work through a more organized process, from information gathering to execution support and follow-up.',
  },
  {
    title: 'Clear Communication',
    body: 'Give clients clearer visibility on required documents, next actions and filing progress.',
  },
  {
    title: 'Long-Term Support',
    body: 'Support clients not only on one-off matters, but also across recurring compliance and corporate maintenance needs.',
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
      title="Corporate services support with a clearer business profile."
      intro="Bybridge Consultancy Pte Ltd serves businesses that require support on Singapore company setup, company secretary matters and recurring statutory corporate updates."
    >
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Who We Are"
              title="Bybridge Consultancy Pte Ltd"
              body="Bybridge supports companies that need assistance with incorporation, corporate secretary services and important governance-related changes. The positioning emphasizes professionalism, responsiveness and a more structured client experience."
            />
          </div>
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Profile Snapshot</p>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
              <p>Registered business presence in Singapore.</p>
              <p>Office at 8 Burn Road #15-03, Trivex, Singapore 369977.</p>
              <p>Main contact at service@bybridge.com.sg and +65 6221 5600.</p>
              <p>Service scope aligned with incorporation, secretarial support and corporate changes.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <SectionHeading
          eyebrow="Approach"
          title="A more professional way to present how Bybridge works."
          body="The company profile is strengthened when the website clearly communicates service scope, responsiveness and the ability to support recurring corporate requirements."
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
