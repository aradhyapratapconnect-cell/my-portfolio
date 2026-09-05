/** Minimal className combiner (avoids a dependency for one small helper). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}