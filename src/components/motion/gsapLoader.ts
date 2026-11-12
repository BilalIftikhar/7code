/**
 * GSAP is about 90KB of parse-and-execute work. Importing it statically from six
 * homepage components put all of it on the hydration critical path, which showed
 * up in Lighthouse as ~620ms of total blocking time. Loading it on demand, after
 * first paint, keeps the scroll animations without paying for them up front.
 */
export async function loadGsap() {
  const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
  gsap.registerPlugin(ScrollTrigger);
  return { gsap, ScrollTrigger };
}
