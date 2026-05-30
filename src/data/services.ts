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
    id: "skilled-migrant",
    title: "Skilled Migrant Category",
    description:
      "Permanent residence pathway for skilled workers with qualifications and work experience in demand in New Zealand.",
    icon: Briefcase,
    href: "/services#skilled-migrant",
  },
  {
    id: "work-visa",
    title: "Work Visas",
    description:
      "Essential Skills, AEWV, and other work visa categories for temporary and long-term employment in New Zealand.",
    icon: Clock,
    href: "/services#work-visa",
  },
  {
    id: "student-visa",
    title: "Student Visas",
    description:
      "Complete support for international students including visa processing, accommodation, and settling in New Zealand.",
    icon: GraduationCap,
    href: "/services#student-visa",
  },
  {
    id: "family-visa",
    title: "Family Category",
    description:
      "Partner visas, parent category, and dependent visas to reunite your family in New Zealand.",
    icon: Users,
    href: "/services#family-visa",
  },
  {
    id: "investor",
    title: "Investor & Entrepreneur",
    description:
      "Business migration pathways for investors and entrepreneurs looking to establish or grow business in NZ.",
    icon: TrendingUp,
    href: "/services#investor",
  },
  {
    id: "visitor-visa",
    title: "Visitor Visas",
    description:
      "Tourist, business visitor, and other temporary entry visas for short-term stays in New Zealand.",
    icon: Plane,
    href: "/services#visitor-visa",
  },
];

export const consultationServiceOptions = [
  "Skilled Migrant Category",
  "Work Visa (AEWV/Essential Skills)",
  "Student Visa",
  "Family/Partner Visa",
  "Parent Category Visa",
  "Investor/Entrepreneur Visa",
  "Visitor Visa",
  "Section 61 Request / Appeal",
  "Other / General Enquiry",
];