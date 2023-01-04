import type { PageServerLoad } from "./$types";

export const load = (() => ({
  name: "World",
})) satisfies PageServerLoad;
