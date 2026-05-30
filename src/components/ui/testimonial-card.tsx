import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  location?: string;
  rating?: number;
  testimonial: string;
  photo?: string;
  className?: string;
}

export function TestimonialCard({
  name,
  location,
  rating = 5,
  testimonial,
  photo,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "card-elevated p-6 md:p-8 flex flex-col h-full relative",
        className
      )}
    >
      <Quote className="absolute top-6 right-6 h-8 w-8 text-accent/20" />
      
      {/* Rating */}
      {rating > 0 && (
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating ? "text-accent fill-accent" : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
      )}

      {/* Testimonial */}
      <p className="text-foreground/90 leading-relaxed flex-1 mb-6 text-sm md:text-base">
        "{testimonial}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
            <span className="text-lg font-semibold text-accent">
              {name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
        </div>
      </div>
    </div>
  );
}