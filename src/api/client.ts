const BASE = import.meta.env.VITE_API_BASE_URL;
const SLUG = import.meta.env.VITE_TENANT_SLUG;
const KEY = import.meta.env.VITE_API_KEY;

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${BASE}/${SLUG}${path}`, {
    headers: {
      "X-API-Key": KEY,
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}