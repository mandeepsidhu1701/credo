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

// export const posts: Post[] = [
//   {
//     id: "1",
//     title: "Understanding the Skilled Migrant Category 2025",
//     slug: "skilled-migrant-guide-2025",
//     excerpt:
//       "A comprehensive guide to the points-based skilled migrant visa pathway for permanent residence in New Zealand.",
//     category: "Immigration News",
//     publishedAt: "2024-12-15",
//     tags: ["Skilled Migrant", "Permanent Residence", "Points System"],
//     content: `
//       <h2>Introduction to Skilled Migrant Category</h2>
//       <p>The Skilled Migrant Category (SMC) is New Zealand's primary points-based residence visa pathway for skilled workers. It allows qualified individuals with skills in demand to live and work permanently in New Zealand.</p>
//       <h2>Eligibility Requirements</h2>
//       <ul>
//         <li>Be under 56 years of age</li>
//         <li>Have good health and character</li>
//         <li>Meet English language requirements</li>
//         <li>Have skilled employment or a job offer in New Zealand</li>
//         <li>Meet the points threshold (currently 6 points)</li>
//       </ul>
//       <h2>Points System</h2>
//       <ul>
//         <li>Skilled employment (current or job offer)</li>
//         <li>Work experience in your skilled occupation</li>
//         <li>Qualifications</li>
//         <li>Regional work (bonus points)</li>
//         <li>Partner's employment or qualifications</li>
//       </ul>
//       <h2>Application Process</h2>
//       <ol>
//         <li><strong>Expression of Interest (EOI):</strong> Submit your EOI to the points pool</li>
//         <li><strong>Selection:</strong> If selected, you'll be invited to apply for residence</li>
//         <li><strong>Residence Application:</strong> Submit your full application within 4 months</li>
//         <li><strong>Processing:</strong> Immigration New Zealand assesses your application</li>
//         <li><strong>Decision:</strong> If approved, you'll receive your residence visa</li>
//       </ol>
//       <p>Contact us today for a free consultation to discuss your Skilled Migrant Category application.</p>
//     `,
//   },
//   {
//     id: "2",
//     title: "New Zealand Work Visa Changes You Need to Know",
//     slug: "work-visa-changes-2024",
//     excerpt:
//       "Important updates to the Accredited Employer Work Visa (AEWV) and what it means for prospective migrants.",
//     category: "Policy Updates",
//     publishedAt: "2024-12-10",
//     tags: ["Work Visa", "AEWV", "Policy Changes"],
//     content: `
//       <h2>Overview of Recent Changes</h2>
//       <p>New Zealand's immigration policies continue to evolve, with significant changes to work visa categories affecting many prospective migrants.</p>
//       <h2>Accredited Employer Work Visa (AEWV)</h2>
//       <ul>
//         <li>Employers must be accredited before hiring migrants</li>
//         <li>Job Check required for each position</li>
//         <li>Workers can stay up to 5 years</li>
//         <li>Pathway to residence may be available</li>
//       </ul>
//       <h2>What This Means for You</h2>
//       <ul>
//         <li>You need an offer from an accredited employer</li>
//         <li>Processing may take longer due to multiple steps</li>
//         <li>It's important to understand your residence pathway options</li>
//       </ul>
//       <p>Contact our team to understand how these changes affect your situation and the best pathway forward.</p>
//     `,
//   },
//   {
//     id: "3",
//     title: "Tips for a Successful Visa Application",
//     slug: "visa-application-tips",
//     excerpt:
//       "Expert advice from our licensed immigration adviser on preparing your visa application.",
//     category: "Guides",
//     publishedAt: "2024-12-05",
//     tags: ["Tips", "Application", "Documents"],
//     content: `
//       <h2>Start Early</h2>
//       <p>Begin preparing your application well in advance. Gathering documents, obtaining translations, and getting police certificates takes time.</p>
//       <h2>Understand the Requirements</h2>
//       <ul>
//         <li>Eligibility criteria for your visa category</li>
//         <li>All required documents</li>
//         <li>Processing times and fees</li>
//         <li>Any health or character requirements</li>
//       </ul>
//       <h2>Document Everything</h2>
//       <ul>
//         <li>Clear, certified copies of all documents</li>
//         <li>Professional translations where required</li>
//         <li>Supporting letters and evidence</li>
//         <li>A detailed cover letter explaining your case</li>
//       </ul>
//       <h2>Be Honest and Complete</h2>
//       <p>Always provide truthful information. Omissions or misrepresentations can result in declined applications and future immigration consequences.</p>
//       <h2>Seek Professional Help</h2>
//       <p>A licensed immigration adviser can significantly improve your chances of success by ensuring your application is complete, well-presented, and addresses all requirements.</p>
//     `,
//   },
//   {
//     id: "4",
//     title: "Parent Category Visa: What You Need to Know",
//     slug: "parent-category-visa-guide",
//     excerpt:
//       "Complete guide to bringing your parents to New Zealand through the Parent Category visa including eligibility and sponsorship requirements.",
//     category: "Guides",
//     publishedAt: "2024-11-28",
//     tags: ["Parent Visa", "Family", "Sponsorship"],
//     content: `
//       <h2>Parent Category Overview</h2>
//       <p>The Parent Category visa allows New Zealand citizens and residents to sponsor their parents for residence in New Zealand. It is points based and requires both sponsor income and parent settlement evidence.</p>
//       <h2>Key Requirements</h2>
//       <ul>
//         <li>Eligible sponsor child living in New Zealand</li>
//         <li>Minimum sponsor income thresholds</li>
//         <li>Health and character requirements for parents</li>
//       </ul>
//       <p>Get in touch with Credo Migration for an assessment of your eligibility.</p>
//     `,
//   },
//   {
//     id: "5",
//     title: "Student Visa to Permanent Residence Pathway",
//     slug: "student-visa-to-residence",
//     excerpt:
//       "Discover the pathway from student visa to permanent residence in New Zealand. Learn about post-study work rights and transition options.",
//     category: "Guides",
//     publishedAt: "2024-11-20",
//     tags: ["Student Visa", "Residence", "Pathway"],
//     content: `
//       <h2>From Study to Residence</h2>
//       <p>Many students who complete eligible qualifications in New Zealand can transition to a Post-Study Work Visa and eventually qualify for residence under the Skilled Migrant Category.</p>
//       <h2>Steps in the Pathway</h2>
//       <ol>
//         <li>Complete a qualifying programme of study</li>
//         <li>Apply for a Post-Study Work Visa</li>
//         <li>Secure skilled employment</li>
//         <li>Submit a residence application under SMC</li>
//       </ol>
//       <p>Speak with our licensed immigration adviser to map out the best pathway for your situation.</p>
//     `,
//   },
//   {
//     id: "6",
//     title: "Partnership Visa Requirements Explained",
//     slug: "partnership-visa-requirements",
//     excerpt:
//       "Everything you need to know about partner visas in New Zealand including evidence requirements and application process.",
//     category: "Guides",
//     publishedAt: "2024-11-15",
//     tags: ["Partnership Visa", "Family"],
//     content: `
//       <h2>Partnership Visa Basics</h2>
//       <p>Partnership-based visas allow partners of New Zealand citizens or residents to live and work in New Zealand. The relationship must be genuine, stable and likely to endure.</p>
//       <h2>Evidence You Need</h2>
//       <ul>
//         <li>Joint financial arrangements</li>
//         <li>Cohabitation history</li>
//         <li>Communication records during separations</li>
//         <li>Statements from family and friends</li>
//       </ul>
//       <p>We help clients prepare strong partnership applications with the right evidence.</p>
//     `,
//   },
//   {
//     id: "7",
//     title: "Immigration New Zealand Processing Times Update",
//     slug: "inz-processing-times-update",
//     excerpt:
//       "Latest updates on visa processing times for various categories and tips on how to avoid delays in your application.",
//     category: "Immigration News",
//     publishedAt: "2024-11-10",
//     tags: ["Processing Times", "INZ"],
//     content: `
//       <h2>Current Processing Times</h2>
//       <p>Processing times vary significantly by visa category and applicant circumstances. Always check the latest indicative timeframes on the Immigration New Zealand website.</p>
//       <h2>How to Avoid Delays</h2>
//       <ul>
//         <li>Submit a complete application first time</li>
//         <li>Provide certified translations where required</li>
//         <li>Respond promptly to any requests for information</li>
//       </ul>
//     `,
//   },
//   {
//     id: "8",
//     title: "Essential Skills Visa vs AEWV: Key Differences",
//     slug: "essential-skills-vs-aewv",
//     excerpt:
//       "Understanding the transition from Essential Skills Work Visa to the new Accredited Employer Work Visa system.",
//     category: "Policy Updates",
//     publishedAt: "2024-11-05",
//     tags: ["AEWV", "Essential Skills", "Work Visa"],
//     content: `
//       <h2>Why the Change?</h2>
//       <p>The AEWV replaces the Essential Skills Work Visa with an employer-led, three-check model designed to better protect migrant workers and respond to labour market needs.</p>
//       <h2>Key Differences</h2>
//       <ul>
//         <li>Employer accreditation required</li>
//         <li>Job Check based on median wage and advertising</li>
//         <li>Single visa product covering most occupations</li>
//       </ul>
//     `,
//   },
//   {
//     id: "9",
//     title: "Section 61 Requests: When and How to Apply",
//     slug: "section-61-requests-guide",
//     excerpt:
//       "Learn about Section 61 special direction requests and when this option may be available if your visa has been declined.",
//     category: "Guides",
//     publishedAt: "2024-10-28",
//     tags: ["Section 61", "Appeals"],
//     content: `
//       <h2>What is a Section 61 Request?</h2>
//       <p>A Section 61 request asks Immigration New Zealand to grant a visa to a person who is unlawfully in New Zealand. It is a discretionary process with no right of appeal.</p>
//       <h2>When to Consider It</h2>
//       <ul>
//         <li>Your visa has expired and you remain in New Zealand</li>
//         <li>You have a genuine reason to remain</li>
//         <li>You can present a compelling case quickly</li>
//       </ul>
//       <p>Because Section 61 is discretionary and time-critical, professional advice is strongly recommended.</p>
//     `,
//   },
// ];
export const posts: Post[] = [
  {
    id: "1",
    title: "New Zealand Introduces Short-term Graduate Work Visa",
    slug: "new-zealand-short-term-graduate-work-visa-2026",
    excerpt:
      "Immigration New Zealand has announced a new Short-term Graduate Work Visa, giving eligible graduates 6 months of open work rights.",
    category: "Policy Updates",
    publishedAt: "2026-05-29",
    tags: ["New Zealand", "Graduate Visa", "Post Study Work Visa", "Student Visa"],
    content: `
      <h2>New Short-term Graduate Work Visa</h2>
      <p>Immigration New Zealand has announced a new Short-term Graduate Work Visa for eligible international graduates who have completed study in New Zealand but may not qualify for a Post Study Work Visa.</p>

      <h2>Key Details</h2>
      <ul>
        <li>The visa is expected to open from 16 November 2026.</li>
        <li>It provides 6 months of open work rights.</li>
        <li>Applicants must apply within 3 months of their New Zealand student visa expiring.</li>
        <li>The visa may help graduates look for work and transition to an Accredited Employer Work Visa where eligible.</li>
      </ul>

      <h2>Who May Benefit?</h2>
      <p>This update may be useful for students completing eligible Level 5 to Level 7 qualifications who are not otherwise eligible for a Post Study Work Visa.</p>

      <p>If you are planning your study-to-work pathway in New Zealand, professional advice can help you understand your options before your current visa expires.</p>
    `,
  },
  {
    id: "2",
    title: "Post Study Work Visa Eligibility Extended for Graduate Diplomas",
    slug: "post-study-work-visa-eligibility-extended-graduate-diplomas-2026",
    excerpt:
      "From November 2026, some graduate diploma holders may become eligible for a Post Study Work Visa if they meet specific conditions.",
    category: "Student Visas",
    publishedAt: "2026-05-29",
    tags: ["Post Study Work Visa", "Graduate Diploma", "International Students", "New Zealand"],
    content: `
      <h2>Post Study Work Visa Update</h2>
      <p>Immigration New Zealand has confirmed changes to Post Study Work Visa eligibility for some graduate diploma holders.</p>

      <h2>What Is Changing?</h2>
      <ul>
        <li>From 16 November 2026, eligibility will extend to certain NZQCF Level 7 graduate diploma holders.</li>
        <li>Applicants must have studied full-time in New Zealand for the full duration of the qualification.</li>
        <li>Applicants must also hold a bachelor's degree completed in New Zealand or overseas.</li>
        <li>The Post Study Work Visa may be granted for the duration of study, up to a maximum of 1 year.</li>
      </ul>

      <h2>Important Note</h2>
      <p>People who have already held a Post Study Work Visa are generally not eligible for a second Post Study Work Visa.</p>

      <p>Students should review their study plans carefully before changing programmes or education providers.</p>
    `,
  },
  {
    id: "3",
    title: "AEWV English Requirements Extended to Skill Level 3 Roles",
    slug: "aewv-english-requirements-skill-level-3-roles-2026",
    excerpt:
      "From 1 June 2026, minimum English language requirements apply to AEWV applicants in ANZSCO or NOL skill level 3 roles.",
    category: "Work Visas",
    publishedAt: "2026-05-25",
    tags: ["AEWV", "Work Visa", "English Requirements", "New Zealand"],
    content: `
      <h2>AEWV English Requirement Update</h2>
      <p>From 1 June 2026, Accredited Employer Work Visa applicants in ANZSCO or National Occupation List skill level 3 roles must meet minimum English language requirements.</p>

      <h2>What This Means for Applicants</h2>
      <ul>
        <li>Skill level 3 AEWV applicants may need to show English ability.</li>
        <li>English ability may be shown through citizenship, study, work history, or an approved English test.</li>
        <li>The requirement already applied to some skill level 4 and 5 roles.</li>
      </ul>

      <h2>Exceptions</h2>
      <p>Immigration New Zealand has indicated that the requirement does not apply to Job Change applications and does not apply to Global Workforce Seasonal Visa or Peak Seasonal Visa AEWV applications.</p>

      <p>Applicants and employers should check the skill level of the role before preparing an AEWV application.</p>
    `,
  },
  {
    id: "4",
    title: "Further Skilled Migrant Category Changes Coming in August 2026",
    slug: "skilled-migrant-category-changes-august-2026",
    excerpt:
      "Immigration New Zealand has confirmed further Skilled Migrant Category changes taking effect from 24 August 2026.",
    category: "Residence",
    publishedAt: "2026-03-05",
    tags: ["Skilled Migrant Category", "Residence", "SMC", "New Zealand"],
    content: `
      <h2>Skilled Migrant Category Update</h2>
      <p>Immigration New Zealand has announced further details on Skilled Migrant Category changes that are expected to take effect from 24 August 2026.</p>

      <h2>Key Changes</h2>
      <ul>
        <li>Confirmation of key occupation lists, including Trades and Technician pathway lists.</li>
        <li>Simplified median wage settings across Skilled Migrant Category pathways.</li>
        <li>Clarified qualification requirements for claiming points.</li>
        <li>Extended English language test validity for some applicants.</li>
        <li>Recognition of a new occupational registration pathway for accountants.</li>
      </ul>

      <h2>Why This Matters</h2>
      <p>The Skilled Migrant Category remains one of New Zealand's key residence pathways for skilled workers. Applicants should review how the changes may affect their points, occupation pathway, and evidence requirements.</p>

      <p>If you are planning a residence application, it is important to assess your eligibility under the latest settings before applying.</p>
    `,
  },
  {
    id: "5",
    title: "Family of Temporary Visa Holder Applications Move Online",
    slug: "family-temporary-visa-holder-applications-online-2026",
    excerpt:
      "From 1 June 2026, several family visa applications for temporary visa holders move to Immigration New Zealand’s enhanced Immigration Online system.",
    category: "Family Visas",
    publishedAt: "2026-03-31",
    tags: ["Family Visa", "Partner Visa", "Dependent Child Visa", "Immigration Online"],
    content: `
      <h2>Family Visa Application System Update</h2>
      <p>From 1 June 2026, family of temporary visa holder applications are moving to Immigration New Zealand's enhanced Immigration Online system.</p>

      <h2>Visa Types Included</h2>
      <ul>
        <li>Dependent Child Student Visa</li>
        <li>Partner of a Worker Work Visa</li>
        <li>Partner of Military Work Visa</li>
        <li>Partner of a Student Work Visa</li>
        <li>Partner of an NZ Scholarship Student Work Visa</li>
      </ul>

      <h2>What Applicants Should Do</h2>
      <p>Applicants should prepare documents carefully and follow the correct online application process. Any missing or inconsistent information may delay processing.</p>

      <p>Families applying during the transition period should check which online system applies to their situation before lodging an application.</p>
    `,
  },
  {
    id: "6",
    title: "Pacific and Parent Visa Income Thresholds Increased",
    slug: "pacific-parent-visa-income-thresholds-increase-2026",
    excerpt:
      "From 30 April 2026, income and sponsorship thresholds increased for several Pacific and parent visa categories.",
    category: "Family Visas",
    publishedAt: "2026-04-14",
    tags: ["Parent Visa", "Pacific Visa", "Sponsorship", "New Zealand"],
    content: `
      <h2>Income Threshold Changes</h2>
      <p>Immigration New Zealand has confirmed that from 30 April 2026, income and sponsorship thresholds increased for several Pacific and family visa categories.</p>

      <h2>Categories Affected</h2>
      <ul>
        <li>Pacific Access Category</li>
        <li>Samoan Quota</li>
        <li>Parent Category Resident Visa</li>
        <li>Parent Boost Visitor Visa</li>
      </ul>

      <h2>Why This Matters</h2>
      <p>Sponsors and applicants should check the latest income requirements before submitting an application. Meeting the correct financial threshold is an important part of family and parent visa eligibility.</p>

      <p>If you are planning to sponsor family members, it is important to confirm the updated requirements before lodging your application.</p>
    `,
  },
  {
    id: "7",
    title: "Australia Updates Training Visa Subclass 407 Requirements",
    slug: "australia-training-visa-subclass-407-requirements-2026",
    excerpt:
      "The Australian Department of Home Affairs has updated requirements for Training visa subclass 407 applications.",
    category: "Australia Visas",
    publishedAt: "2026-03-10",
    tags: ["Australia", "Training Visa", "Subclass 407", "Home Affairs"],
    content: `
      <h2>Training Visa Update</h2>
      <p>The Australian Department of Home Affairs has announced changes to Training visa subclass 407 application requirements.</p>

      <h2>What Applicants Should Know</h2>
      <ul>
        <li>Training visa applications must meet the updated lodgement requirements.</li>
        <li>Sponsor and nomination details are important parts of the process.</li>
        <li>Applications submitted incorrectly may not be valid.</li>
      </ul>

      <h2>Why This Matters</h2>
      <p>The Training visa is used by applicants undertaking workplace-based training or professional development in Australia. Sponsors and applicants should ensure the correct steps are followed before lodging.</p>

      <p>Professional guidance can help reduce avoidable errors in sponsor, nomination, and visa application stages.</p>
    `,
  },
  {
    id: "8",
    title: "Australia Work and Holiday Visa Ballot Opens for 2026–2027",
    slug: "australia-work-and-holiday-visa-ballot-2026-2027",
    excerpt:
      "Registrations for the China, India and Vietnam Work and Holiday subclass 462 visa ballot opened in June 2026.",
    category: "Australia Visas",
    publishedAt: "2026-06-04",
    tags: ["Australia", "Work and Holiday", "Subclass 462", "India"],
    content: `
      <h2>Work and Holiday Ballot Update</h2>
      <p>Australia has opened registrations for the Work and Holiday subclass 462 visa ballot for the 2026–2027 program year for China, India and Vietnam.</p>

      <h2>Key Dates</h2>
      <ul>
        <li>Registrations opened on 4 June 2026.</li>
        <li>Registrations close on 25 June 2026.</li>
        <li>The ballot applies to first Work and Holiday subclass 462 visa applicants from eligible countries.</li>
      </ul>

      <h2>Important for Indian Applicants</h2>
      <p>India is part of Australia's Work and Holiday visa ballot process. Eligible Indian passport holders may register for the opportunity to be selected to apply.</p>

      <p>Applicants should ensure they meet age, passport, education, and other eligibility requirements before registering.</p>
    `,
  },
  {
    id: "9",
    title: "Australia Encourages Complete Student Visa Applications for 2026",
    slug: "australia-student-visa-complete-application-2026",
    excerpt:
      "Students planning to study in Australia in 2026 are encouraged to lodge complete student visa applications as early as practical.",
    category: "Student Visas",
    publishedAt: "2025-11-13",
    tags: ["Australia", "Student Visa", "International Students", "Study in Australia"],
    content: `
      <h2>Student Visa Lodgement Reminder</h2>
      <p>The Australian Department of Home Affairs has reminded students planning to study in Australia in 2026 to lodge complete student visa applications as soon as practical.</p>

      <h2>Why Complete Applications Matter</h2>
      <ul>
        <li>Incomplete applications may delay processing.</li>
        <li>Applicants should provide required identity, financial, study, health and character documents.</li>
        <li>Students should allow enough time before their course start date.</li>
      </ul>

      <h2>Planning Ahead</h2>
      <p>International students should prepare early and ensure their application is consistent with their study plans, course enrolment, and Genuine Student requirements.</p>

      <p>If you are planning to study in Australia, early preparation can help reduce unnecessary delays.</p>
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