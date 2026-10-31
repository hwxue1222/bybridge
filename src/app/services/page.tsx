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
      title="Corporate services structured around real client needs."
      intro="The services below reflect the core corporate work Bybridge handles, presented in a format that feels more aligned with a professional Singapore business services website."
    >
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading
          eyebrow="Service Overview"
          title="A clearer overview of incorporation and secretarial support."
          body="These categories are shaped around the service scope already reflected in your operations, including incorporation, corporate secretary work and governance-related changes."
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
            eyebrow="Selected Matters"
            title="Typical corporate matters supported by the team."
            body="Examples include change of director, transfer of shares, change of company secretary, AGM-related matters and RORC-related support, depending on the company requirement."
          />
        </div>
      </section>
    </SiteShell>
  );
}
