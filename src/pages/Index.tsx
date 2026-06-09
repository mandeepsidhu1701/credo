import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { PostCard } from "@/components/ui/post-card";
import heroBg from "@/assets/hero-bg.jpg";
import infoFlyer from "@/assets/info-flyer.jpeg";
import {
  Users,
  Shield,
  Clock,
  Award,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react";
import { services } from "@/data/services";
import { featuredTestimonials } from "@/data/testimonials";
import { latestPosts } from "@/data/posts";
import { pages } from "@/data/pages";
import { siteSettings } from "@/data/siteSettings";

const features = [
  {
    title: "Licensed Adviser",
    description: "IAA Licensed #201300026 with years of expertise",
    icon: Award,
  },
  {
    title: "Quick Turnaround",
    description: "Efficient processing with attention to detail",
    icon: Clock,
  },
  {
    title: "High Success Rate",
    description: "Proven track record of successful applications",
    icon: CheckCircle,
  },
  {
    title: "Friendly Service",
    description: "Approachable and supportive throughout your journey",
    icon: Users,
  },
];

export default function Index() {
  return (
    <Layout>
      <Helmet>
        <title>{pages.home.title}</title>
        <meta name="description" content={pages.home.description} />
        <link rel="canonical" href={`${siteSettings.siteUrl}/`} />
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBg}
            alt="Immigration services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
        </div>

        {/* Content */}
        <div className="container-custom relative py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 animate-fade-in-down">
              <Shield className="h-4 w-4" />
              <span>Licensed Immigration Adviser #201300026</span>
             
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-medium mb-6 animate-fade-in-down">
              <Shield className="h-4 w-4" />
              <span>Migration Agents Registration Number #2318124</span>
             
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Your Journey to{" "}
              <span className="text-gradient-gold">Australia and New Zealand</span>{" "}
              Starts Here
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
              Expert immigration advice and visa services. We guide you through
              every step of your migration journey with care and professionalism.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
              <Link to="/contact-us">
                <Button className="btn-gold text-lg px-8 py-6">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline-light"
                  className="text-lg px-8 py-6"
                >
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <span className="text-primary-foreground/80 text-sm">
                  98% Success Rate
                </span>
              </div>
              <div className="text-primary-foreground/80 text-sm">
                500+ Successful Applications
              </div>
              <div className="text-primary-foreground/80 text-sm">
                10+ Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/*Info flyer*/}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <img
            src={infoFlyer}
            alt="Australia Working Holiday Visa 2026 - Ballot Draw Now Open"
            className="w-full rounded-2xl shadow-xl"
          />
        <div className="text-center mt-4">
      
        <Link to="/contact-us">
          Register Interest Now →
        </Link>          
    </div>
  </div>
</section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              >
                <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Services"
            title="Expert Immigration Solutions"
            description="We provide comprehensive visa and immigration services to help you achieve your New Zealand migration goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="px-8">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                Your Trusted Partner in{" "}
                <span className="text-accent">Immigration</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Credo Migration Services Ltd is a licensed immigration advisory
                firm based in New Zealand. Led by Manisha Verma, a licensed
                immigration adviser with the Immigration Advisers Authority (IAA
                #201300026), we have been helping individuals and families
                achieve their New Zealand migration dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to study, work, or settle permanently in
                New Zealand, we provide personalized guidance and support
                throughout your immigration journey. Our expertise spans all
                visa categories including skilled migrant, work, student,
                family, and investor visas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about-us">
                  <Button className="btn-gold">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/contact-us">
                  <Button variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-hero p-8 flex flex-col justify-center">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      500+
                    </div>
                    <div className="text-primary-foreground/80 text-sm">
                      Successful Visas
                    </div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      98%
                    </div>
                    <div className="text-primary-foreground/80 text-sm">
                      Success Rate
                    </div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      10+
                    </div>
                    <div className="text-primary-foreground/80 text-sm">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-xl p-6 text-center">
                    <div className="text-4xl font-serif font-bold text-accent mb-2">
                      IAA
                    </div>
                    <div className="text-primary-foreground/80 text-sm">
                      Licensed
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 gradient-gold rounded-full opacity-20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <SectionHeader
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Read about the experiences of our satisfied clients who have successfully achieved their New Zealand immigration goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                location={testimonial.location}
                rating={testimonial.rating}
                testimonial={testimonial.text}
                className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/testimonials">
              <Button variant="outline" className="px-8">
                View All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            subtitle="Latest News"
            title="Immigration Updates & Guides"
            description="Stay informed with the latest immigration news, policy updates, and helpful guides."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post, index) => (
              <PostCard
                key={post.slug}
                {...post}
                className={`animate-fade-in-up animation-delay-${(index + 1) * 100}`}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/posts">
              <Button variant="outline" className="px-8">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/50 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Ready to Start Your{" "}
              <span className="text-accent">Immigration Journey?</span>
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Contact us today for a free consultation. Our licensed immigration
              adviser will guide you through your options and help you achieve
              your New Zealand dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <Button className="btn-gold text-lg px-8 py-6">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+64273353475">
                <Button
                  variant="outline-light"
                  className="text-lg px-8 py-6"
                >
                  Call +64 273 353 475
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
