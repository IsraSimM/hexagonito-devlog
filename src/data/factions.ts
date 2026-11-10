/**
 * Acceso a facciones, roles y unidades. Los datos NO viven aquí:
 *   - src/content/factions/<id>.yaml
 *   - src/content/roles.yaml
 *   - src/content/units/<facción>/<rol>.yaml
 */
import { getCollection, type CollectionEntry } from "astro:content";

export type FactionEntry = CollectionEntry<"factions">;
export type UnitEntry = CollectionEntry<"units">;
export type RoleEntry = CollectionEntry<"roles">;

export async function getFactions(): Promise<FactionEntry[]> {
  return (await getCollection("factions")).sort((a, b) => a.data.order - b.data.order);
}

export async function getRoles(): Promise<Record<string, RoleEntry["data"]>> {
  return Object.fromEntries((await getCollection("roles")).map((r) => [r.id, r.data]));
}

export async function getUnits(factionId: string): Promise<UnitEntry[]> {
  return (await getCollection("units", (u) => u.data.faction.id === factionId)).sort(
    (a, b) => a.data.order - b.data.order,
  );
}
