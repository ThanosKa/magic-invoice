export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: string;
  category: string;
  excerpt: string;
  content: BlogSection[];
  faqs: { question: string; answer: string }[];
}

export interface BlogSection {
  heading?: string;
  body: string;
  list?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-write-a-professional-invoice',
    title: 'How to Write a Professional Invoice: Complete Guide (2026)',
    metaTitle: 'How to Write a Professional Invoice: Step-by-Step Guide',
    metaDescription:
      'Learn how to write a professional invoice step-by-step. Includes required fields, invoice numbering, payment terms, and free template to get started.',
    publishedAt: '2026-01-15',
    updatedAt: '2026-02-27',
    readingTime: '7 min read',
    category: 'Invoicing Basics',
    excerpt:
      'A professional invoice is more than just a payment request — it\'s a legal document, a brand statement, and a cash flow tool. Here\'s everything you need to include.',
    content: [
      {
        heading: 'What is an Invoice?',
        body: 'An invoice is a formal payment request issued by a seller to a buyer. It documents the goods or services provided, the amount owed, and the payment deadline. A properly written invoice is also a legal document that can be used in disputes, for tax purposes, and as proof of income.',
      },
      {
        heading: 'Required Elements of a Professional Invoice',
        body: 'Every professional invoice should contain the following information to be legally valid and to ensure fast payment:',
        list: [
          'Your business name, address, phone number, and email',
          'Your client\'s business name and billing address',
          'A unique invoice number (e.g., INV-2026-001)',
          'Invoice date (the date you created the invoice)',
          'Payment due date (e.g., Net 30 from invoice date)',
          'Itemized list of products or services with descriptions',
          'Quantity and unit price for each line item',
          'Subtotal, any taxes applied, and the total amount due',
          'Payment method instructions (bank details, PayPal, etc.)',
          'Late payment fee policy',
        ],
      },
      {
        heading: 'How to Number Your Invoices',
        body: 'Invoice numbers must be unique and sequential. A consistent numbering system makes your invoices easy to track and looks professional. Common formats include:',
        list: [
          'Sequential: INV-001, INV-002, INV-003',
          'Year-based: INV-2026-001, INV-2026-002',
          'Client-based: ACME-001, ACME-002 (one series per client)',
          'Date-based: 20260115-001 (YYYYMMDD-sequence)',
        ],
      },
      {
        heading: 'Setting Payment Terms',
        body: 'Payment terms define when you expect to be paid. Common terms are:',
        list: [
          'Net 7 — payment due within 7 days (good for small jobs or new clients)',
          'Net 14 — payment due within 14 days (standard for most freelancers)',
          'Net 30 — payment due within 30 days (standard for corporate clients)',
          'Due on Receipt — payment expected immediately',
          '50% upfront, 50% on completion — common for large projects',
        ],
      },
      {
        heading: 'How to Write Invoice Line Items',
        body: 'Each line item on your invoice should be specific enough that your client immediately understands what they\'re paying for. Avoid vague descriptions like "Services rendered." Instead, write "Website redesign — homepage and about page (8 hours @ $95/hr)". Be specific about what was done, when it was done, and how the price was calculated.',
      },
      {
        heading: 'Adding Taxes to Your Invoice',
        body: 'Whether you need to add tax depends on your country, your registration status, and the type of service. In the EU, VAT is charged once you exceed your country\'s registration threshold. In the US, services are generally not taxable (but goods are). In Australia and Canada, GST/HST applies to most services. When in doubt, consult a local accountant.',
      },
      {
        heading: 'How to Send Your Invoice',
        body: 'Email is the most common method. Export your invoice as a PDF (Magic Invoice does this with one click) and attach it to a professional email. Your email subject line should include the invoice number and amount: "Invoice INV-2026-047 — $1,200 due Feb 28". Always follow up if payment hasn\'t arrived by the due date.',
      },
    ],
    faqs: [
      {
        question: 'What is the difference between an invoice and a receipt?',
        answer:
          'An invoice is sent before payment to request money. A receipt is issued after payment as proof that money was received. The same document can serve as both if issued at the time of payment.',
      },
      {
        question: 'How quickly should I send an invoice after completing work?',
        answer:
          'Send your invoice the same day you complete the work. Delayed invoicing leads to delayed payment. The longer you wait to invoice, the longer you wait to be paid.',
      },
      {
        question: 'Can I create a professional invoice for free?',
        answer:
          'Yes — Magic Invoice creates professional PDF invoices for free, with no account required. Fill in your details and download your invoice in under 2 minutes.',
      },
    ],
  },
  {
    slug: 'invoice-vs-receipt',
    title: 'Invoice vs Receipt: Key Differences Explained',
    metaTitle: 'Invoice vs Receipt: What\'s the Difference? (Clear Guide)',
    metaDescription:
      'Invoice vs receipt — what\'s the difference and when do you use each? Learn the key differences between invoices and receipts with practical examples.',
    publishedAt: '2026-01-20',
    updatedAt: '2026-02-27',
    readingTime: '5 min read',
    category: 'Invoicing Basics',
    excerpt:
      'An invoice requests payment. A receipt confirms payment. But the difference goes deeper — here\'s when to use each, what to include, and why it matters.',
    content: [
      {
        heading: 'The Core Difference',
        body: 'An invoice is a payment request — it\'s sent before (or at the time of) payment to tell your client what they owe. A receipt is a payment confirmation — it\'s issued after payment to acknowledge that money was received. Both are essential business documents, but they serve opposite purposes in the transaction timeline.',
      },
      {
        heading: 'What is an Invoice?',
        body: 'An invoice is a formal document requesting payment for goods or services provided. Key characteristics:',
        list: [
          'Issued before or when payment is due',
          'Contains a unique invoice number',
          'Lists all goods/services with prices',
          'States payment terms and due date',
          'May include late payment penalties',
          'Is a legally binding payment request',
        ],
      },
      {
        heading: 'What is a Receipt?',
        body: 'A receipt is proof of payment. It confirms that a transaction occurred. Key characteristics:',
        list: [
          'Issued after payment has been received',
          'References the invoice number or transaction',
          'Shows the amount paid and payment method',
          'Is dated with the actual payment date',
          'Serves as the buyer\'s proof of purchase',
          'May be required for expense reimbursement or tax claims',
        ],
      },
      {
        heading: 'When the Same Document Serves Both Purposes',
        body: 'In many situations — especially for freelancers and small businesses — the same document serves as both. When a client pays at the time of service (a photographer at a shoot, a cleaner after the job), you can issue the invoice, collect payment, and the paid invoice becomes the receipt. Mark it as "PAID" with the payment date and method.',
      },
      {
        heading: 'Do Freelancers Need to Issue Receipts?',
        body: 'If a client pays an invoice, many freelancers simply mark it as paid and send a copy back. Technically, this serves as the receipt. However, some clients — especially corporate ones with expense reporting — may request a formal receipt separate from the invoice. Having a PDF invoice clearly marked "PAID" with the payment date is almost always sufficient.',
      },
      {
        heading: 'Receipt Requirements for Tax Purposes',
        body: 'For your clients, receipts are important for expense claims and tax deductions. For you, the invoice is your income record. Keep copies of all sent invoices and note when they were paid — this is your income documentation for tax filing.',
      },
    ],
    faqs: [
      {
        question: 'Can an invoice be used as a receipt?',
        answer:
          'Yes — a paid invoice (marked "PAID" with the payment date) serves as a receipt. This is standard practice for freelancers and small businesses.',
      },
      {
        question: 'Which comes first, invoice or receipt?',
        answer:
          'The invoice always comes first — it requests payment. The receipt comes after payment is made, confirming the transaction.',
      },
      {
        question: 'Do I need to keep receipts if I already have invoices?',
        answer:
          'Keep your invoices as income records (with payment dates noted). If you pay for business expenses, keep those receipts as deduction documentation. Both serve different tax purposes.',
      },
    ],
  },
  {
    slug: 'invoice-payment-terms-guide',
    title: 'Invoice Payment Terms: Complete Guide for Freelancers (2026)',
    metaTitle: 'Invoice Payment Terms Explained: Net 30, Net 14, Due on Receipt',
    metaDescription:
      'Complete guide to invoice payment terms. Learn what Net 30, Net 14, Net 7, and 2/10 Net 30 mean — and which terms work best for freelancers and small businesses.',
    publishedAt: '2026-01-25',
    updatedAt: '2026-02-27',
    readingTime: '8 min read',
    category: 'Invoicing Strategy',
    excerpt:
      'Payment terms directly affect your cash flow. The wrong terms mean waiting 60+ days to get paid. Here\'s how to choose and set payment terms that work for your business.',
    content: [
      {
        heading: 'What Are Payment Terms?',
        body: 'Payment terms are the conditions under which you expect to be paid. They specify the deadline for payment, any early payment discounts, and late payment penalties. Clear payment terms reduce disputes, accelerate payment, and protect you legally.',
      },
      {
        heading: 'Common Payment Term Abbreviations',
        body: 'The term "Net" followed by a number means the payment is due within that many days from the invoice date:',
        list: [
          'Net 7 — payment due within 7 days (aggressive, used for small jobs or new clients)',
          'Net 14 — payment due within 14 days (standard for freelancers)',
          'Net 30 — payment due within 30 days (standard for corporate clients)',
          'Net 60 — payment due within 60 days (large enterprise standard)',
          'Due on Receipt — payment expected immediately',
          'EOM — End of Month (payment due at the end of the month the invoice is issued)',
          '2/10 Net 30 — 2% discount if paid within 10 days, otherwise full amount due in 30 days',
        ],
      },
      {
        heading: 'Which Payment Terms Should Freelancers Use?',
        body: 'Net 14 is the sweet spot for most freelancers. It gives clients enough time to process payment without giving them a month to forget. For new clients, use Net 7 or require payment upfront. For long-term clients with reliable payment history, Net 30 is acceptable. Avoid Net 60 unless working with large enterprises that contractually require it.',
      },
      {
        heading: 'How to Encourage Early Payment',
        body: 'Early payment discounts work well with corporate clients who have accounting departments. Offer "2/10 Net 30" — a 2% discount if paid within 10 days. On a $10,000 invoice, that\'s $200 to get paid 20 days early. The discount cost is worth it for your cash flow.',
      },
      {
        heading: 'Late Payment Fees: How to Handle Overdue Invoices',
        body: 'Always include a late payment fee policy on your invoices. A common clause: "Invoices unpaid after the due date are subject to a 1.5% monthly interest charge on the outstanding balance." Many freelancers never enforce this, but having it on the invoice signals professionalism and discourages late payment.',
      },
      {
        heading: 'Requiring Deposits Before Starting Work',
        body: 'For new clients or large projects, requiring a 25-50% deposit is standard practice. Invoice for the deposit immediately upon signing — before you start any work. This protects you from clients who disappear, demonstrates commitment from both sides, and improves your cash flow significantly.',
      },
      {
        heading: 'How to State Payment Terms on Your Invoice',
        body: 'Be explicit. Don\'t just write "Net 30" — write "Payment due by [specific date, 30 days from today]." Specific dates remove ambiguity about when "Net 30" starts — from invoice date, delivery date, or receipt date. Magic Invoice automatically calculates your due date based on your preferred terms.',
      },
    ],
    faqs: [
      {
        question: 'What does Net 30 mean on an invoice?',
        answer:
          'Net 30 means the full invoice amount is due within 30 calendar days from the invoice date. So an invoice dated January 1 with Net 30 terms is due January 31.',
      },
      {
        question: 'What payment terms are best for freelancers?',
        answer:
          'Net 14 is most popular among freelancers — it\'s fast enough to maintain cash flow while giving clients reasonable processing time. For new clients, require 50% upfront. For established clients, Net 30 is acceptable.',
      },
      {
        question: 'Can I charge interest on late invoices?',
        answer:
          'Yes — most jurisdictions allow you to charge late payment interest if you state it clearly on your invoice. The typical rate is 1.5-2% per month on the outstanding balance. Include your late fee policy on every invoice.',
      },
    ],
  },
  {
    slug: 'how-to-invoice-as-a-freelancer',
    title: 'How to Invoice as a Freelancer: Complete Guide (2026)',
    metaTitle: 'How to Invoice as a Freelancer: Step-by-Step Guide',
    metaDescription:
      'Learn how to invoice as a freelancer: what to include, how to set payment terms, how to follow up on late payments, and the best free tools. Complete 2026 guide.',
    publishedAt: '2026-02-01',
    updatedAt: '2026-02-27',
    readingTime: '9 min read',
    category: 'Freelancing',
    excerpt:
      'Invoicing is one of the most important — and most neglected — business skills for freelancers. Here\'s the complete system from creating your first invoice to getting paid on time, every time.',
    content: [
      {
        heading: 'Why Proper Invoicing Matters for Freelancers',
        body: 'Late payments are the #1 cash flow problem for freelancers. Studies show that 60% of freelancers regularly experience late payments, and 29% have had to stop working with a client due to non-payment. A professional invoicing system dramatically reduces these problems by setting clear expectations, creating paper trails, and making it easy for clients to pay.',
      },
      {
        heading: 'Step 1: Set Up Your Invoicing System',
        body: 'Before sending your first invoice, decide on your basic invoicing structure:',
        list: [
          'Invoice numbering system (e.g., INV-2026-001)',
          'Standard payment terms (Net 7, Net 14, or Net 30)',
          'Preferred payment methods (bank transfer, PayPal, Wise, etc.)',
          'Late payment fee policy (typically 1.5-2% per month)',
          'Your billing rate structure (hourly, per project, retainer)',
        ],
      },
      {
        heading: 'Step 2: What to Include on a Freelance Invoice',
        body: 'Every freelance invoice must include:',
        list: [
          'Your full name or business name',
          'Your address, email, and phone number',
          'Client\'s full business name and billing address',
          'Unique invoice number',
          'Invoice date and payment due date',
          'Detailed list of services: what was done, when, and at what rate',
          'Subtotal, any taxes, and the total amount due',
          'Payment instructions: bank details, PayPal, etc.',
        ],
      },
      {
        heading: 'Step 3: How to Price Your Services',
        body: 'Common freelance billing structures include: hourly (you track time and bill hours × rate), per project (fixed price for a defined deliverable), per word/per unit (for writers, translators), and monthly retainer (a fixed fee for ongoing availability or a set volume of work). Choose the structure that reflects the value you provide and makes billing straightforward.',
      },
      {
        heading: 'Step 4: When to Invoice',
        body: 'Invoice immediately upon completing work — the same day if possible. For long projects, use milestone billing: invoice at agreed-upon project stages rather than waiting until the end. Never deliver final work without receiving payment first, or at minimum an outstanding invoice that\'s already due.',
      },
      {
        heading: 'Step 5: Following Up on Late Payments',
        body: 'Following up on late payments is uncomfortable but essential. A simple system: 1) Day 1 after due date: polite reminder email — "I wanted to follow up on Invoice #INV-001 due yesterday." 2) Day 7: second reminder with the overdue amount and updated due date. 3) Day 14: phone call + email with a firm deadline and mention of late fees. 4) Day 30+: formal demand letter or small claims court for significant amounts.',
      },
      {
        heading: 'Protecting Yourself Before Starting Work',
        body: 'Always have a signed contract before starting, and always collect a deposit from new clients. 50% upfront is standard for project work. The contract should reference your payment terms, late fee policy, what happens if the project is cancelled, and who owns the work before payment is received.',
      },
    ],
    faqs: [
      {
        question: 'How often should freelancers invoice?',
        answer:
          'Invoice immediately after completing each project or milestone. For ongoing work, invoice at the start of each month. The sooner you invoice, the sooner you get paid.',
      },
      {
        question: 'What is the best invoicing tool for freelancers?',
        answer:
          'Magic Invoice is the fastest free option — no account, create a professional PDF in 2 minutes. For freelancers needing recurring invoices or online payment, Wave (free) or Invoice Ninja (free tier) are good options.',
      },
      {
        question: 'How do I invoice a client who hasn\'t paid?',
        answer:
          'Send a polite overdue reminder referencing the invoice number and due date. Wait 7 days, then send a firmer follow-up. If no payment after 30 days, consider engaging a debt collection service or small claims court for amounts under your jurisdiction\'s limit.',
      },
    ],
  },
  {
    slug: 'what-is-a-proforma-invoice',
    title: 'What is a Proforma Invoice? Complete Guide & Free Template',
    metaTitle: 'What is a Proforma Invoice? Definition, Uses & Template',
    metaDescription:
      'What is a proforma invoice? Learn the definition, when to use it, how it differs from a regular invoice, and get a free proforma invoice template.',
    publishedAt: '2026-02-05',
    updatedAt: '2026-02-27',
    readingTime: '6 min read',
    category: 'Invoice Types',
    excerpt:
      'A proforma invoice is a preliminary bill sent before goods are shipped or services are rendered. It\'s not a demand for payment — it\'s an advance confirmation of the deal.',
    content: [
      {
        heading: 'What is a Proforma Invoice?',
        body: 'A proforma invoice is a preliminary invoice sent to a buyer before the final invoice. It describes the goods or services that will be provided, the estimated costs, and the terms of the sale. The word "proforma" means "as a matter of form" — it\'s a document issued as a formality or preview rather than a final billing statement.',
      },
      {
        heading: 'Proforma Invoice vs Regular Invoice: Key Differences',
        body: 'The key differences between a proforma invoice and a standard invoice:',
        list: [
          'A proforma is not a demand for payment — a regular invoice is',
          'A proforma is issued before delivery — a regular invoice after',
          'A proforma can change based on actual delivery — a regular invoice is final',
          'A proforma is clearly labeled "PROFORMA INVOICE" at the top',
          'A proforma doesn\'t create a legal obligation — a regular invoice does',
        ],
      },
      {
        heading: 'When to Use a Proforma Invoice',
        body: 'Use a proforma invoice when:',
        list: [
          'A buyer needs to arrange financing or get approval before committing',
          'The order requires a letter of credit from a bank',
          'You\'re shipping goods internationally and need a customs declaration document',
          'You want to confirm the details of an order before producing a final invoice',
          'A client needs a budget estimate to get internal sign-off on a purchase',
          'You\'re quoting a project where the final cost may change slightly',
        ],
      },
      {
        heading: 'Proforma Invoices in International Trade',
        body: 'Proforma invoices are especially common in international trade. When shipping goods across borders, customs authorities often require a proforma invoice to assess import duties and taxes before the shipment clears customs. It serves as the commercial document declaring the value and nature of the goods.',
      },
      {
        heading: 'How to Create a Proforma Invoice',
        body: 'Creating a proforma invoice is identical to creating a regular invoice — same layout, same fields. The only differences are: label it "PROFORMA INVOICE" (not "Invoice"), include an expiry date (e.g., "This proforma is valid for 30 days"), and note that it\'s not a payment request. Use Magic Invoice to create the invoice and add "PROFORMA" to the invoice number or title.',
      },
    ],
    faqs: [
      {
        question: 'Is a proforma invoice legally binding?',
        answer:
          'No — a proforma invoice is not legally binding. It\'s a preview of the expected transaction. The legally binding payment request is the final invoice issued after delivery.',
      },
      {
        question: 'Does a proforma invoice require payment?',
        answer:
          'Not automatically. A proforma invoice is informational — it shows what the buyer will owe. However, some businesses require payment of a proforma invoice before beginning work (essentially using it as a deposit invoice).',
      },
      {
        question: 'How do I create a proforma invoice?',
        answer:
          'Create a regular invoice in Magic Invoice and add "PROFORMA" to the invoice title or number. Include a note that it\'s a preliminary document and not a final invoice. Download as PDF and send to your client.',
      },
    ],
  },
  {
    slug: 'how-to-create-invoice-pdf',
    title: 'How to Create an Invoice PDF: 3 Ways (Free & Fast)',
    metaTitle: 'How to Create an Invoice PDF: Free Methods & Tools (2026)',
    metaDescription:
      'Learn how to create an invoice PDF in 3 ways: using a free online invoice generator, converting Word/Excel, or using Google Docs. Best free method included.',
    publishedAt: '2026-02-08',
    updatedAt: '2026-02-27',
    readingTime: '5 min read',
    category: 'How-To Guides',
    excerpt:
      'Creating a professional invoice PDF doesn\'t require expensive software. Here are the 3 best methods, from completely free to professional-grade.',
    content: [
      {
        heading: 'Method 1: Use a Free Invoice Generator (Fastest)',
        body: 'The fastest way to create an invoice PDF is to use a free invoice generator like Magic Invoice. The process takes under 2 minutes: visit the site, fill in your business details and client details, add your line items, and click "Export PDF". The result is a pixel-perfect, professionally designed invoice PDF. No account, no software, no design skills required.',
      },
      {
        heading: 'Method 2: Convert a Word or Google Doc Invoice',
        body: 'If you have an invoice template in Word or Google Docs, you can export it as a PDF:',
        list: [
          'In Microsoft Word: File → Save As → PDF',
          'In Google Docs: File → Download → PDF Document (.pdf)',
          'Downside: formatting often shifts between screen and PDF',
          'Result can look unprofessional or misaligned',
          'No automatic calculations — you must calculate totals manually',
        ],
      },
      {
        heading: 'Method 3: Use Spreadsheet Software (Excel/Sheets)',
        body: 'Excel and Google Sheets can auto-calculate invoice totals and export as PDF. Many free invoice templates exist for both. The downside is that design is limited, layout breaks easily, and the PDF output often looks like a spreadsheet rather than a professional document. This method is acceptable but not ideal for client-facing invoices.',
      },
      {
        heading: 'Why Invoice Generator PDFs Look Better',
        body: 'Dedicated invoice tools like Magic Invoice are designed specifically for invoicing. The PDF output is designed to look professional: proper typography, clean layout, automatic total calculations, and consistent branding. Compare a Word-exported invoice to a Magic Invoice PDF and the difference is immediately apparent.',
      },
      {
        heading: 'How to Send Your Invoice PDF',
        body: 'Once you have your invoice PDF, email it to your client. Email subject: "Invoice #INV-001 — [Your Name] — $1,200 due Feb 28, 2026". Attach the PDF and include the key details (invoice number, amount, due date) in the email body for easy reference. CC yourself or BCC your business email for records.',
      },
    ],
    faqs: [
      {
        question: 'How do I make an invoice PDF for free?',
        answer:
          'Use Magic Invoice — it\'s free, requires no account, and exports professional PDF invoices instantly. Visit the site, fill in your details, and download your invoice.',
      },
      {
        question: 'Can I convert a Word invoice to PDF?',
        answer:
          'Yes — in Word, go to File → Save As → PDF. In Google Docs, go to File → Download → PDF. However, formatting may shift, and the result often looks less professional than a dedicated invoice generator.',
      },
      {
        question: 'What is the best free invoice PDF creator?',
        answer:
          'Magic Invoice is the best free option for most users: no account needed, professional design, instant PDF export, supports 100+ currencies and 11 languages.',
      },
    ],
  },
  {
    slug: 'invoice-numbering-best-practices',
    title: 'Invoice Numbering Best Practices: How to Number Invoices Properly',
    metaTitle: 'Invoice Numbering: Best Practices and Formats (2026 Guide)',
    metaDescription:
      'Learn how to number invoices properly. Best practices for invoice number formats, sequential numbering, client-based systems, and year-based numbering.',
    publishedAt: '2026-02-10',
    updatedAt: '2026-02-27',
    readingTime: '5 min read',
    category: 'Invoicing Basics',
    excerpt:
      'Invoice numbers seem simple but bad numbering creates accounting headaches and looks unprofessional. Here\'s how to do it right from day one.',
    content: [
      {
        heading: 'Why Invoice Numbering Matters',
        body: 'A unique, sequential invoice number is required for legal and tax compliance in most countries. It lets you track payments, quickly find specific invoices, and prevents duplicate billing. A consistent numbering system also looks professional — clients notice when you have gap-free, logical invoice numbers.',
      },
      {
        heading: 'Popular Invoice Number Formats',
        body: 'There\'s no single "correct" format, but the best formats share two things: they\'re unique and sequential. Common formats include:',
        list: [
          'Simple sequential: INV-001, INV-002, INV-003 (simplest, good for low volume)',
          'Year-prefixed: INV-2026-001 (resets each year, shows the invoice year)',
          'Client-based: ACME-001, ACME-002 (separate series per client)',
          'Date-based: 20260115-001 (date + daily sequence, great for high volume)',
          'Department-based: DESIGN-001, DEV-001 (useful for agencies)',
        ],
      },
      {
        heading: 'Rules for Invoice Numbering',
        body: 'Follow these rules to keep your invoice numbering clean:',
        list: [
          'Never reuse invoice numbers — even for cancelled or voided invoices',
          'Keep numbers sequential — no gaps (gap-free is a tax compliance requirement in many countries)',
          'If you cancel an invoice, mark it as VOID but keep the number in your system',
          'Don\'t restart numbering mid-year without good reason',
          'Use leading zeros (001 vs 1) to maintain sort order in file systems',
        ],
      },
      {
        heading: 'Invoice Numbering for VAT/Tax Compliance',
        body: 'In the EU and many other jurisdictions, sequential, gap-free invoice numbering is a legal requirement for VAT-registered businesses. Tax authorities may question gaps in your invoice sequence during audits. If an invoice is cancelled or issued in error, issue a credit note rather than deleting the invoice number.',
      },
      {
        heading: 'What to Do When You Make a Mistake on an Invoice',
        body: 'Never delete or renumber an invoice that\'s already been sent. Instead, issue a credit note (a negative invoice) to cancel the original, then issue a new corrected invoice with the next available number. This maintains your sequential numbering while correcting the error with a full audit trail.',
      },
    ],
    faqs: [
      {
        question: 'Can I use any format for invoice numbers?',
        answer:
          'Yes, any unique sequential format works. The key requirements are uniqueness (no duplicates) and generally sequential order. For VAT-registered businesses in many countries, gap-free sequencing is legally required.',
      },
      {
        question: 'What happens if I skip an invoice number?',
        answer:
          'In most cases, nothing serious — but for VAT-registered businesses in the EU, gaps in invoice sequencing can trigger questions during tax audits. Always void cancelled invoices rather than deleting them to avoid gaps.',
      },
      {
        question: 'Should invoice numbers reset each year?',
        answer:
          'It\'s optional. Year-prefixed formats (INV-2026-001) reset naturally each year. Simple sequential formats (INV-001) don\'t need to reset and keep a continuous history across years.',
      },
    ],
  },
  {
    slug: 'how-to-handle-late-invoice-payments',
    title: 'How to Handle Late Invoice Payments: Step-by-Step Guide',
    metaTitle: 'Late Invoice Payments: How to Follow Up & Get Paid (2026)',
    metaDescription:
      'Learn how to handle late invoice payments: when to follow up, what to say, how to charge late fees, and when to escalate. Templates included.',
    publishedAt: '2026-02-12',
    updatedAt: '2026-02-27',
    readingTime: '7 min read',
    category: 'Getting Paid',
    excerpt:
      'Late payments cost freelancers and small businesses an average of $50,000+ per year. Here\'s a proven system for getting paid on time — and what to do when you\'re not.',
    content: [
      {
        heading: 'Why Late Payments Happen',
        body: 'Late payments usually aren\'t malicious — they happen because: invoices got lost in email, the client forgot, the accounts payable process takes time, cash flow issues on their end, or unclear payment instructions. Understanding the cause helps you respond appropriately.',
      },
      {
        heading: 'Prevention: The Best Late Payment Strategy',
        body: 'The best time to handle late payments is before they happen:',
        list: [
          'Require deposits from new clients (50% upfront)',
          'State payment terms clearly on every invoice (specific due date, not just "Net 30")',
          'Include late payment fee terms on every invoice',
          'Send invoices immediately — don\'t batch them',
          'Send a payment reminder 3 days before the due date',
          'Build relationships — clients pay people they like faster',
        ],
      },
      {
        heading: 'Day 1 After Due Date: The Polite Reminder',
        body: 'Send a brief, friendly reminder. Assume good faith — it may have simply been missed. Email subject: "Friendly reminder: Invoice #INV-001 ($1,200) was due yesterday". Keep the tone professional and non-accusatory. Include the invoice as an attachment and your payment details.',
      },
      {
        heading: 'Day 7: The Follow-Up',
        body: 'If no response, send a firmer follow-up. Reference the original reminder, state the amount overdue and any late fees accumulating, and ask for a specific payment date. Consider calling instead of emailing — phone calls are harder to ignore than emails.',
      },
      {
        heading: 'Day 14-30: Escalation',
        body: 'At this point, formalize your communication. Send a letter (email is acceptable) referencing all previous contact, the total amount owed including late fees, and a final deadline (e.g., 7 days) before you take further action. State clearly what "further action" means: collection agency, small claims court, or stopping future work.',
      },
      {
        heading: 'When to Use a Collection Agency',
        body: 'For amounts worth pursuing (typically $500+), a collection agency recovers the debt in exchange for a percentage (typically 25-50% of the amount collected). A "demand letter" from an attorney is cheaper and often more effective for commercial clients — many will pay rather than face legal involvement.',
      },
      {
        heading: 'Small Claims Court',
        body: 'Small claims court is designed for ordinary people without lawyers. Limits vary by jurisdiction (typically $2,500-$25,000 in the US). For invoices within this range, filing a small claims case is often the most cost-effective option — filing fees are low ($30-100) and the client usually pays rather than appear in court.',
      },
    ],
    faqs: [
      {
        question: 'When should I follow up on a late invoice?',
        answer:
          'Send a polite reminder on the first day after the due date. Don\'t wait longer — the longer you wait, the older the debt and the harder it is to collect.',
      },
      {
        question: 'Can I charge interest on a late invoice?',
        answer:
          'Yes, if you stated your late payment fee policy on the original invoice. A typical rate is 1.5-2% per month on the outstanding balance. Without prior notice of the policy, charging late fees may not be enforceable.',
      },
      {
        question: 'What if a client refuses to pay?',
        answer:
          'Document everything (all invoices, emails, contracts). Send a formal demand letter. If the amount is under your jurisdiction\'s small claims limit, file in small claims court. For larger amounts, consider a collections attorney.',
      },
    ],
  },
  {
    slug: 'vat-invoice-requirements',
    title: 'VAT Invoice Requirements: Everything You Need to Know (2026)',
    metaTitle: 'VAT Invoice Requirements: What Must Be on a VAT Invoice',
    metaDescription:
      'Learn VAT invoice requirements for EU, UK, and international businesses. What fields are mandatory, when you need a VAT invoice, and how to create one free.',
    publishedAt: '2026-02-15',
    updatedAt: '2026-02-27',
    readingTime: '8 min read',
    category: 'Tax & Compliance',
    excerpt:
      'VAT invoices have specific legal requirements that differ from standard invoices. Getting them wrong can invalidate your client\'s VAT reclaim. Here\'s what every VAT invoice must include.',
    content: [
      {
        heading: 'What is a VAT Invoice?',
        body: 'A VAT invoice is a specific type of invoice required in countries with a Value Added Tax (VAT) system. It includes additional mandatory fields beyond a standard invoice, allowing your business clients to reclaim the VAT they\'ve paid on purchases. If you\'re VAT-registered and sell to VAT-registered businesses, you must issue a VAT invoice for every taxable supply.',
      },
      {
        heading: 'Mandatory Fields on a VAT Invoice (EU Standard)',
        body: 'A full VAT invoice in the EU must include all of the following:',
        list: [
          'A sequential invoice number from a continuous series',
          'The date of invoice',
          'The date of the supply (if different from invoice date)',
          'Your business name, address, and VAT registration number',
          'Your customer\'s business name and address',
          'Your customer\'s VAT number (for B2B transactions)',
          'A description of the goods or services supplied',
          'Quantity and unit price (net of VAT)',
          'Total amount net of VAT',
          'VAT rate applied (e.g., 20% or 23%)',
          'Total VAT amount charged in the local currency',
          'Total amount including VAT',
        ],
      },
      {
        heading: 'Simplified VAT Invoices',
        body: 'The EU allows a simplified VAT invoice for supplies under certain thresholds (varies by member state, typically €150-€400). A simplified invoice doesn\'t need to include the customer\'s VAT number or a breakdown of net/VAT, but must still show the invoice number, date, your VAT number, description of supply, and VAT rate.',
      },
      {
        heading: 'UK VAT Invoice Requirements Post-Brexit',
        body: 'UK VAT invoice requirements are similar to EU requirements. A full UK VAT invoice must include: your VAT registration number, supply date, invoice number, description of goods/services, amount net of VAT, VAT rate (currently standard 20%, reduced 5%, or zero 0%), VAT amount, and total including VAT.',
      },
      {
        heading: 'When You Must Issue a VAT Invoice',
        body: 'If you are VAT-registered, you must issue a VAT-compliant invoice within 30 days of the supply date (EU standard) for all taxable B2B supplies. For B2C supplies (selling to individual consumers), a simplified invoice is usually sufficient. For intra-EU supplies (zero-rated), you still need a VAT invoice but show 0% VAT.',
      },
      {
        heading: 'Reverse Charge VAT on Invoices',
        body: 'When selling services to VAT-registered businesses in other EU countries, the "reverse charge" mechanism applies. You issue the invoice with 0% VAT and include the note "VAT reverse charge" or the relevant regulatory reference. The customer accounts for the VAT in their own country. Make sure to include the customer\'s VAT number on these invoices.',
      },
      {
        heading: 'How to Create a VAT-Compliant Invoice',
        body: 'Magic Invoice supports VAT calculation — add your VAT rate as a percentage on any invoice. The tool automatically calculates the net amount, VAT amount, and total. You\'ll need to add your VAT number and customer\'s VAT number in the appropriate fields. Export as PDF — the result is VAT-compliant for most standard B2B supplies.',
      },
    ],
    faqs: [
      {
        question: 'When do I need to charge VAT on an invoice?',
        answer:
          'You must charge VAT once you are VAT-registered in your country. Registration thresholds vary: £90,000 in the UK, €85,000 in France, €50,000 in Germany. Check your local threshold and register before exceeding it.',
      },
      {
        question: 'What happens if my VAT invoice is incorrect?',
        answer:
          'An incorrect VAT invoice can invalidate your customer\'s right to reclaim input VAT, leading to disputes and potential tax authority issues. Issue a credit note to cancel the incorrect invoice and reissue a corrected invoice with the next available number.',
      },
      {
        question: 'Does my VAT invoice need to be in a specific language?',
        answer:
          'Generally, VAT invoices must be in the official language of the country where the supply takes place. For cross-border EU supplies, the invoice can typically be in any language, but having a translation available is advisable.',
      },
    ],
  },
  {
    slug: 'free-invoice-templates-small-business',
    title: 'Free Invoice Templates for Small Business: 10 Types You Need',
    metaTitle: 'Free Invoice Templates for Small Business (2026) - Download PDF',
    metaDescription:
      'Download free invoice templates for small businesses. Templates for service invoices, product invoices, freelance invoices, and more. Create and export PDF instantly.',
    publishedAt: '2026-02-20',
    updatedAt: '2026-02-27',
    readingTime: '6 min read',
    category: 'Templates',
    excerpt:
      'The right invoice template saves time, looks professional, and helps you get paid faster. Here are 10 types of invoice templates every small business should know.',
    content: [
      {
        heading: 'Why Small Businesses Need Professional Invoice Templates',
        body: 'A professional invoice does three things: it requests payment clearly, it makes your business look credible, and it provides a legal record of the transaction. Using a well-designed template ensures you never forget to include required information and that every invoice reinforces your brand.',
      },
      {
        heading: '1. Service Invoice Template',
        body: 'The most common template for freelancers and service businesses. Lists services provided, hours or project scope, rate, and total. Use for any business that sells time, expertise, or services.',
      },
      {
        heading: '2. Product Invoice Template',
        body: 'Used for physical or digital goods. Includes product names, SKUs, quantities, unit prices, and totals. Often includes shipping information and terms of sale.',
      },
      {
        heading: '3. Hourly Invoice Template',
        body: 'For billing by the hour. Each line item shows: task description, date, number of hours, hourly rate, and line total. Essential for consultants, lawyers, developers, and anyone billing time.',
      },
      {
        heading: '4. Proforma Invoice Template',
        body: 'A preliminary invoice issued before delivering goods or services. Used for custom orders, international shipments, or to get client approval before work begins.',
      },
      {
        heading: '5. Recurring Invoice Template',
        body: 'For monthly or weekly recurring services. Includes the service period (e.g., "March 2026 Monthly Retainer"), the recurring fee, and any variable charges that month.',
      },
      {
        heading: '6. Progress Invoice Template',
        body: 'For multi-phase projects, billed in stages. Shows the total project value, percentage completed to date, amount previously billed, and amount due this invoice.',
      },
      {
        heading: '7. Commercial Invoice Template',
        body: 'Required for international shipments. Includes detailed goods descriptions, harmonized tariff codes (HS codes), country of origin, and declared value for customs purposes.',
      },
      {
        heading: '8. Credit Note Template',
        body: 'Issued to cancel or reduce a previous invoice. References the original invoice number and shows a negative amount. Essential for correcting billing errors or processing returns.',
      },
      {
        heading: '9. Deposit Invoice Template',
        body: 'For collecting upfront payment before work begins. Shows the total project value, the deposit percentage, and the deposit amount due. The final invoice references the deposit paid.',
      },
      {
        heading: '10. VAT Invoice Template',
        body: 'For VAT-registered businesses. Includes your VAT number, the customer\'s VAT number, net amounts, VAT rate, VAT amount, and gross total. Required for B2B invoicing in VAT jurisdictions.',
      },
      {
        heading: 'How to Create Any Invoice Template for Free',
        body: 'Magic Invoice handles all these template types. It\'s a single flexible tool that adapts to any invoice format. Add line items, set quantities and rates, apply taxes, add notes — and export a professional PDF instantly. No account, no subscription, completely free.',
      },
    ],
    faqs: [
      {
        question: 'What is the best free invoice template for a small business?',
        answer:
          'Magic Invoice is the best free invoice tool for small businesses — it\'s flexible enough to handle any template type, exports professional PDFs, and requires no account. Just fill in your details and download.',
      },
      {
        question: 'Can I customize a free invoice template?',
        answer:
          'Yes — Magic Invoice lets you add your logo, customize line items, add notes, set any currency, and adjust the layout. The result is a fully branded professional invoice.',
      },
      {
        question: 'Are free invoice templates professional enough for clients?',
        answer:
          'Magic Invoice produces professional-grade invoices using a premium design system. Clients regularly compliment the quality. "Free" doesn\'t mean low quality — it just means you\'re not paying for software that doesn\'t add value.',
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
