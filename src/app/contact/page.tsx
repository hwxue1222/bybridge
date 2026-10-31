import { SectionHeading, SiteShell } from '@/components/marketing/SiteShell';

const contactRows = [
  { label: 'Email', value: 'service@bybridge.com.sg' },
  { label: 'Main Line', value: '+65 6221 5600' },
  { label: 'Customer Service', value: '+65 9088 8596' },
  { label: 'Office', value: '8 Burn Road #15-03, Trivex, Singapore 369977' },
];

export const metadata = {
  title: 'Contact',
};

export default function ContactPage() {
  return (
    <SiteShell
      active="contact"
      eyebrow="Contact"
      title="Contact Bybridge Consultancy Pte Ltd."
      intro="Get in touch regarding company incorporation, corporate secretary services or specific statutory corporate matters in Singapore."
    >
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
            <SectionHeading
              eyebrow="Get In Touch"
              title="Business contact details"
              body="Use the contact information below for new enquiries, ongoing company matters or questions about Bybridge service scope."
            />
            <div className="mt-8 space-y-4">
              {contactRows.map((row) => (
                <div key={row.label} className="rounded-3xl bg-slate-50 px-5 py-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{row.label}</div>
                  <div className="mt-2 text-sm leading-7 text-slate-700">{row.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">Enquiry Focus</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">How this contact page should work for clients.</h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>Enquiries can cover company incorporation, company secretary support, shareholder changes or general corporate maintenance matters.</p>
              <p>The page is designed to keep the contact path simple, credible and suitable for a professional services firm.</p>
              <p>A later step can add a formal enquiry form, WhatsApp access or direct consultation booking.</p>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
