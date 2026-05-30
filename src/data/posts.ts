export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // HTML string
  category: string;
  tags: string[];
  publishedAt: string; // ISO date
  // TODO: move featured images into /public/posts/ when assets are available
  featuredImage?: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Understanding the Skilled Migrant Category 2025",
    slug: "skilled-migrant-guide-2025",
    excerpt:
      "A comprehensive guide to the points-based skilled migrant visa pathway for permanent residence in New Zealand.",
    category: "Immigration News",
    publishedAt: "2024-12-15",
    tags: ["Skilled Migrant", "Permanent Residence", "Points System"],
    content: `
      <h2>Introduction to Skilled Migrant Category</h2>
      <p>The Skilled Migrant Category (SMC) is New Zealand's primary points-based residence visa pathway for skilled workers. It allows qualified individuals with skills in demand to live and work permanently in New Zealand.</p>
      <h2>Eligibility Requirements</h2>
      <ul>
        <li>Be under 56 years of age</li>
        <li>Have good health and character</li>
        <li>Meet English language requirements</li>
        <li>Have skilled employment or a job offer in New Zealand</li>
        <li>Meet the points threshold (currently 6 points)</li>
      </ul>
      <h2>Points System</h2>
      <ul>
        <li>Skilled employment (current or job offer)</li>
        <li>Work experience in your skilled occupation</li>
        <li>Qualifications</li>
        <li>Regional work (bonus points)</li>
        <li>Partner's employment or qualifications</li>
      </ul>
      <h2>Application Process</h2>
      <ol>
        <li><strong>Expression of Interest (EOI):</strong> Submit your EOI to the points pool</li>
        <li><strong>Selection:</strong> If selected, you'll be invited to apply for residence</li>
        <li><strong>Residence Application:</strong> Submit your full application within 4 months</li>
        <li><strong>Processing:</strong> Immigration New Zealand assesses your application</li>
        <li><strong>Decision:</strong> If approved, you'll receive your residence visa</li>
      </ol>
      <p>Contact us today for a free consultation to discuss your Skilled Migrant Category application.</p>
    `,
  },
  {
    id: "2",
    title: "New Zealand Work Visa Changes You Need to Know",
    slug: "work-visa-changes-2024",
    excerpt:
      "Important updates to the Accredited Employer Work Visa (AEWV) and what it means for prospective migrants.",
    category: "Policy Updates",
    publishedAt: "2024-12-10",
    tags: ["Work Visa", "AEWV", "Policy Changes"],
    content: `
      <h2>Overview of Recent Changes</h2>
      <p>New Zealand's immigration policies continue to evolve, with significant changes to work visa categories affecting many prospective migrants.</p>
      <h2>Accredited Employer Work Visa (AEWV)</h2>
      <ul>
        <li>Employers must be accredited before hiring migrants</li>
        <li>Job Check required for each position</li>
        <li>Workers can stay up to 5 years</li>
        <li>Pathway to residence may be available</li>
      </ul>
      <h2>What This Means for You</h2>
      <ul>
        <li>You need an offer from an accredited employer</li>
        <li>Processing may take longer due to multiple steps</li>
        <li>It's important to understand your residence pathway options</li>
      </ul>
      <p>Contact our team to understand how these changes affect your situation and the best pathway forward.</p>
    `,
  },
  {
    id: "3",
    title: "Tips for a Successful Visa Application",
    slug: "visa-application-tips",
    excerpt:
      "Expert advice from our licensed immigration adviser on preparing your visa application.",
    category: "Guides",
    publishedAt: "2024-12-05",
    tags: ["Tips", "Application", "Documents"],
    content: `
      <h2>Start Early</h2>
      <p>Begin preparing your application well in advance. Gathering documents, obtaining translations, and getting police certificates takes time.</p>
      <h2>Understand the Requirements</h2>
      <ul>
        <li>Eligibility criteria for your visa category</li>
        <li>All required documents</li>
        <li>Processing times and fees</li>
        <li>Any health or character requirements</li>
      </ul>
      <h2>Document Everything</h2>
      <ul>
        <li>Clear, certified copies of all documents</li>
        <li>Professional translations where required</li>
        <li>Supporting letters and evidence</li>
        <li>A detailed cover letter explaining your case</li>
      </ul>
      <h2>Be Honest and Complete</h2>
      <p>Always provide truthful information. Omissions or misrepresentations can result in declined applications and future immigration consequences.</p>
      <h2>Seek Professional Help</h2>
      <p>A licensed immigration adviser can significantly improve your chances of success by ensuring your application is complete, well-presented, and addresses all requirements.</p>
    `,
  },
  {
    id: "4",
    title: "Parent Category Visa: What You Need to Know",
    slug: "parent-category-visa-guide",
    excerpt:
      "Complete guide to bringing your parents to New Zealand through the Parent Category visa including eligibility and sponsorship requirements.",
    category: "Guides",
    publishedAt: "2024-11-28",
    tags: ["Parent Visa", "Family", "Sponsorship"],
    content: `
      <h2>Parent Category Overview</h2>
      <p>The Parent Category visa allows New Zealand citizens and residents to sponsor their parents for residence in New Zealand. It is points based and requires both sponsor income and parent settlement evidence.</p>
      <h2>Key Requirements</h2>
      <ul>
        <li>Eligible sponsor child living in New Zealand</li>
        <li>Minimum sponsor income thresholds</li>
        <li>Health and character requirements for parents</li>
      </ul>
      <p>Get in touch with Credo Migration for an assessment of your eligibility.</p>
    `,
  },
  {
    id: "5",
    title: "Student Visa to Permanent Residence Pathway",
    slug: "student-visa-to-residence",
    excerpt:
      "Discover the pathway from student visa to permanent residence in New Zealand. Learn about post-study work rights and transition options.",
    category: "Guides",
    publishedAt: "2024-11-20",
    tags: ["Student Visa", "Residence", "Pathway"],
    content: `
      <h2>From Study to Residence</h2>
      <p>Many students who complete eligible qualifications in New Zealand can transition to a Post-Study Work Visa and eventually qualify for residence under the Skilled Migrant Category.</p>
      <h2>Steps in the Pathway</h2>
      <ol>
        <li>Complete a qualifying programme of study</li>
        <li>Apply for a Post-Study Work Visa</li>
        <li>Secure skilled employment</li>
        <li>Submit a residence application under SMC</li>
      </ol>
      <p>Speak with our licensed immigration adviser to map out the best pathway for your situation.</p>
    `,
  },
  {
    id: "6",
    title: "Partnership Visa Requirements Explained",
    slug: "partnership-visa-requirements",
    excerpt:
      "Everything you need to know about partner visas in New Zealand including evidence requirements and application process.",
    category: "Guides",
    publishedAt: "2024-11-15",
    tags: ["Partnership Visa", "Family"],
    content: `
      <h2>Partnership Visa Basics</h2>
      <p>Partnership-based visas allow partners of New Zealand citizens or residents to live and work in New Zealand. The relationship must be genuine, stable and likely to endure.</p>
      <h2>Evidence You Need</h2>
      <ul>
        <li>Joint financial arrangements</li>
        <li>Cohabitation history</li>
        <li>Communication records during separations</li>
        <li>Statements from family and friends</li>
      </ul>
      <p>We help clients prepare strong partnership applications with the right evidence.</p>
    `,
  },
  {
    id: "7",
    title: "Immigration New Zealand Processing Times Update",
    slug: "inz-processing-times-update",
    excerpt:
      "Latest updates on visa processing times for various categories and tips on how to avoid delays in your application.",
    category: "Immigration News",
    publishedAt: "2024-11-10",
    tags: ["Processing Times", "INZ"],
    content: `
      <h2>Current Processing Times</h2>
      <p>Processing times vary significantly by visa category and applicant circumstances. Always check the latest indicative timeframes on the Immigration New Zealand website.</p>
      <h2>How to Avoid Delays</h2>
      <ul>
        <li>Submit a complete application first time</li>
        <li>Provide certified translations where required</li>
        <li>Respond promptly to any requests for information</li>
      </ul>
    `,
  },
  {
    id: "8",
    title: "Essential Skills Visa vs AEWV: Key Differences",
    slug: "essential-skills-vs-aewv",
    excerpt:
      "Understanding the transition from Essential Skills Work Visa to the new Accredited Employer Work Visa system.",
    category: "Policy Updates",
    publishedAt: "2024-11-05",
    tags: ["AEWV", "Essential Skills", "Work Visa"],
    content: `
      <h2>Why the Change?</h2>
      <p>The AEWV replaces the Essential Skills Work Visa with an employer-led, three-check model designed to better protect migrant workers and respond to labour market needs.</p>
      <h2>Key Differences</h2>
      <ul>
        <li>Employer accreditation required</li>
        <li>Job Check based on median wage and advertising</li>
        <li>Single visa product covering most occupations</li>
      </ul>
    `,
  },
  {
    id: "9",
    title: "Section 61 Requests: When and How to Apply",
    slug: "section-61-requests-guide",
    excerpt:
      "Learn about Section 61 special direction requests and when this option may be available if your visa has been declined.",
    category: "Guides",
    publishedAt: "2024-10-28",
    tags: ["Section 61", "Appeals"],
    content: `
      <h2>What is a Section 61 Request?</h2>
      <p>A Section 61 request asks Immigration New Zealand to grant a visa to a person who is unlawfully in New Zealand. It is a discretionary process with no right of appeal.</p>
      <h2>When to Consider It</h2>
      <ul>
        <li>Your visa has expired and you remain in New Zealand</li>
        <li>You have a genuine reason to remain</li>
        <li>You can present a compelling case quickly</li>
      </ul>
      <p>Because Section 61 is discretionary and time-critical, professional advice is strongly recommended.</p>
    `,
  },
];

export const postCategories = [
  "All Categories",
  "Immigration News",
  "Policy Updates",
  "Guides",
];

export const latestPosts = posts.slice(0, 3);

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}