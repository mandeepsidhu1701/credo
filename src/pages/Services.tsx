import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { pages } from "@/data/pages";
import { siteSettings } from "@/data/siteSettings";
import {
  Briefcase,
  GraduationCap,
  Users,
  TrendingUp,
  Plane,
  FileText,
  Scale,
  Home,
  Clock,
  CheckCircle,
  ArrowRight,
  Building2,
  FileCheck,
} from "lucide-react";

const serviceCategories = [
  {
    id: "skilled-migrant",
    icon: Briefcase,
    title: "Skilled Migrant Category",
    subtitle: "Permanent Residence",
    description:
      "The Skilled Migrant Category (SMC) is a points-based residence visa for skilled workers. We help you navigate the Expression of Interest (EOI) process and guide you through to residence approval.",
    features: [
      "Points assessment and optimization",
      "Expression of Interest (EOI) submission",
      "Supporting documentation preparation",
      "Job search support and employer liaison",
      "Residence application submission",
    ],
  },
  {
  id: "employer-accreditation",
  icon: Building2,
  title: "Employer Accreditation",
  subtitle: "For New Zealand Businesses",
  description:
    "Employer Accreditation is required for New Zealand businesses wishing to hire migrant workers under the Accredited Employer Work Visa (AEWV) scheme. We assist employers throughout the accreditation process, ensuring compliance with Immigration New Zealand requirements.",
  features: [
    "Accreditation eligibility assessment",
    "Business documentation review",
    "Accreditation application preparation",
    "Immigration compliance guidance",
    "Support with renewals and ongoing obligations",
  ],
  },
  {
  id: "job-check-applications",
  icon: FileCheck,
  title: "Job Check Applications",
  subtitle: "Hiring Migrant Workers",
  description:
    "A Job Check is required before an accredited employer can offer certain roles to migrant workers under the AEWV pathway. We guide employers through the process, ensuring role requirements meet Immigration New Zealand standards.",
  features: [
    "Job Check eligibility assessment",
    "Labour market and advertising guidance",
    "Role description review",
    "Job Check application preparation",
    "Support through Immigration NZ requests",
  ],
  },
  {
    id: "work-visa",
    icon: Clock,
    title: "Work Visas",
    subtitle: "Temporary & Long-term Employment",
    description:
      "We assist with various work visa categories including the Accredited Employer Work Visa (AEWV), Essential Skills, and other employment-based visas to help you work legally in New Zealand.",
    features: [
      "Accredited Employer Work Visa (AEWV)",
      "Essential Skills Work Visa",
      "Post-Study Work Visa",
      "Talent (Accredited Employer) Visa",
      "Working Holiday Visa guidance",
    ],
  },
  {
    id: "student-visa",
    icon: GraduationCap,
    title: "Student Visas",
    subtitle: "Study in New Zealand",
    description:
      "Complete support for international students from visa application to settling in. We assist with visa processing, accommodation, institution selection, bank accounts, and IRD number applications.",
    features: [
      "Student visa application",
      "Institution selection guidance",
      "Accommodation arrangement",
      "Bank account setup assistance",
      "IRD number application support",
      "Post-study work visa pathway",
    ],
  },
  {
    id: "family-visa",
    icon: Users,
    title: "Family Category",
    subtitle: "Reunite Your Family",
    description:
      "Bring your loved ones to New Zealand with our family visa services. We handle partnership visas, parent category, dependent children, and other family-based immigration pathways.",
    features: [
      "Partner/Spouse Visa",
      "Parent Category Visa",
      "Dependent Child Visa",
      "Sibling and Adult Child Visa",
      "Family relationship evidence preparation",
    ],
  },
  {
    id: "investor",
    icon: TrendingUp,
    title: "Investor & Entrepreneur",
    subtitle: "Business Migration",
    description:
      "For those looking to invest or establish business in New Zealand, we provide guidance on investor and entrepreneur visa categories with comprehensive business migration support.",
    features: [
      "Investor 1 Category",
      "Investor 2 Category",
      "Entrepreneur Work Visa",
      "Entrepreneur Residence Visa",
      "Business plan development support",
    ],
  },
  {
    id: "visitor-visa",
    icon: Plane,
    title: "Visitor Visas",
    subtitle: "Short-term Entry",
    description:
      "Whether you're visiting for tourism, business, or to see family, we help with visitor visa applications including extensions and specialized visitor categories.",
    features: [
      "Tourist Visitor Visa",
      "Business Visitor Visa",
      "Family Visit Visa",
      "Visa extensions",
      "Multi-entry visa applications",
    ],
  },
  {
    id: "ltbv",
    icon: Home,
    title: "Long Term Business Visa",
    subtitle: "LTBV Category",
    description:
      "The Long Term Business Visa allows you to establish and operate a business in New Zealand. We guide you through the application process and business planning requirements.",
    features: [
      "Business plan preparation",
      "LTBV application submission",
      "Compliance monitoring",
      "Transition to residence pathway",
    ],
  },
  {
    id: "appeals",
    icon: Scale,
    title: "Appeals & Section 61",
    subtitle: "Special Requests",
    description:
      "If your visa has been declined, we can help. We specialize in Section 61 requests and Immigration and Protection Tribunal (IPT) appeals to give your case another chance.",
    features: [
      "Section 61 special direction requests",
      "Immigration and Protection Tribunal appeals",
      "Reconsideration requests",
      "Humanitarian appeals",
      "Ministerial intervention requests",
    ],
  },
];

export default function Services() {
  return (
    <Layout>
      <Helmet>
        <title>{pages.services.title}</title>
        <meta name="description" content={pages.services.description} />
        <link rel="canonical" href={`${siteSettings.siteUrl}/services`} />
      </Helmet>
      <PageHero
        subtitle="Our Services"
        title="Immigration Solutions Tailored to You"
        description="Comprehensive visa and immigration services covering all pathways to New Zealand."
      />

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {serviceCategories.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center">
                      <service.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <span className="text-accent text-sm font-medium">
                        {service.subtitle}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact-us">
                    <Button className="btn-gold">
                      Enquire About This Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>

                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  } hidden lg:block`}
                >
                  <div className="aspect-square rounded-2xl gradient-hero p-8 flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-accent/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-muted-foreground text-lg">
              A simple, transparent process to guide you through your immigration
              journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "We discuss your situation, goals, and assess the best visa pathway for you.",
              },
              {
                step: "02",
                title: "Assessment",
                description:
                  "Detailed evaluation of your eligibility and documentation requirements.",
              },
              {
                step: "03",
                title: "Preparation",
                description:
                  "We prepare and compile your application with all supporting evidence.",
              },
              {
                step: "04",
                title: "Submission",
                description:
                  "Application lodgement and ongoing communication with Immigration NZ.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className={`relative card-elevated p-6 text-center animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="text-5xl font-serif font-bold text-accent/20 mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Not Sure Which Visa Is Right for You?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Book a consultation and we'll help you identify the best pathway
              based on your circumstances.
            </p>
            <Link to="/contact-us">
              <Button className="btn-gold text-lg px-8 py-6">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
