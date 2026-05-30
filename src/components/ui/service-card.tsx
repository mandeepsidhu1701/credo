import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  href,
  className,
}: ServiceCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group card-elevated p-8 card-hover flex flex-col h-full",
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-7 w-7 text-accent" />
      </div>
      <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
        {description}
      </p>
      <div className="flex items-center gap-2 text-accent font-medium text-sm">
        <span>Learn More</span>
        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
