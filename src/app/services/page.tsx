import { SectionHeading, SiteShell } from '@/components/marketing/SiteShell';

const services = [
  {
    title: 'Company Incorporation',
    items: ['New company setup guidance', 'Document and information collection', 'Registration coordination'],
  },
  {
    title: 'Corporate Secretary Services',
    items: ['Annual compliance coordination', 'Statutory record maintenance', 'Routine filing support'],
  },
  {
    title: 'Corporate Changes',
    items: ['Change of director', 'Transfer of shares', 'Company secretary updates'],
  },
  {
    title: 'Governance Support',
    items: ['AGM-related coordination', 'RORC-related matters', 'Resolution and filing support'],
  },
];

export const metadata = {
  title: 'Services',
};

export default function ServicesPage() {
  return (
    <SiteShell
      active="services"
      eyebrow="Services"
      title="Core service categories for the first public release."
      intro="These sections are based on the service types already visible in your existing business system, so the website and your actual operations stay aligned."
    >
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading
          eyebrow="Service Overview"
          title="A service menu that already fits your real workflows."
          body="Later, each service block can become its own detailed landing page with process notes, FAQs and calls to action."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="text-xl font-semibold text-slate-950">{service.title}</div>
              <div className="mt-5 space-y-3">
                {service.items.map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <SectionHeading
            eyebrow="Next Expansion"
            title="Ready for service detail pages."
            body="Once you send reference links or preferred copy, I can expand each block into more persuasive sections such as process, timeline, required documents and contact CTA."
          />
        </div>
      </section>
    </SiteShell>
  );
}
