export interface TemplateData {
  slug: string;
  industry: string;
  emoji: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  subheader: string;
  whatToInclude: string[];
  tips: string[];
  faqs: { question: string; answer: string }[];
  relatedSlugs: string[];
}

export const templates: TemplateData[] = [
  {
    slug: 'freelance-invoice-template',
    industry: 'Freelancer',
    emoji: '💻',
    metaTitle: 'Free Freelance Invoice Template - Download PDF Instantly',
    metaDescription:
      'Download a free freelance invoice template. Create professional invoices in seconds — no signup, instant PDF. Used by 10,000+ freelancers worldwide.',
    h1: 'Free Freelance Invoice Template',
    subheader:
      'Create a professional freelance invoice in under 2 minutes. No account required — just fill in your details and export as PDF.',
    whatToInclude: [
      'Your full name or business name and contact details',
      'Client name, company, and billing address',
      'Unique invoice number (e.g. INV-001)',
      'Invoice date and payment due date',
      'Itemized list of services with description, hours, and rate',
      'Subtotal, tax (if applicable), and total amount due',
      'Payment method instructions (bank transfer, PayPal, etc.)',
      'Late payment fee policy',
    ],
    tips: [
      'Always send invoices immediately after completing work — delays hurt cash flow',
      'Include your payment terms clearly: Net 7, Net 14, or Net 30',
      'Add a personal note thanking the client to build relationships',
      'Keep invoice numbers sequential to look professional and organized',
      'Follow up politely if payment is overdue after 7 days',
    ],
    faqs: [
      {
        question: 'What should a freelance invoice include?',
        answer:
          'A freelance invoice should include your name/business name, client details, invoice number, date, itemized list of services rendered with rates and hours, subtotal, taxes if applicable, total due, and payment instructions. Magic Invoice generates all of this automatically in a professional format.',
      },
      {
        question: 'How do I create a freelance invoice for free?',
        answer:
          'Use Magic Invoice — it\'s completely free. Visit the site, fill in your details and services, and click "Export PDF". No account, no signup, no cost. Your invoice is ready in under 2 minutes.',
      },
      {
        question: 'What payment terms should freelancers use?',
        answer:
          'Common freelance payment terms are Net 7 (payment within 7 days), Net 14, or Net 30. For new clients, Net 7 or Net 14 is recommended. Many experienced freelancers also require a 50% upfront deposit before starting work.',
      },
      {
        question: 'How do I invoice international clients as a freelancer?',
        answer:
          'Magic Invoice supports 100+ currencies, so you can invoice clients in their local currency (USD, EUR, GBP, etc.). Include your bank details or PayPal/Wise payment information for international transfers.',
      },
      {
        question: 'Do I need to charge VAT as a freelancer?',
        answer:
          'VAT requirements depend on your country and income level. In the EU, you generally must charge VAT once you exceed certain thresholds. Magic Invoice lets you add any tax rate as a percentage or fixed amount to your invoices.',
      },
    ],
    relatedSlugs: [
      'consulting-invoice-template',
      'graphic-design-invoice-template',
      'web-design-invoice-template',
    ],
  },
  {
    slug: 'consulting-invoice-template',
    industry: 'Consulting',
    emoji: '📊',
    metaTitle: 'Free Consulting Invoice Template - Professional PDF Download',
    metaDescription:
      'Create a professional consulting invoice in seconds. Free template for business consultants, strategy consultants, and management consultants. No signup needed.',
    h1: 'Free Consulting Invoice Template',
    subheader:
      'Professional invoicing for consultants. Create detailed consulting invoices with hourly rates, project milestones, or retainer fees — export as PDF instantly.',
    whatToInclude: [
      'Consultant name/firm name and professional credentials',
      'Client company name and authorized contact person',
      'Project or engagement name/reference number',
      'Consulting period (date range for services rendered)',
      'Itemized breakdown: hours worked × hourly rate, or milestone deliverables',
      'Expenses incurred (travel, materials, software) if billable',
      'Subtotal, any applicable taxes, and total due',
      'Wire transfer or payment instructions',
    ],
    tips: [
      'Break down consulting fees by project phase or deliverable for transparency',
      'Include a brief description of what was accomplished during the billing period',
      'For retainer clients, reference the retainer agreement on the invoice',
      'Document expenses with receipts and list them separately on the invoice',
      'Use professional language — consultants are judged by their brand image',
    ],
    faqs: [
      {
        question: 'How should consultants bill their clients?',
        answer:
          'Consultants typically bill by hourly rate, day rate, project fee, or monthly retainer. The best structure depends on the engagement: hourly for ongoing advisory work, project fee for defined deliverables, retainer for ongoing availability. Always specify the billing model clearly on your invoice.',
      },
      {
        question: 'What information must a consulting invoice include?',
        answer:
          'A consulting invoice must include your business details, client details, invoice number, dates, a description of services rendered, the fee structure (hourly/project/retainer), any reimbursable expenses, taxes, and payment instructions.',
      },
      {
        question: 'Can I create a consulting invoice without accounting software?',
        answer:
          'Yes — Magic Invoice is specifically built for this. Create a polished consulting invoice in 2 minutes with no software installation, no account, and no cost. Export it as a PDF and email it to your client directly.',
      },
      {
        question: 'How do I invoice for consulting expenses?',
        answer:
          'Add a separate line item for each expense (travel, accommodation, materials) with a description and amount. Keep all receipts. Many consultants add expenses as a separate section below their professional fees.',
      },
    ],
    relatedSlugs: [
      'freelance-invoice-template',
      'accounting-invoice-template',
      'legal-invoice-template',
    ],
  },
  {
    slug: 'photography-invoice-template',
    industry: 'Photography',
    emoji: '📷',
    metaTitle: 'Free Photography Invoice Template - PDF for Photographers',
    metaDescription:
      'Free photography invoice template for wedding, portrait, and commercial photographers. Create professional invoices with deposit tracking. No signup required.',
    h1: 'Free Photography Invoice Template',
    subheader:
      'Professional invoices for photographers. Track session fees, print orders, licensing fees, and deposits — all in one clean PDF invoice.',
    whatToInclude: [
      'Your photography business name and contact details',
      'Client name and contact information',
      'Event or session date and location',
      'Photography package description (e.g., "4-hour wedding coverage")',
      'Add-ons: albums, prints, additional editing, extra hours',
      'Deposit amount already paid and remaining balance due',
      'Image licensing terms (if commercial photography)',
      'Delivery timeline for final images',
    ],
    tips: [
      'Always collect a 50% deposit upfront to secure the booking date',
      'Clearly state your image delivery timeline on the invoice',
      'Include licensing restrictions for commercial clients to protect your work',
      'List equipment rental fees as separate line items if passed on to the client',
      'Add a cancellation/rescheduling policy note at the bottom',
    ],
    faqs: [
      {
        question: 'How do photographers invoice clients?',
        answer:
          'Photographers typically invoice in two stages: a deposit invoice when booking is confirmed (usually 25-50% of total), and a final invoice before or at delivery of images. Magic Invoice makes both easy — create, customize, and export as PDF in minutes.',
      },
      {
        question: 'What should a photography invoice include?',
        answer:
          'A photography invoice should include the session type and date, package details, all add-ons, any deposit already paid, the remaining balance, delivery timeline, and payment instructions. Include licensing terms for commercial work.',
      },
      {
        question: 'How do I create a photography invoice for free?',
        answer:
          'Use Magic Invoice — completely free, no account needed. Add your photography services as line items, include the deposit already paid as a deduction, and export a professional PDF. Takes under 2 minutes.',
      },
      {
        question: 'Should photographers charge sales tax?',
        answer:
          'Sales tax rules for photographers vary by location. In many US states, photography services are taxable. In the EU, VAT applies. Magic Invoice lets you add any tax rate — percentage or fixed — to your invoices to stay compliant.',
      },
    ],
    relatedSlugs: [
      'freelance-invoice-template',
      'video-production-invoice-template',
      'event-planning-invoice-template',
    ],
  },
  {
    slug: 'construction-invoice-template',
    industry: 'Construction',
    emoji: '🏗️',
    metaTitle: 'Free Construction Invoice Template - Contractor PDF Invoice',
    metaDescription:
      'Free construction invoice template for contractors and builders. Track labor, materials, and subcontractor costs. Create professional invoices instantly.',
    h1: 'Free Construction Invoice Template',
    subheader:
      'Built for contractors and construction companies. Track labor hours, materials, subcontractor fees, and project milestones in one professional invoice.',
    whatToInclude: [
      'Your contractor/company name, license number, and contact info',
      'Client name and property/project address',
      'Project name and contract reference number',
      'Work period covered by this invoice',
      'Labor costs: hours worked × hourly rate per trade',
      'Materials: itemized list with quantities, unit costs, and totals',
      'Subcontractor fees if applicable',
      'Percentage of project completion (for progress billing)',
      'Retention amount held back if applicable',
    ],
    tips: [
      'Use progress billing (percentage complete) for large multi-month projects',
      'Keep detailed time logs for each trade — clients may request documentation',
      'Separate labor from materials clearly to match your contract breakdown',
      'Note the retention percentage on invoices if part of your contract',
      'Always reference your original contract or estimate number on the invoice',
    ],
    faqs: [
      {
        question: 'How do construction contractors invoice clients?',
        answer:
          'Construction contractors typically use either milestone billing (invoice at project phases like foundation, framing, completion) or progress billing (invoice for percentage of work completed monthly). Both methods can be done easily with Magic Invoice.',
      },
      {
        question: 'What is a construction progress invoice?',
        answer:
          'A progress invoice bills for the percentage of work completed to date. For example, if a project is 40% complete, you invoice for 40% of the total contract value. This is standard practice for projects lasting more than a few weeks.',
      },
      {
        question: 'How do I invoice for materials in a construction project?',
        answer:
          'List each material as a separate line item with quantity, unit cost, and total. Group materials by category (lumber, concrete, fixtures, etc.) for clarity. You can also add a separate materials markup percentage as its own line item.',
      },
      {
        question: 'What is construction invoice retention?',
        answer:
          'Retention (or retainage) is a percentage of each invoice (typically 5-10%) withheld by the client until project completion. List the gross invoice amount, then deduct the retention amount to show the net payment due on each invoice.',
      },
    ],
    relatedSlugs: [
      'plumbing-invoice-template',
      'electrical-invoice-template',
      'landscaping-invoice-template',
    ],
  },
  {
    slug: 'graphic-design-invoice-template',
    industry: 'Graphic Design',
    emoji: '🎨',
    metaTitle: 'Free Graphic Design Invoice Template - Designer PDF Invoice',
    metaDescription:
      'Free graphic design invoice template for designers and agencies. Invoice for logo design, branding, print, and digital projects. No account needed.',
    h1: 'Free Graphic Design Invoice Template',
    subheader:
      'Professional invoices for graphic designers. Invoice for logo design, branding packages, print materials, social media design, and more.',
    whatToInclude: [
      'Your design studio/freelancer name and portfolio/website link',
      'Client company name and contact details',
      'Project name and creative brief reference',
      'Design deliverables: list each asset (logo, brand guide, mockups, etc.)',
      'Number of revision rounds included',
      'File formats to be delivered (AI, EPS, PNG, PDF)',
      'Usage rights and licensing terms',
      'Rush fee if applicable',
    ],
    tips: [
      'Clearly specify how many revision rounds are included in your quote',
      'List licensing terms — logo ownership transfer should be explicitly stated',
      'Invoice for concept presentation and final delivery separately on large projects',
      'Note file format deliverables so there are no disputes later',
      'Include your copyright notice until full payment is received',
    ],
    faqs: [
      {
        question: 'How do graphic designers invoice clients?',
        answer:
          'Most graphic designers use project-based pricing. Invoice at key milestones: 50% deposit upfront, 25% at concept approval, and 25% at final delivery. For ongoing clients, monthly retainers billed at the start of each month work well.',
      },
      {
        question: 'Should I transfer copyright on my invoice?',
        answer:
          'Only transfer copyright upon receipt of full payment. Include a note on your invoice: "All intellectual property rights transfer to client upon receipt of full payment." Magic Invoice lets you add custom notes to any invoice.',
      },
      {
        question: 'How do I charge for design revisions?',
        answer:
          'Specify revision rounds in your original quote (e.g., "2 revision rounds included"). For additional revisions beyond the agreed scope, add them as a line item on your invoice with your hourly rate for revision time.',
      },
      {
        question: 'What file formats should I include in my design invoice?',
        answer:
          'List the exact deliverables: source files (AI, PSD, INDD), web formats (PNG, SVG, WebP), print formats (PDF, EPS). Being specific prevents client requests for additional formats after you\'ve been paid.',
      },
    ],
    relatedSlugs: [
      'web-design-invoice-template',
      'freelance-invoice-template',
      'marketing-agency-invoice-template',
    ],
  },
  {
    slug: 'web-design-invoice-template',
    industry: 'Web Design',
    emoji: '🌐',
    metaTitle: 'Free Web Design Invoice Template - Developer & Designer PDF',
    metaDescription:
      'Free web design invoice template for web designers and developers. Invoice for websites, apps, and digital projects. Professional PDF, no signup required.',
    h1: 'Free Web Design Invoice Template',
    subheader:
      'Invoice for web design and development projects professionally. Track design, development, hosting, maintenance, and SEO services in one clean invoice.',
    whatToInclude: [
      'Your agency or freelance name, website, and contact details',
      'Client business name and project URL',
      'Project scope summary and reference to statement of work',
      'Design phase: wireframes, mockups, UI design',
      'Development phase: frontend, backend, CMS setup',
      'Third-party costs: hosting, domain, stock photos, plugins',
      'Testing, QA, and launch services',
      'Monthly maintenance or retainer if ongoing',
    ],
    tips: [
      'Break projects into phases and invoice at each milestone for better cash flow',
      'Clearly separate design fees from development fees — clients compare them differently',
      'List third-party costs as pass-through line items at cost + markup',
      'Include your hosting and maintenance terms if providing ongoing services',
      'Add a go-live payment milestone to ensure you\'re paid before launch',
    ],
    faqs: [
      {
        question: 'How do web designers invoice for projects?',
        answer:
          'Web designers typically use milestone billing: 30-50% upfront to start, 25-30% at design approval, and the remainder upon launch. For large projects, add a mid-development milestone. Magic Invoice makes milestone invoicing simple.',
      },
      {
        question: 'Should I include hosting costs on a web design invoice?',
        answer:
          'Yes — list hosting, domain registration, SSL certificates, and any third-party services as separate line items. You can either pass these through at cost or add a management markup. Being transparent builds client trust.',
      },
      {
        question: 'How do I invoice for ongoing website maintenance?',
        answer:
          'For monthly maintenance retainers, create a recurring invoice at the start of each month. List the services included (backups, updates, uptime monitoring, support hours) as line items. Magic Invoice lets you create and export these monthly in seconds.',
      },
      {
        question: 'What payment terms should web designers use?',
        answer:
          'Net 14 is standard for most web design invoices. For the final payment at launch, many designers hold the domain/hosting until paid. Always include your late payment policy on invoices — typically a 1.5% monthly interest charge.',
      },
    ],
    relatedSlugs: [
      'graphic-design-invoice-template',
      'freelance-invoice-template',
      'it-services-invoice-template',
    ],
  },
  {
    slug: 'marketing-agency-invoice-template',
    industry: 'Marketing Agency',
    emoji: '📣',
    metaTitle: 'Free Marketing Agency Invoice Template - Agency PDF Invoice',
    metaDescription:
      'Free marketing agency invoice template. Invoice for SEO, PPC, social media, content marketing, and advertising services. No account needed.',
    h1: 'Free Marketing Agency Invoice Template',
    subheader:
      'Professional invoices for marketing agencies and consultants. Bill for SEO, PPC, social media management, content, and advertising with full transparency.',
    whatToInclude: [
      'Agency name, logo, and contact details',
      'Client business name and marketing contact',
      'Campaign or retainer reference number',
      'Billing period (monthly or campaign dates)',
      'Service breakdown: SEO, PPC management, social media, content creation',
      'Ad spend pass-through (billed at cost, separate from management fees)',
      'Performance metrics achieved (optional, builds trust)',
      'Agency management fee and any performance bonuses',
    ],
    tips: [
      'Separate ad spend from management fees clearly — clients notice when it\'s bundled',
      'Include a summary of results achieved during the billing period',
      'Invoice for retainers at the start of each month, not after',
      'Track all ad spend with platform statements you can share as backup',
      'Use a consistent invoice number format: AGENCY-[CLIENT]-[MONTH]',
    ],
    faqs: [
      {
        question: 'How do marketing agencies invoice clients?',
        answer:
          'Marketing agencies typically invoice monthly retainers in advance, with project-based fees invoiced at milestones. Ad spend is either billed as a pass-through (client pays platform directly) or invoiced separately from management fees.',
      },
      {
        question: 'Should ad spend be on the marketing invoice?',
        answer:
          'Best practice is to separate ad spend from management fees on your invoice. This gives clients full transparency into what they\'re paying for your services versus what goes directly to the platforms. Some agencies use separate invoices entirely.',
      },
      {
        question: 'What is a standard marketing agency fee?',
        answer:
          'Marketing agency fees vary widely: monthly retainers range from $1,000 to $20,000+ depending on scope. Project fees for campaigns can range from $500 to $50,000+. PPC management fees are typically 10-20% of ad spend or a flat monthly rate.',
      },
    ],
    relatedSlugs: [
      'consulting-invoice-template',
      'graphic-design-invoice-template',
      'web-design-invoice-template',
    ],
  },
  {
    slug: 'cleaning-service-invoice-template',
    industry: 'Cleaning Service',
    emoji: '🧹',
    metaTitle: 'Free Cleaning Service Invoice Template - PDF for Cleaners',
    metaDescription:
      'Free cleaning service invoice template for house cleaners, maids, and commercial cleaning companies. Professional PDF invoices, no signup needed.',
    h1: 'Free Cleaning Service Invoice Template',
    subheader:
      'Professional invoices for cleaning services. Invoice for residential cleaning, commercial cleaning, deep cleans, and recurring weekly or monthly services.',
    whatToInclude: [
      'Your cleaning company name and contact number',
      'Client name and property/service address',
      'Date(s) of cleaning service',
      'Type of cleaning: regular, deep clean, move-in/out, post-construction',
      'Number of hours or fixed price per clean',
      'Additional services: laundry, oven cleaning, window cleaning',
      'Cleaning supplies charge if applicable',
      'Frequency discount for recurring clients',
    ],
    tips: [
      'Collect payment on the day of service or invoice immediately after to improve cash flow',
      'Offer a discount for clients who book weekly recurring services',
      'Itemize special tasks (oven, fridge, windows) to justify your pricing',
      'For commercial clients, invoice at the start of the month for the coming month',
      'Keep a record of every service for tax and dispute purposes',
    ],
    faqs: [
      {
        question: 'How do I create a cleaning service invoice?',
        answer:
          'Use Magic Invoice — it\'s free and takes 2 minutes. Add your cleaning services as line items (e.g., "3-bedroom house clean - 3 hours @ $30/hr"), add the client\'s address, set a due date, and export as PDF. No account needed.',
      },
      {
        question: 'Should cleaning businesses charge by the hour or a flat rate?',
        answer:
          'Both work. Flat rates are easier for clients to budget and prevent disputes about time spent. Hourly rates work better for one-off deep cleans or unpredictable jobs. Many cleaning businesses use flat rates for regular cleans and hourly for extras.',
      },
      {
        question: 'How do I invoice recurring cleaning clients?',
        answer:
          'For weekly or bi-weekly clients, send a monthly invoice covering all sessions that month. List each session date as a line item. This reduces invoice frequency while keeping everything documented.',
      },
    ],
    relatedSlugs: [
      'plumbing-invoice-template',
      'landscaping-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'plumbing-invoice-template',
    industry: 'Plumbing',
    emoji: '🔧',
    metaTitle: 'Free Plumbing Invoice Template - Plumber PDF Invoice',
    metaDescription:
      'Free plumbing invoice template for plumbers and plumbing companies. Track labor, parts, and call-out fees. Professional PDF, no signup required.',
    h1: 'Free Plumbing Invoice Template',
    subheader:
      'Invoice for plumbing jobs professionally. Track labor hours, parts and materials, call-out fees, and emergency rates in one clear invoice.',
    whatToInclude: [
      'Your plumbing company name, license number, and contact info',
      'Customer name and service address',
      'Date and time of service call',
      'Work description: what was done and why',
      'Labor: hours worked × hourly rate (or flat service fee)',
      'Parts and materials: each part with quantity and unit cost',
      'Call-out fee or emergency surcharge if applicable',
      'Warranty on work performed',
    ],
    tips: [
      'Always list parts separately from labor so customers can verify the costs',
      'Include your plumbing license number — it builds trust and may be legally required',
      'Photograph the work before and after — useful for complex repairs',
      'State your warranty terms on every invoice (e.g., "30-day labor warranty")',
      'For emergency call-outs, clearly note the emergency rate applied',
    ],
    faqs: [
      {
        question: 'How do plumbers invoice customers?',
        answer:
          'Plumbers typically collect payment same-day for residential jobs. Create the invoice on Magic Invoice (takes 2 minutes), show it to the customer, collect payment, and send the PDF by email as a receipt. For commercial clients, Net 30 terms are standard.',
      },
      {
        question: 'What should a plumbing invoice include?',
        answer:
          'A plumbing invoice should include your license number, the service address, work date, description of the problem and what was done to fix it, labor hours and rate, all parts with costs, any call-out fees, and your warranty terms.',
      },
      {
        question: 'Can I include a warranty on my plumbing invoice?',
        answer:
          'Yes and you should. Add a note at the bottom of your invoice: "All labor carries a [X]-day warranty. Parts are covered by manufacturer warranty." This reduces disputes and demonstrates professionalism.',
      },
    ],
    relatedSlugs: [
      'electrical-invoice-template',
      'construction-invoice-template',
      'cleaning-service-invoice-template',
    ],
  },
  {
    slug: 'electrical-invoice-template',
    industry: 'Electrical',
    emoji: '⚡',
    metaTitle: 'Free Electrical Invoice Template - Electrician PDF Invoice',
    metaDescription:
      'Free electrical invoice template for electricians and electrical contractors. Track labor, materials, and permits. Professional PDF, no signup needed.',
    h1: 'Free Electrical Invoice Template',
    subheader:
      'Professional invoices for electricians. Bill for installations, repairs, inspections, and electrical contracting work with full material and labor breakdowns.',
    whatToInclude: [
      'Your electrical company name, license number, and insurance info',
      'Customer/client name and service address',
      'Job description: type of electrical work performed',
      'Labor hours broken down by electrician grade if applicable',
      'Materials: wire, fixtures, breakers, outlets — itemized with costs',
      'Permit fees if obtained on client\'s behalf',
      'Travel/mobilization fee for remote jobs',
      'Certificate of compliance or inspection reference',
    ],
    tips: [
      'List your electrical license number on every invoice — legally required in most regions',
      'Itemize all materials so customers can see you\'re not overcharging',
      'For large jobs, use progress billing — invoice at rough-in, panel work, and final inspection',
      'Include permit costs as a pass-through with the permit number',
      'Document all work with photos for safety records',
    ],
    faqs: [
      {
        question: 'How do electricians invoice for work?',
        answer:
          'Electricians invoice for labor (hourly or flat rate per job) plus materials. For residential service calls, same-day payment is common. For larger commercial or construction projects, progress billing at key milestones is standard.',
      },
      {
        question: 'Should I list permit costs on an electrical invoice?',
        answer:
          'Yes — list permit costs as a separate pass-through line item with the permit number for reference. This is transparent for your client and clear for your own accounting records.',
      },
      {
        question: 'What is a fair electrician invoice payment term?',
        answer:
          'For residential repairs and small jobs: payment on completion or within 7 days. For commercial electrical contracts: Net 30 is standard. For large projects: milestone billing with 10-15% retention held until final inspection passes.',
      },
    ],
    relatedSlugs: [
      'plumbing-invoice-template',
      'construction-invoice-template',
      'landscaping-invoice-template',
    ],
  },
  {
    slug: 'landscaping-invoice-template',
    industry: 'Landscaping',
    emoji: '🌿',
    metaTitle: 'Free Landscaping Invoice Template - Lawn Care PDF Invoice',
    metaDescription:
      'Free landscaping invoice template for lawn care, gardening, and landscaping businesses. Track labor, plants, and materials. No signup required.',
    h1: 'Free Landscaping Invoice Template',
    subheader:
      'Professional invoices for landscaping and lawn care businesses. Bill for mowing, planting, hardscaping, irrigation, and seasonal maintenance services.',
    whatToInclude: [
      'Your landscaping company name and contact details',
      'Client name and property address',
      'Service date(s)',
      'Services provided: mowing, edging, pruning, mulching, planting',
      'Plants and materials purchased on client\'s behalf (itemized)',
      'Equipment rental or delivery fees if applicable',
      'Seasonal service packages (spring cleanup, fall leaf removal)',
      'Ongoing maintenance contract reference',
    ],
    tips: [
      'Photograph your work to document the before/after for client approval',
      'For recurring lawn care, invoice monthly with all visit dates listed',
      'Add a weather cancellation policy to set expectations for missed visits',
      'Seasonal packages (mulching, aeration, overseeding) can be invoiced as flat fees',
      'Build in automatic price adjustments for fuel costs in your annual contracts',
    ],
    faqs: [
      {
        question: 'How do landscaping companies invoice clients?',
        answer:
          'For ongoing lawn maintenance, landscapers typically invoice monthly covering all visits that month. For one-time projects (new garden design, hardscaping), use milestone billing: 50% deposit, 50% on completion.',
      },
      {
        question: 'How do I invoice for plants and materials in landscaping?',
        answer:
          'List each plant and material as a separate line item with quantity and cost. You can invoice at cost or add a markup (typically 15-30%) for sourcing and handling. Be transparent with clients about your markup policy.',
      },
      {
        question: 'What is a good payment term for landscaping invoices?',
        answer:
          'For residential clients, Net 14 works well. For ongoing maintenance contracts, invoice at the start of each month and collect payment within 14 days. Offer a small discount (2-3%) for clients who pay on the same day.',
      },
    ],
    relatedSlugs: [
      'cleaning-service-invoice-template',
      'construction-invoice-template',
      'plumbing-invoice-template',
    ],
  },
  {
    slug: 'catering-invoice-template',
    industry: 'Catering',
    emoji: '🍽️',
    metaTitle: 'Free Catering Invoice Template - Catering Business PDF',
    metaDescription:
      'Free catering invoice template for catering companies and personal chefs. Track food, staffing, equipment, and service fees. No signup required.',
    h1: 'Free Catering Invoice Template',
    subheader:
      'Invoice for catering events professionally. Track food and beverage costs, staffing, equipment rental, and service fees in one detailed invoice.',
    whatToInclude: [
      'Your catering company name and contact details',
      'Client name and event organizer details',
      'Event date and venue address',
      'Guest count and menu description',
      'Food and beverage costs (per person or itemized)',
      'Staffing: servers, chefs, bartenders (hours × rate)',
      'Equipment rental: tables, linens, chafing dishes',
      'Service charge and gratuity policy',
      'Dietary accommodation notes',
    ],
    tips: [
      'Require a 25-50% deposit at booking, non-refundable within 30 days of event',
      'Final guest count should be confirmed and invoiced 1 week before the event',
      'List service charges separately from gratuity — many clients don\'t realize they\'re different',
      'Include a cancellation policy on all catering invoices',
      'For corporate events, Net 30 from event date is standard',
    ],
    faqs: [
      {
        question: 'How do caterers invoice for events?',
        answer:
          'Caterers typically issue three invoices: a booking deposit invoice, a pre-event balance invoice (sent 1-2 weeks before), and a post-event invoice for any additional charges (extra guests, overtime). Magic Invoice makes all three quick to produce.',
      },
      {
        question: 'How do I handle guest count changes on a catering invoice?',
        answer:
          'Issue the initial invoice based on the estimated guest count. When the final count is confirmed (typically 5-7 days before the event), send an updated invoice or supplemental invoice for the difference.',
      },
      {
        question: 'Should catering invoices include gratuity?',
        answer:
          'List gratuity as an optional separate line item, or include a note stating your gratuity policy. Many catering companies include a mandatory 18-20% service charge — make this clear on your invoice to avoid client confusion.',
      },
    ],
    relatedSlugs: [
      'event-planning-invoice-template',
      'cleaning-service-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'tutoring-invoice-template',
    industry: 'Tutoring',
    emoji: '📚',
    metaTitle: 'Free Tutoring Invoice Template - Tutor PDF Invoice',
    metaDescription:
      'Free tutoring invoice template for private tutors and tutoring centers. Invoice for lessons, courses, and assessments. No account required.',
    h1: 'Free Tutoring Invoice Template',
    subheader:
      'Professional invoices for tutors. Bill for individual sessions, packages, online lessons, and educational materials in a clean, parent-friendly format.',
    whatToInclude: [
      'Your name or tutoring company name',
      'Student name and parent/guardian billing contact',
      'Subject(s) tutored',
      'Session dates, duration, and frequency',
      'Hourly or per-session rate',
      'Package discount if pre-paid sessions are purchased',
      'Materials or resources provided',
      'Online platform fee if applicable',
    ],
    tips: [
      'Invoice weekly or bi-weekly rather than monthly to keep amounts manageable for parents',
      'Offer pre-paid session packages at a small discount to improve your cash flow',
      'For online tutoring, note the platform used (Zoom, Google Meet) on the invoice',
      'Track sessions in a simple log so invoices are accurate and dispute-proof',
      'Send invoices to parents with a summary of topics covered that session',
    ],
    faqs: [
      {
        question: 'How do tutors invoice parents for lessons?',
        answer:
          'Most tutors invoice weekly or bi-weekly by email, listing each session date, duration, and rate. For ongoing clients, a simple monthly invoice with all sessions listed is also common. Magic Invoice generates these in under 2 minutes.',
      },
      {
        question: 'Should tutors invoice before or after lessons?',
        answer:
          'Both approaches work. Invoicing in advance (pay-per-package) gives better cash flow and reduces no-shows. Invoicing after completed sessions is more common for long-term clients with an established relationship.',
      },
      {
        question: 'How do I invoice for online tutoring sessions?',
        answer:
          'Create an invoice just like in-person tutoring — add the session dates, duration, and your hourly rate. You can note "Online via Zoom" in the description. Magic Invoice works perfectly for online tutors.',
      },
    ],
    relatedSlugs: [
      'coaching-invoice-template',
      'freelance-invoice-template',
      'consulting-invoice-template',
    ],
  },
  {
    slug: 'coaching-invoice-template',
    industry: 'Coaching',
    emoji: '🎯',
    metaTitle: 'Free Coaching Invoice Template - Life & Business Coach PDF',
    metaDescription:
      'Free coaching invoice template for life coaches, business coaches, and executive coaches. Invoice for sessions and programs professionally. No signup needed.',
    h1: 'Free Coaching Invoice Template',
    subheader:
      'Professional invoicing for coaches. Bill for one-on-one sessions, group programs, online courses, and coaching packages with confidence.',
    whatToInclude: [
      'Your coaching business name and credentials',
      'Client name and contact details',
      'Coaching program or package name',
      'Session dates and duration',
      'Coaching format: 1:1 sessions, group calls, async support',
      'Program fee or per-session rate',
      'Payment plan installment reference (if part of a split payment)',
      'Access to materials, resources, or communities included',
    ],
    tips: [
      'Offer payment plans for high-ticket programs and reference installment number on each invoice',
      'Include program start and end dates to frame the value clearly',
      'Add a brief outcomes summary for ongoing clients to reinforce your value',
      'For group programs, invoice all participants separately with the program name',
      'Invoice immediately after enrollment confirmation to secure commitment',
    ],
    faqs: [
      {
        question: 'How do coaches invoice clients?',
        answer:
          'Coaches invoice for sessions, packages, or programs. For individual sessions, invoice after each call or weekly. For coaching programs, invoice the full amount at enrollment or break into installments (e.g., 3 monthly payments). Magic Invoice handles all formats.',
      },
      {
        question: 'How do I create an invoice for a coaching package?',
        answer:
          'Add the package name as the main line item (e.g., "3-Month Business Coaching Program - 12 sessions") with the package price. If splitting into installments, note "Installment 1 of 3" in the description. Create one invoice per installment payment.',
      },
      {
        question: 'Should coaches charge VAT or sales tax?',
        answer:
          'Coaching services are taxable in most jurisdictions once you exceed the VAT/sales tax registration threshold. Magic Invoice lets you add any tax rate to your invoices. Consult a local accountant for specific requirements in your country.',
      },
    ],
    relatedSlugs: [
      'tutoring-invoice-template',
      'consulting-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'writing-invoice-template',
    industry: 'Writing & Copywriting',
    emoji: '✍️',
    metaTitle: 'Free Writing Invoice Template - Copywriter & Content Writer PDF',
    metaDescription:
      'Free writing invoice template for freelance writers, copywriters, and content creators. Invoice per word, per piece, or per hour. No signup needed.',
    h1: 'Free Writing & Copywriting Invoice Template',
    subheader:
      'Professional invoices for writers and copywriters. Bill per word, per piece, or per hour for articles, blog posts, web copy, email campaigns, and more.',
    whatToInclude: [
      'Your writing business name or freelance name',
      'Client name and billing contact',
      'Project name or content batch reference',
      'Content deliverables: article titles, word counts, or piece names',
      'Rate structure: per word, per piece, per hour, or flat project fee',
      'Number of revision rounds included',
      'Deadline and delivery date',
      'Rights transferred (exclusive, non-exclusive, work-for-hire)',
    ],
    tips: [
      'Invoice per word for bulk content orders — it scales clearly and transparently',
      'Require a 50% deposit for new clients before beginning any work',
      'Specify usage rights on every invoice — work-for-hire vs. licensed content',
      'Track word counts carefully; clients will question discrepancies',
      'Net 14 payment terms are standard for the writing industry',
    ],
    faqs: [
      {
        question: 'How do freelance writers invoice clients?',
        answer:
          'Writers typically invoice per word, per article, or per hour depending on the project type. For bulk orders, invoice after delivery. For ongoing retainers, invoice at the start of each month. Magic Invoice makes any of these billing models easy.',
      },
      {
        question: 'What is a standard word rate for copywriting?',
        answer:
          'Copywriting rates vary widely by experience and niche: from $0.03-0.10/word for content mills, to $0.10-0.30/word for experienced freelancers, to $0.50-1.00+/word for specialist copywriters. SEO articles, white papers, and technical writing command premium rates.',
      },
      {
        question: 'Should I include rights transfer on a writing invoice?',
        answer:
          'Yes — always specify content ownership. "All rights transfer to client upon receipt of full payment" is the most common arrangement for work-for-hire. For licensed content, specify the exact usage rights granted to prevent unauthorized republication.',
      },
    ],
    relatedSlugs: [
      'freelance-invoice-template',
      'translation-invoice-template',
      'marketing-agency-invoice-template',
    ],
  },
  {
    slug: 'translation-invoice-template',
    industry: 'Translation',
    emoji: '🌍',
    metaTitle: 'Free Translation Invoice Template - Translator PDF Invoice',
    metaDescription:
      'Free translation invoice template for freelance translators and translation agencies. Invoice per word, per page, or per hour. No signup required.',
    h1: 'Free Translation Invoice Template',
    subheader:
      'Professional invoices for translators and interpreters. Bill per source word, per page, or per hour for translation, localization, and interpretation services.',
    whatToInclude: [
      'Your translation agency or freelancer name',
      'Client company name and billing contact',
      'Language pair: e.g., English → German',
      'Document name(s) and word count (source words)',
      'Rate per source word or per page',
      'Specialization surcharge if applicable (legal, medical, technical)',
      'Proofreading/editing as separate line item if included',
      'CAT tool or memory discount if applied',
    ],
    tips: [
      'Invoice in the client\'s currency to remove friction — Magic Invoice supports 100+ currencies',
      'Track source word counts precisely — use the exact count from the CAT tool or file',
      'Apply a minimum charge for very short documents (e.g., 250-word minimum)',
      'Offer a discount for repetitions/fuzzy matches if using translation memory',
      'Net 30 is standard for translation agencies; Net 14 for direct clients',
    ],
    faqs: [
      {
        question: 'How do translators invoice for services?',
        answer:
          'Translators typically invoice per source word, per page (250 words/page is standard), or per hour for interpretation. Project rates work for complex localization projects. Always base your invoice on the agreed rate from the translation brief or PO.',
      },
      {
        question: 'What is a standard translation rate per word?',
        answer:
          'Translation rates vary by language pair and specialization: general translation runs $0.07-0.15 per source word; legal/medical/technical translation runs $0.12-0.25+. Rare language pairs and certified translations command higher rates.',
      },
      {
        question: 'Should I include a minimum charge on translation invoices?',
        answer:
          'Yes — most translators apply a minimum charge (typically $50-100) for short projects under 200-300 words. This covers the administrative overhead and should be stated clearly in your rate card and referenced on the invoice.',
      },
    ],
    relatedSlugs: [
      'freelance-invoice-template',
      'writing-invoice-template',
      'consulting-invoice-template',
    ],
  },
  {
    slug: 'accounting-invoice-template',
    industry: 'Accounting',
    emoji: '📋',
    metaTitle: 'Free Accounting Invoice Template - Accountant PDF Invoice',
    metaDescription:
      'Free accounting invoice template for accountants, bookkeepers, and CPAs. Invoice for tax returns, bookkeeping, and advisory services. No signup needed.',
    h1: 'Free Accounting Invoice Template',
    subheader:
      'Professional invoices for accountants and bookkeepers. Bill for tax preparation, bookkeeping, payroll, financial statements, and advisory services.',
    whatToInclude: [
      'Your accounting firm name, CPA license number, and contact details',
      'Client name and entity type (individual, LLC, corporation)',
      'Tax year or billing period',
      'Services: tax preparation, bookkeeping, payroll, audit, advisory',
      'Hours worked at your hourly rate, or fixed fees per service',
      'Software subscription pass-through if applicable',
      'Government filing fees if paid on client behalf',
      'Retainer balance applied if pre-paid',
    ],
    tips: [
      'Invoice for tax preparation in advance of filing to ensure payment before submission',
      'Break fixed-fee services into clear deliverables so clients understand what they\'re paying for',
      'Track all advisory and consultation hours separately from compliance work',
      'Include your E&O insurance information on your invoice for professional credibility',
      'For monthly bookkeeping clients, invoice on the 1st of each month',
    ],
    faqs: [
      {
        question: 'How do accountants invoice clients?',
        answer:
          'Accountants use several billing models: hourly for advisory and consulting work, fixed fees for defined services (annual tax return, monthly bookkeeping), or annual retainers. Many practices bill monthly to smooth out revenue over the year.',
      },
      {
        question: 'What should an accountant invoice include?',
        answer:
          'An accounting invoice should include your CPA/CPA firm details, client entity information, billing period, specific services rendered (with time spent or fixed fee), any government fees paid on their behalf, applicable taxes, and your payment terms.',
      },
      {
        question: 'How do I invoice for tax return preparation?',
        answer:
          'Invoice for tax preparation as a fixed fee covering the return type (e.g., "1040 Individual Tax Return - $350" or "S-Corp 1120-S - $750"). Include a line for additional schedules if applicable. Invoice upon completion and before e-filing.',
      },
    ],
    relatedSlugs: [
      'consulting-invoice-template',
      'legal-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'legal-invoice-template',
    industry: 'Legal Services',
    emoji: '⚖️',
    metaTitle: 'Free Legal Invoice Template - Attorney & Law Firm PDF',
    metaDescription:
      'Free legal invoice template for attorneys, law firms, and legal consultants. Bill for legal services with time entries and disbursements. No signup needed.',
    h1: 'Free Legal Invoice Template',
    subheader:
      'Professional billing for attorneys and law firms. Create detailed legal invoices with time entries, disbursements, retainer balances, and matter references.',
    whatToInclude: [
      'Law firm name, attorney name, bar number, and contact',
      'Client name and matter/case reference number',
      'Billing period',
      'Time entries: date, description of work, hours, and rate per attorney',
      'Disbursements: court fees, filing fees, expert witness costs, travel',
      'Retainer balance applied and remaining retainer balance',
      'Outstanding balance from previous invoice if any',
      'Trust account details if billing from trust',
    ],
    tips: [
      'Use detailed time entry descriptions — "Phone call re: settlement" not just "Phone call"',
      'Bill disbursements at cost unless your engagement letter specifies a markup',
      'Show retainer applied clearly to avoid client confusion about total charges',
      'Send invoices monthly at minimum — quarterly billing leads to bill shock and disputes',
      'Include your billing rate schedule reference from the engagement letter',
    ],
    faqs: [
      {
        question: 'How do law firms invoice clients?',
        answer:
          'Law firms typically bill monthly with detailed time entries for each billable activity. Disbursements (filing fees, expert costs, etc.) are listed separately and billed at cost. Retainers are applied against invoices and replenished when depleted.',
      },
      {
        question: 'What is a legal disbursement on an invoice?',
        answer:
          'Disbursements are out-of-pocket costs incurred by the firm on the client\'s behalf: court filing fees, expert witness fees, travel expenses, courier costs, transcript fees, etc. These are listed separately from attorney fees on the invoice.',
      },
      {
        question: 'How do I show retainer balance on a legal invoice?',
        answer:
          'Show the retainer applied as a credit on the invoice: list the total fees and disbursements, then deduct "Retainer Applied: -$X,XXX", with the net amount due below. Include a line showing the new retainer balance.',
      },
    ],
    relatedSlugs: [
      'consulting-invoice-template',
      'accounting-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'real-estate-invoice-template',
    industry: 'Real Estate',
    emoji: '🏠',
    metaTitle: 'Free Real Estate Invoice Template - Agent & Broker PDF',
    metaDescription:
      'Free real estate invoice template for agents, brokers, and property managers. Invoice for commissions, management fees, and consulting. No signup required.',
    h1: 'Free Real Estate Invoice Template',
    subheader:
      'Professional invoices for real estate agents, brokers, and property managers. Bill for commissions, buyer consultation, property management, and advisory fees.',
    whatToInclude: [
      'Your brokerage name and real estate license number',
      'Client name and property address',
      'Transaction or property reference',
      'Commission rate and sale/lease price used for calculation',
      'Commission split if applicable (seller/buyer agent)',
      'Property management fees: monthly base fee + maintenance markups',
      'Consultation or advisory fee if non-commission based',
      'Transaction completion date',
    ],
    tips: [
      'Include the property address and sale price on commission invoices for clarity',
      'For property management, invoice at the start of each month for that month\'s services',
      'Note the commission split clearly when splitting with a co-agent or brokerage',
      'Keep commission invoices for tax filing — they\'re direct income documentation',
      'For lease commissions, reference the lease start date and term',
    ],
    faqs: [
      {
        question: 'How do real estate agents invoice for commissions?',
        answer:
          'Commissions are typically paid through escrow at closing, but agents may need to invoice their brokerage for their split. Create an invoice showing the sale price, commission percentage, gross commission, and your split amount. Magic Invoice makes this quick.',
      },
      {
        question: 'How do property managers invoice landlords?',
        answer:
          'Property managers typically invoice monthly for: management fee (% of rent collected), maintenance coordination fee, leasing fee when a new tenant is placed, and any maintenance costs passed through. Invoice at the start of the month.',
      },
      {
        question: 'What should a real estate consulting invoice include?',
        answer:
          'A real estate consulting invoice should include the property or portfolio description, the scope of consulting services, hours spent or project fee, any expenses incurred (market research, travel), and payment terms.',
      },
    ],
    relatedSlugs: [
      'consulting-invoice-template',
      'legal-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'it-services-invoice-template',
    industry: 'IT Services',
    emoji: '🖥️',
    metaTitle: 'Free IT Services Invoice Template - IT Contractor PDF Invoice',
    metaDescription:
      'Free IT services invoice template for IT consultants, MSPs, and tech contractors. Invoice for support, projects, and managed services. No signup needed.',
    h1: 'Free IT Services Invoice Template',
    subheader:
      'Professional invoices for IT consultants and managed service providers. Bill for support hours, project work, managed services, and software licensing.',
    whatToInclude: [
      'Your IT company name and contact details',
      'Client business name and IT contact',
      'Service period or project reference',
      'Managed services: monthly flat fee with scope description',
      'Break/fix support: hours worked × hourly rate, with ticket reference',
      'Project work: itemized tasks or milestones completed',
      'Software licenses procured on client\'s behalf',
      'Hardware or equipment at cost + markup',
      'Emergency/after-hours surcharge if applicable',
    ],
    tips: [
      'Reference ticket or support case numbers on invoices for client tracking',
      'For managed services, invoice at the start of each month — not at the end',
      'Separate break/fix hourly charges from your monthly managed service fee',
      'Include a summary of the month\'s work: tickets resolved, uptime maintained, patches applied',
      'For project work, use milestone billing tied to deliverables, not just time',
    ],
    faqs: [
      {
        question: 'How do IT consultants invoice clients?',
        answer:
          'IT consultants use two main models: hourly billing for break/fix and project work, and monthly retainers for managed services. MSPs invoice flat-rate monthly fees per user or device. Magic Invoice handles both models easily.',
      },
      {
        question: 'How do I invoice for managed IT services?',
        answer:
          'Invoice a fixed monthly fee at the start of each month. List the services included (endpoint management, backup monitoring, security patching, helpdesk hours) as a package. Add any out-of-scope work as separate hourly line items.',
      },
      {
        question: 'Should IT consultants charge for emergency support?',
        answer:
          'Yes — after-hours and emergency support should carry a premium rate (typically 1.5-2x your standard rate). State your after-hours policy clearly in your service agreement and reference it on invoices when the surcharge applies.',
      },
    ],
    relatedSlugs: [
      'web-design-invoice-template',
      'consulting-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'personal-trainer-invoice-template',
    industry: 'Personal Training',
    emoji: '💪',
    metaTitle: 'Free Personal Trainer Invoice Template - Fitness Coach PDF',
    metaDescription:
      'Free personal trainer invoice template for fitness coaches and personal trainers. Invoice for sessions, programs, and online coaching. No signup required.',
    h1: 'Free Personal Trainer Invoice Template',
    subheader:
      'Professional invoices for personal trainers and fitness coaches. Bill for personal training sessions, group classes, nutrition plans, and online coaching packages.',
    whatToInclude: [
      'Your name and personal training certification',
      'Client name',
      'Training period (dates of sessions covered)',
      'Session type: 1-on-1 PT, group session, online coaching',
      'Number of sessions and per-session rate, or package price',
      'Add-ons: nutrition consultation, meal planning, program design',
      'Gym or studio rental fee pass-through if applicable',
      'Package expiry date if selling session bundles',
    ],
    tips: [
      'Sell training in packages (e.g., 10-session packs) and invoice upfront for cash flow',
      'Track sessions with a session log and share it with your invoice as backup',
      'Add a no-show/late cancellation fee policy on every invoice',
      'For online clients, note the delivery platform (app, Trainerize, etc.)',
      'Invoice at the start of each month for ongoing clients',
    ],
    faqs: [
      {
        question: 'How do personal trainers invoice clients?',
        answer:
          'Personal trainers typically sell session packages and invoice upfront (e.g., 10 sessions for $500). For ongoing monthly clients, invoice at the start of the month. Magic Invoice lets you create either type in under 2 minutes.',
      },
      {
        question: 'How do I invoice for online personal training?',
        answer:
          'Invoice the same way as in-person training — just note "Online Personal Training" or the platform name in the service description. Include what\'s delivered: workout programs, check-in calls, nutrition guidance, and app access.',
      },
      {
        question: 'Can I add a cancellation fee to my personal training invoice?',
        answer:
          'Yes — if a client cancels within your stated cancellation window (e.g., 24 hours), add the cancellation fee as a line item on their next invoice with a brief note explaining the charge. Having this policy in writing (on your initial agreement and on invoices) protects you.',
      },
    ],
    relatedSlugs: [
      'coaching-invoice-template',
      'tutoring-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'event-planning-invoice-template',
    industry: 'Event Planning',
    emoji: '🎉',
    metaTitle: 'Free Event Planning Invoice Template - Event Planner PDF',
    metaDescription:
      'Free event planning invoice template for event planners and coordinators. Invoice for planning fees, vendor coordination, and event management. No signup.',
    h1: 'Free Event Planning Invoice Template',
    subheader:
      'Professional invoices for event planners and coordinators. Bill for planning fees, day-of coordination, vendor management, and event production services.',
    whatToInclude: [
      'Your event planning company name and contact details',
      'Client name and event type (wedding, corporate, birthday)',
      'Event date and venue',
      'Planning package description and scope',
      'Vendor coordination fees (per vendor managed)',
      'Day-of coordination hours',
      'Miscellaneous event expenses passed through at cost',
      'Deposit already paid and remaining balance',
    ],
    tips: [
      'Collect a 30-50% booking deposit immediately upon contract signing',
      'Issue a final invoice 2-4 weeks before the event for the remaining balance',
      'List all vendor pass-through costs transparently with receipts available',
      'Add your overtime policy for events that run long',
      'Include your cancellation and postponement fee schedule',
    ],
    faqs: [
      {
        question: 'How do event planners invoice clients?',
        answer:
          'Event planners typically invoice in stages: booking deposit (30-50%), mid-planning invoice (if a long engagement), and final balance 2-4 weeks before the event. Any post-event expenses are invoiced within 7 days after the event.',
      },
      {
        question: 'How do I invoice for vendor management in event planning?',
        answer:
          'You can charge vendor management as a percentage of total vendor spend (typically 10-15%) or as a flat fee per vendor coordinated. List it clearly on your invoice as "Vendor Coordination - [X] vendors".',
      },
      {
        question: 'What is a fair event planner day-of coordination fee?',
        answer:
          'Day-of coordination fees typically range from $500 to $2,500+ depending on event size and complexity. For full planning packages, day-of coordination is usually included. For clients who planned their own event, it\'s a popular standalone service.',
      },
    ],
    relatedSlugs: [
      'catering-invoice-template',
      'photography-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'video-production-invoice-template',
    industry: 'Video Production',
    emoji: '🎬',
    metaTitle: 'Free Video Production Invoice Template - Videographer PDF',
    metaDescription:
      'Free video production invoice template for videographers and video production companies. Invoice for shoots, editing, and post-production. No signup needed.',
    h1: 'Free Video Production Invoice Template',
    subheader:
      'Professional invoices for videographers and video production companies. Bill for pre-production, shoot days, editing, motion graphics, and licensing.',
    whatToInclude: [
      'Your production company name and contact details',
      'Client company name and project contact',
      'Project name and brief reference',
      'Pre-production: concept, scripting, storyboarding (hours × rate)',
      'Production: shoot day(s) at your day rate, including crew and equipment',
      'Post-production: editing hours, color grading, audio mixing, motion graphics',
      'Raw footage storage and delivery format (hard drive, cloud link)',
      'Usage rights and licensing (broadcast, online, in perpetuity)',
    ],
    tips: [
      'Invoice pre-production, production, and post-production as separate phases',
      'Require a 50% deposit before shoot day — never shoot without a booking fee',
      'Specify usage rights explicitly — broadcast rights cost more than social media rights',
      'List equipment rental and crew as separate line items for transparency',
      'Include a revision policy for post-production (e.g., 2 rounds of revisions included)',
    ],
    faqs: [
      {
        question: 'How do videographers invoice for projects?',
        answer:
          'Videographers typically invoice in stages: 50% deposit upfront, with the remaining 50% due upon delivery of the final video. For large productions, add a mid-production milestone invoice. Always specify licensing rights and deliver invoices as PDF.',
      },
      {
        question: 'How do I invoice for video editing services?',
        answer:
          'Invoice for editing by the hour or as a flat fee for the project. List editing hours × your rate, or describe the deliverable (e.g., "3-minute promo video, 2 revision rounds"). Add motion graphics, color grading, and audio mixing as separate line items.',
      },
      {
        question: 'What usage rights should be on a video invoice?',
        answer:
          'Specify the scope of usage rights granted: platform (YouTube, broadcast, social media), territory (worldwide, US only), and duration (1 year, in perpetuity). Broader rights command higher fees. License terms should match what you agreed in the contract.',
      },
    ],
    relatedSlugs: [
      'photography-invoice-template',
      'graphic-design-invoice-template',
      'freelance-invoice-template',
    ],
  },
  {
    slug: 'healthcare-invoice-template',
    industry: 'Healthcare',
    emoji: '🏥',
    metaTitle: 'Free Healthcare Invoice Template - Medical & Therapy PDF',
    metaDescription:
      'Free healthcare invoice template for therapists, counselors, nutritionists, and private practitioners. Professional medical invoices, no signup required.',
    h1: 'Free Healthcare Invoice Template',
    subheader:
      'Professional invoices for healthcare practitioners. Bill for consultations, therapy sessions, nutritional counseling, assessments, and wellness services.',
    whatToInclude: [
      'Your practice name, practitioner name, and license/registration number',
      'Patient or client name and date of birth (if required)',
      'Date(s) of service',
      'Service codes or procedure descriptions',
      'Session type: initial consultation, follow-up, group session',
      'Session duration and fee',
      'Applicable taxes or GST/VAT if your jurisdiction requires it',
      'Insurance information if billing insurer (and out-of-pocket remainder)',
    ],
    tips: [
      'Keep patient invoices HIPAA-compliant — only include minimum necessary information',
      'For insurance billing, create a superbill with diagnosis and procedure codes',
      'Collect payment at time of service for out-of-pocket clients',
      'For sliding scale clients, list the standard fee and the adjusted fee as a discount',
      'Issue receipts immediately — clients may need them for FSA/HSA reimbursement',
    ],
    faqs: [
      {
        question: 'How do private practitioners invoice clients?',
        answer:
          'Private practice therapists, coaches, and health practitioners typically collect payment at the time of service. Issue an invoice (which doubles as a receipt) immediately after each session. Magic Invoice generates professional healthcare invoices in seconds.',
      },
      {
        question: 'What is a superbill for healthcare?',
        answer:
          'A superbill is a detailed invoice used for insurance reimbursement. It includes procedure codes (CPT), diagnosis codes (ICD-10), and provider information. Clients submit superbills to their insurance for out-of-network reimbursement.',
      },
      {
        question: 'Do therapists need to charge sales tax?',
        answer:
          'In most jurisdictions, healthcare and medical services are exempt from sales tax/VAT. However, some wellness services (personal training, nutritional consulting) may be taxable. Always verify with a local accountant for your specific practice type.',
      },
    ],
    relatedSlugs: [
      'coaching-invoice-template',
      'personal-trainer-invoice-template',
      'consulting-invoice-template',
    ],
  },
];

export function getTemplateBySlug(slug: string): TemplateData | undefined {
  return templates.find((t) => t.slug === slug);
}

export function getAllTemplateSlugs(): string[] {
  return templates.map((t) => t.slug);
}
