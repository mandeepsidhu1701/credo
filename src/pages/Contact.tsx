import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import OfficeMap from "@/components/ui/OfficeMap";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { consultationServiceOptions as services } from "@/data/services";
import { siteSettings } from "@/data/siteSettings";
import { pages } from "@/data/pages";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const name = formData.name.trim();
  const email = formData.email.trim();
  const phone = formData.phone.trim();
  const service = formData.service;
  const messageText = formData.message.trim();

  if (!name || !email || !service || !messageText) {
    toast.error("Please fill in all required fields.");
    return;
  }

  setIsSubmitting(true);

  try {
    const nameParts = name.split(" ");
    const firstName = nameParts[0] || name;
    const lastName = nameParts.slice(1).join(" ") || "Not provided";

    const res = await fetch(import.meta.env.VITE_CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phone: phone || "Not provided",
        country: "Not provided",
        destination: service,
        level: "Migration consultation",
        message: messageText,
        website: ""
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok || !data.ok) {
      throw new Error(data.error || `Submission failed (${res.status})`);
    }

    toast.success("Thank you! Your enquiry has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  } catch (err: any) {
    toast.error(
      err?.message ||
        "Sorry, we couldn't send your enquiry right now. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <Layout>
      <Helmet>
        <title>{pages.contact.title}</title>
        <meta name="description" content={pages.contact.description} />
        <link rel="canonical" href={`${siteSettings.siteUrl}/contact-us`} />
      </Helmet>
      <PageHero
        subtitle="Contact Us"
        title="Get in Touch"
        description="Ready to start your New Zealand immigration journey? Contact us for a free consultation."
      />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-elevated p-8">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                Request a Consultation
              </h2>
              {/* <p className="text-muted-foreground mb-4">
                Fill out the form below — it will open your email app pre-filled
                so you can send the enquiry to{" "}
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-accent hover:underline"
                >
                  {siteSettings.email}
                </a>
                .
              </p>
              <p className="text-xs text-muted-foreground mb-8 italic">
                Note: this is a static site. Backend/email submission setup is
                required before going live with direct form delivery.
              </p> */}

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+64 21 123 4567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested In *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) =>
                          setFormData({ ...formData, service: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please tell us about your visa situation, current location, and the type of advice you require. Our team will review your enquiry and arrange a suitable consultation time."
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full btn-gold">
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      {isSubmitting ? "Sending..." : "Submit Enquiry"}
                    </span>
                  </Button>
                </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+64273353475"
                          className="hover:text-accent transition-colors"
                        >
                          +64 273 353 475 (NZ)
                        </a>
                      </p>
                      <p className="text-muted-foreground">
                        <a
                          href="tel:+61491710728"
                          className="hover:text-accent transition-colors"
                        >
                          +61 491 710 728 (AU)
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:info@credomigration.com"
                          className="hover:text-accent transition-colors"
                        >
                          info@credomigration.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Location
                      </h3>
                      <p className="text-muted-foreground">
                        Auckland, New Zealand
                      </p>
                      <p className="text-muted-foreground">
                        Melbourne, Australia
                      </p> 
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Consultations
                      </h3>                     
                      <p className="text-sm text-muted-foreground mt-1">
                        By appointment only.

                        Please send your enquiry first.
                        Once we review your situation, we will arrange a suitable consultation time 
                        either online or face-to-face.
                      </p>
                      <h3 className="font-semibold text-foreground mb-1">
                        Consultation Hours
                      </h3>
                      {siteSettings.businessHours.map((line) => (
                        <p key={line} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg gradient-hero flex items-center justify-center shrink-0">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-muted-foreground">
                        <a
                          href={siteSettings.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-colors"
                        >
                          Chat with us on WhatsApp
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <OfficeMap />
    

              {/* Quick Contact CTA */}
              {/* <div className="card-elevated p-6 gradient-hero">
                <h3 className="font-serif font-semibold text-primary-foreground text-lg mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Call us directly for urgent enquiries.
                </p>
                <a href="tel:+64273353475">
                  <Button variant="outline" className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                    <Phone className="mr-2 h-4 w-4" />
                    Call +64 273 353 475
                  </Button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
