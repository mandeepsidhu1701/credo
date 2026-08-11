import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "News", href: "/posts" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* Top bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+64273353475" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+64 273 353 475</span>
            </a>
              <a href="tel:+61491710728" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>+61 491 710 728 (AU)</span>
              </a>
            <a href="mailto:info@credomigration.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@credomigration.com</span>
            </a>
          </div>
          <a href="https://www.iaa.govt.nz/for-advisers/adviser-tools/licensing-toolkit/register-of-licensed-immigration-advisers/" 
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors link-underline" 
          target="_blank">
          <div className="flex items-center gap-2">
            <span className="text-primary-foreground/70">Licensed Immigration Adviser</span>
            <span className="text-accent font-semibold">#201300026</span>
          </div>
          </a>
          <a href="https://portal.mara.gov.au/search-the-register-of-migration-agents/register-of-migration-agent-details/?ContactID=ec101870-9aec-ec11-bb3d-0022481866de" 
          className="px-4 py-2 rounded-md text-sm font-medium transition-colors link-underline" 
          target="_blank">
          <div className="flex items-center gap-2">
            <span className="text-primary-foreground/70">MARA Licensed</span>
            <span className="text-accent font-semibold">#2318124</span>
          </div>
          </a>
        </div>
      </div>

      {/* Main header */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-card/95 backdrop-blur-md shadow-lg"
            : "bg-card"
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo.png" 
                    className="h-20 w-20 object-contain" 
                    alt="Credo Migration" 
              />
              <div className="h-10 w-px bg-gray-300 mx-4" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">
                  Credo Migration
                </span>
                <span className="text-sm text-gray-500 tracking-wider uppercase">
                  Services Limited
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors link-underline",
                    isActive(item.href)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact-us">
                <Button className="btn-gold">
                  Request a Consultation
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-card border-t border-border shadow-lg transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <nav className="container-custom py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "px-4 py-3 rounded-md text-base font-medium transition-colors",
                  isActive(item.href)
                    ? "bg-accent/10 text-accent"
                    : "text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border mt-2">
              <Link to="/contact-us" className="block">
                <Button className="w-full btn-gold">
                  Book Consultation
                </Button>
              </Link>
            </div>
            <div className="pt-4 flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="tel:+64273353475" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+64 273 353 475</span>
              </a>
              <a href="tel:+61491710728" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+61 491 710 728 (AU)</span>
              </a>
              <a href="mailto:info@credomigration.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@credomigration.com</span>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
