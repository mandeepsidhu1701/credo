import {
  Briefcase,
  Clock,
  GraduationCap,
  Users,
  TrendingUp,
  Plane,
  type LucideIcon,
} from "lucide-react";

export interface ServiceSummary {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
}

export const services: ServiceSummary[] = [
  {
    id: "work-visa",
    title: "Work Visas & AEWV",
    description:
      "Helping employees and employers navigate Accredited Employer Work Visa requirements and work visa applications.",
    icon: Clock,
    href: "/services#work-visa",
  },
  {
    id: "skilled-migrant",
    title: "Residency Pathways",
    description:
      "Expert guidance for Skilled Migrant Category, Residence from Work, and other residency options.",
    icon: Briefcase,
    href: "/services#skilled-migrant",
  },
  {
    id: "student-visa",
    title: "Student Visas",
    description:
      "Support for international students from application through settlement in New Zealand and Australia.",
    icon: GraduationCap,
    href: "/services#student-visa",
  },
  {
    id: "family-visa",
    title: "Partnership & Family Visas",
    description:
      "Bringing families together through partnership, dependent child, and family-sponsored visa pathways.",
    icon: Users,
    href: "/services#family-visa",
  },
  {
    id: "employer-accreditation",
    title: "Employer Accreditation & Job Checks",
    description:
      "Helping New Zealand businesses become accredited employers and complete Job Check applications.",
    icon: TrendingUp,
    href: "/services#employer-accreditation",
  },
  {
    id: "appeals",
    title: "Complex Immigration Cases",
    description:
      "Section 61 requests, IPT appeals, declined applications, and difficult immigration situations.",
    icon: Plane,
    href: "/services#appeals",
  },
];

export const consultationServiceOptions = [
  "Skilled Migrant Category",
  "Employer Accreditation & Job Checks",
  "Work Visa (AEWV)",
  "Student Visa",
  "Family/Partner Visa",
  "Parent Category Visa",
  "Entrepreneur Work Visa",
  "Active Investor Plus Visa",
  "Visitor Visa",
  "Section 61 Request / Appeal",
  "Other / General Enquiry",
];