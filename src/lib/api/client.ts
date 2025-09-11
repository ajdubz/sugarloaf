export type ApiResult<T> = { ok: true; data: T } | { ok: false; error: Error }

const DEFAULT_BASE = (import.meta.env.VITE_API_BASE as string | undefined) ?? '/api'

// Safe fetch wrapper that won’t crash the app if backend is down.
export async function safeFetch<T>(
  path: string,
  init?: RequestInit,
  opts: { baseUrl?: string } = {},
): Promise<ApiResult<T>> {
  const url = (opts.baseUrl ?? DEFAULT_BASE) + path
  try {
    const res = await fetch(url, init)
    if (!res.ok) {
      return { ok: false, error: new Error(`Request failed ${res.status}: ${res.statusText}`) }
    }
    const data = (await res.json()) as T
    return { ok: true, data }
  } catch (err) {
    const error = err instanceof Error ? err : new Error(String(err))
    return { ok: false, error }
  }
}
