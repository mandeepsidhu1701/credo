import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  description,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative gradient-hero py-20 md:py-28 overflow-hidden",
        className
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          {subtitle && (
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4 animate-fade-in-down">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground mb-6 animate-fade-in-up">
            {title}
          </h1>
          {description && (
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed animate-fade-in-up animation-delay-200">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
