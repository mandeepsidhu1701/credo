import { Link } from "react-router-dom";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface PostCardProps {
  title: string;
  excerpt?: string;
  slug: string;
  featuredImage?: string;
  category?: string;
  publishedAt: string;
  className?: string;
}

export function PostCard({
  title,
  excerpt,
  slug,
  featuredImage,
  category,
  publishedAt,
  className,
}: PostCardProps) {
  const formattedDate = format(new Date(publishedAt), "MMM dd, yyyy");

  return (
    <Link
      to={`/posts/${slug}`}
      className={cn(
        "group card-elevated overflow-hidden card-hover flex flex-col h-full",
        className
      )}
    >
      {/* Image */}
      <div className="aspect-video overflow-hidden bg-muted">
        {featuredImage ? (
          <img
            src={featuredImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full gradient-hero flex items-center justify-center">
            <span className="text-4xl font-serif font-bold text-accent/50">C</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <div className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>
          {category && (
            <div className="flex items-center gap-1.5">
              <Tag className="h-4 w-4" />
              <span>{category}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-serif font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        {excerpt && (
          <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4 line-clamp-3">
            {excerpt}
          </p>
        )}

        {/* Read More */}
        <div className="flex items-center gap-2 text-accent font-medium text-sm mt-auto">
          <span>Read More</span>
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
