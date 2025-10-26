export type CTA = { label: string; href: string };
export type Brand = { name: string; accent: string };
export type Section =
| { type: 'Hero'; variant?: 'centered'|'split'; headline: string; subheadline?: string; primaryCta?: CTA; image?: { kind: 'icon'|'url'; name?: string; url?: string } }
| { type: 'Features'; items: { title: string; desc: string }[] }
| { type: 'Pricing'; plans: { name: string; price: string; period: string; features: string[] }[] }
| { type: 'FAQ'; items: { q: string; a: string }[] }
| { type: 'CTA'; headline: string; cta: CTA }
| { type: 'Testimonials'; items: { quote: string; name: string }[] }
| { type: 'LeadCapture'; headline: string; placeholder: string; button: string }
| { type: 'Footer'; note: string };
export type PageSchemaType = { brand: Brand; layout: string; sections: Section[]; };