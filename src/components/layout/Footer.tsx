import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Clock, Award } from "lucide-react";

const quickLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Latest News", href: "/posts" },
  { label: "Contact Us", href: "/contact-us" },
];

const services = [
  { label: "Skilled Migrant Category", href: "/services#skilled-migrant" },
  { label: "Work Visas", href: "/services#work-visa" },
  { label: "Student Visas", href: "/services#student-visa" },
  { label: "Family Visas", href: "/services#family-visa" },
  { label: "Investor Category", href: "/services#investor" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <span className="text-xl font-serif font-bold text-accent">C</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-primary-foreground leading-tight">
                  Credo Migration
                </span>
                <span className="text-xs text-primary-foreground/70 tracking-wide">
                  Services Ltd
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for New Zealand immigration. Licensed by the Immigration Advisers Authority, 
              we provide expert guidance for all visa categories.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Award className="h-5 w-5 text-accent" />
              <span>IAA License #201300026</span>
            </div>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-primary-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-primary-foreground">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-primary-foreground">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+64273353475"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="h-5 w-5 shrink-0 mt-0.5" />
                  <div>
                    <div>+64 273 353 475 (NZ)</div>
                    <div>+61 491 710 728 (AU)</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@credomigration.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="h-5 w-5 shrink-0" />
                  <span>info@credomigration.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>Auckland, New Zealand</span>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <Clock className="h-5 w-5 shrink-0 mt-0.5" />
                <div>
                  <div>Mon - Fri: 9:00 AM - 5:00 PM</div>
                  <div>Sat: By Appointment</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Credo Migration Services Ltd. All rights reserved.</p>
          <p className="text-xs">
            Built by{" "}
            <a
              href="https://ararise.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Ararise Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}