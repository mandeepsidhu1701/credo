import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { pages } from "@/data/pages";
import { siteSettings } from "@/data/siteSettings";

export default function Testimonials() {
  const sorted = [...testimonials].sort(
    (a, b) => Number(b.isFeatured) - Number(a.isFeatured)
  );
  return (
    <Layout>
      <Helmet>
        <title>{pages.testimonials.title}</title>
        <meta name="description" content={pages.testimonials.description} />
        <link rel="canonical" href={`${siteSettings.siteUrl}/testimonials`} />
      </Helmet>
      <PageHero
        subtitle="Testimonials"
        title="What Our Clients Say"
        description="Read the experiences of hundreds of satisfied clients who have successfully achieved their New Zealand immigration goals with our help."
      />

      {/* Stats Section */}
      <section className="py-12 bg-muted/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                98%
              </div>
              <div className="text-muted-foreground">Recommend Us</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                500+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 text-accent fill-accent" />
                ))}
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">
                10+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                testimonial={testimonial.text}
                className={`animate-fade-in-up animation-delay-${((index % 6) + 1) * 100}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Join Our Success Stories
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let us help you achieve your New Zealand immigration dreams. Book a
              consultation today.
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
