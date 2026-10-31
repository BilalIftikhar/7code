/**
 * Run `fn` when the browser is idle (or after `timeout` ms at the latest).
 * Used to start non-critical animation setup after the page is interactive.
 * Returns a cancel function.
 */
export function whenIdle(fn: () => void, timeout = 1500): () => void {
  if (typeof window === "undefined") return () => {};
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(fn, { timeout });
    return () => window.cancelIdleCallback(id);
  }
  const id = setTimeout(fn, 200);
  return () => clearTimeout(id);
}
