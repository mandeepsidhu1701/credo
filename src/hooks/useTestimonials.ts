import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/api/client";
import type { ApiTestimonial } from "@/api/types";

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: () => apiGet<ApiTestimonial[]>("/testimonials"),
  });
}