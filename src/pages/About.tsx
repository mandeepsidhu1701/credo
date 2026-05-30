import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { pages } from "@/data/pages";
import { siteSettings } from "@/data/siteSettings";
import {
  Award,
  Target,
  Heart,
  Shield,
  CheckCircle,
  ArrowRight,
  Users,
  Clock,
  Star,
} from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We maintain the highest ethical standards in all our dealings, providing honest and transparent advice.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "We strive for excellence in every application we handle, ensuring meticulous attention to detail.",
  },
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We understand the emotional journey of immigration and provide supportive, caring service.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description:
      "Your success is our priority. We tailor our approach to meet your unique circumstances.",
  },
];

const expertise = [
  "Skilled Migrant Category (SMC)",
  "Accredited Employer Work Visa (AEWV)",
  "Essential Skills Work Visa",
  "Student Visa & Post-Study Work",
  "Partnership & Family Visas",
  "Parent Category Visa",
  "Visitor Visa",
  "Long Term Business Visa (LTBV)",
  "Investor Category",
  "Entrepreneur Work Visa",
  "Section 61 Requests",
  "Immigration Appeals (IPT)",
];

export default function About() {
  return (
    <Layout>
      <Helmet>
        <title>{pages.about.title}</title>
        <meta name="description" content={pages.about.description} />
        <link rel="canonical" href={`${siteSettings.siteUrl}/about-us`} />
      </Helmet>
      <PageHero
        subtitle="About Us"
        title="Your Trusted Immigration Partner"
        description="Learn about our mission, values, and the expert team behind Credo Migration Services Ltd."
      />

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Helping Dreams Take Flight Since 2013
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Credo Migration Services Ltd was founded with a simple mission: to
                provide first-class immigration advisory services with a personal
                touch. Based in Auckland, New Zealand, we have been helping
                individuals and families navigate the complex immigration landscape
                for over a decade.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our founder, Manisha Verma, is a licensed immigration adviser with
                the Immigration Advisers Authority (IAA License #201300026). With
                extensive experience across all visa categories, Manisha leads our
                team with dedication and expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We understand that immigration is more than just paperwork – it's
                about building new lives, reuniting families, and pursuing dreams.
                That's why we take a holistic approach, supporting our clients
                every step of the way.
              </p>

              <div className="flex items-center gap-6 p-6 bg-muted rounded-xl">
                <div className="w-16 h-16 rounded-full gradient-hero flex items-center justify-center shrink-0">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    IAA Licensed #201300026
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Fully licensed by the Immigration Advisers Authority of New
                    Zealand
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                <div className="w-full h-full gradient-hero flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-4xl font-serif font-bold text-accent">
                        MV
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-2">
                      Manisha Verma
                    </h3>
                    <p className="text-primary-foreground/80 mb-4">
                      Licensed Immigration Adviser
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-accent fill-accent"
                        />
                      ))}
                    </div>
                    <p className="text-primary-foreground/70 text-sm">
                      10+ Years of Excellence
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 gradient-gold rounded-full opacity-30 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground text-lg">
              Our core values guide everything we do and how we serve our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className={`card-elevated p-6 text-center animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="w-14 h-14 mx-auto rounded-xl gradient-hero flex items-center justify-center mb-4">
                  <value.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Comprehensive Visa Services
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We specialize in all New Zealand visa categories and immigration
                pathways. Our expertise ensures you receive accurate advice and
                professional representation for your application.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-foreground text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="card-elevated p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      Quick & Efficient
                    </h3>
                    <p className="text-muted-foreground">
                      We understand the importance of time in immigration matters.
                      Our streamlined processes ensure quick turnaround without
                      compromising quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                    <Shield className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      Full Compliance
                    </h3>
                    <p className="text-muted-foreground">
                      As a licensed adviser, we adhere to strict professional
                      standards and the IAA Code of Conduct, ensuring your
                      application meets all requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-elevated p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">
                      Personalized Support
                    </h3>
                    <p className="text-muted-foreground">
                      We also support students with accommodation, institution
                      visits, bank account setup, and IRD number applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let's discuss your immigration goals and find the best pathway for
              you.
            </p>
            <Link to="/contact-us">
              <Button className="btn-gold text-lg px-8 py-6">
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
