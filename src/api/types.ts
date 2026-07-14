export interface ApiTestimonial {
  id:number,  
  clientName: string;
  location: string;
  rating: number;
  testimonialText: string;
  photo: string;        // empty string when no photo uploaded
  isFeatured: boolean;
}

export interface ApiPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string;      // HTML string — render with the `prose` class
  category: string;
  author: string;
  publishedAt: string;  // "YYYY-MM-DD"
  featuredImage: string; // empty string when none
}