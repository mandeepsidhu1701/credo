import { useQuery } from "@tanstack/react-query";
import { apiGet } from "@/api/client";
import type { ApiPost } from "@/api/types";

export function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => apiGet<ApiPost[]>("/posts"),
  });
}

export function usePost(slug: string) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => apiGet<ApiPost>(`/posts/${slug}`),
    enabled: !!slug, // don't fire until we have a slug
  });
}