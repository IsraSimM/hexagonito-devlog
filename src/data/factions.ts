/**
 * Facciones y unidades. Cada unidad es una entrada en la página de su facción.
 * - portrait: retrato recortado de la lámina de la facción (src/assets/units/<facción>/<rol>.png)
 * - sheet: hoja de modelo / turnaround opcional
 * - stats: rellenar cuando estén definidas en el juego (null = "Por definir")
 * - lore: texto libre opcional para ampliar la entrada
 */
import type { ImageMetadata } from "astro";

type Bi = { es: string; en: string };
export type FactionId = "humanos" | "orcos";
export type RoleId =
  | "melee" | "arquero" | "movilidad" | "asesino" | "bombas" | "volador"
  | "agua" | "tanque" | "soporte" | "mago" | "ingeniero" | "naturaleza";

export const roles: Record<RoleId, { label: Bi; color: string }> = {
  melee: { label: { es: "Melee", en: "Melee" }, color: "#d9473a" },
  arquero: { label: { es: "Arquero", en: "Archer" }, color: "#45a548" },
  movilidad: { label: { es: "Movilidad", en: "Mobility" }, color: "#3f8fdc" },
  asesino: { label: { es: "Asesino", en: "Assassin" }, color: "#9b5de5" },
  bombas: { label: { es: "Bombas", en: "Bombs" }, color: "#ee7d22" },
  volador: { label: { es: "Volador", en: "Flyer" }, color: "#e2b23a" },
  agua: { label: { es: "Agua", en: "Water" }, color: "#2fa4e7" },
  tanque: { label: { es: "Tanque", en: "Tank" }, color: "#9aa3ad" },
  soporte: { label: { es: "Soporte", en: "Support" }, color: "#5cb85c" },
  mago: { label: { es: "Mago", en: "Mage" }, color: "#e2483d" },
  ingeniero: { label: { es: "Ingeniero", en: "Engineer" }, color: "#e88a25" },
  naturaleza: { label: { es: "Naturaleza", en: "Nature" }, color: "#6dbb4b" },
};

export type Stats = { health: number; attack: number; defense: number; move: number; range: string };

export interface Unit {
  role: RoleId;
  name: Bi;
  title: Bi;
  text: Bi;
  stats: Stats | null;
  lore?: Bi;
  portrait: ImageMetadata;
  sheet?: ImageMetadata;
}

export interface Faction {
  id: FactionId;
  /** Parte de la URL: /<idioma>/factions/<slug>/ */
  slug: string;
  name: Bi;
  motto: Bi;
  lead: Bi;
  accent: string;
  accent2: string;
  sheet: ImageMetadata;
  units: Unit[];
}

const portraits = import.meta.glob<{ default: ImageMetadata }>("../assets/units/*/*.png", { eager: true });
const sheets = import.meta.glob<{ default: ImageMetadata }>("../assets/units/*/sheets/*.jpg", { eager: true });
const portrait = (f: FactionId, r: RoleId) => portraits[`../assets/units/${f}/${r}.png`].default;
const sheet = (f: FactionId, r: RoleId) => sheets[`../assets/units/${f}/sheets/${r}.jpg`]?.default;

import humanosSheet from "../assets/art/humanos.png";
import orcosSheet from "../assets/art/orcos.png";

type Def = [RoleId, Bi, Bi, Bi];
const build = (f: FactionId, defs: Def[]): Unit[] =>
  defs.map(([role, name, title, text]) => ({
    role, name, title, text, stats: null,
    portrait: portrait(f, role), sheet: sheet(f, role),
  }));

export const factions: Faction[] = [
  {
    id: "humanos",
    slug: "humans",
    name: { es: "Humanos", en: "Humans" },
    motto: { es: "Acero · Disciplina · Magia", en: "Steel · Discipline · Magic" },
    lead: {
      es: "Armaduras brillantes, magia elemental e ingenio mecánico. Los humanos ganan con formación y apoyo mutuo.",
      en: "Shining armour, elemental magic and mechanical ingenuity. Humans win through formation and mutual support.",
    },
    accent: "#d4483b",
    accent2: "#4a7fc1",
    sheet: humanosSheet,
    units: build("humanos", [
      ["melee", { es: "Soldado", en: "Soldier" }, { es: "Soldado cuerpo a cuerpo", en: "Close-quarters soldier" }, { es: "Alta resistencia y daño en corto alcance.", en: "High toughness and damage at short range." }],
      ["arquero", { es: "Arquero", en: "Archer" }, { es: "Ataque a distancia", en: "Ranged attacker" }, { es: "Buen daño y alcance.", en: "Solid damage and range." }],
      ["movilidad", { es: "Explorador", en: "Scout" }, { es: "Especialista en movimiento", en: "Movement specialist" }, { es: "Alta velocidad y reposicionamiento.", en: "High speed and repositioning." }],
      ["asesino", { es: "Asesino", en: "Assassin" }, { es: "Daño explosivo", en: "Burst damage" }, { es: "Elimina objetivos clave rápidamente.", en: "Takes out key targets quickly." }],
      ["bombas", { es: "Bombardero", en: "Bomber" }, { es: "Daño de área", en: "Area damage" }, { es: "Control de zonas y estructuras.", en: "Controls zones and structures." }],
      ["volador", { es: "Ángel", en: "Angel" }, { es: "Unidad aérea", en: "Air unit" }, { es: "Gran movilidad y visión del mapa.", en: "Great mobility and map vision." }],
      ["agua", { es: "Maga de agua", en: "Water mage" }, { es: "Control y soporte", en: "Control and support" }, { es: "Daño, control de masas y curación.", en: "Damage, crowd control and healing." }],
      ["tanque", { es: "Tanque", en: "Tank" }, { es: "Alta defensa", en: "High defence" }, { es: "Protege aliados y absorbe daño.", en: "Protects allies and soaks damage." }],
      ["soporte", { es: "Sanadora", en: "Healer" }, { es: "Curación y mejoras", en: "Healing and buffs" }, { es: "Mantiene al equipo en batalla.", en: "Keeps the team in the fight." }],
      ["mago", { es: "Maga de fuego", en: "Fire mage" }, { es: "Daño mágico", en: "Magic damage" }, { es: "Gran daño de área y control elemental.", en: "Heavy area damage and elemental control." }],
      ["ingeniero", { es: "Ingeniero", en: "Engineer" }, { es: "Estructuras y utilidades", en: "Structures and utilities" }, { es: "Despliega torretas, trampas y artilugios.", en: "Deploys turrets, traps and gadgets." }],
      ["naturaleza", { es: "Druida", en: "Druid" }, { es: "Invocación y control", en: "Summoning and control" }, { es: "Usa criaturas y el entorno a su favor.", en: "Turns creatures and terrain to its advantage." }],
    ]),
  },
  {
    id: "orcos",
    slug: "orcs",
    name: { es: "Orcos", en: "Orcs" },
    motto: { es: "Fuerza · Caos · Supervivencia", en: "Strength · Chaos · Survival" },
    lead: {
      es: "Hueso, hierro oxidado y bestias de guerra. Los orcos aplastan, emboscan y nunca dejan de avanzar.",
      en: "Bone, rusty iron and war beasts. Orcs crush, ambush and never stop advancing.",
    },
    accent: "#7fb347",
    accent2: "#b3332a",
    sheet: orcosSheet,
    units: build("orcos", [
      ["melee", { es: "Guerrero orco", en: "Orc warrior" }, { es: "Cuerpo a cuerpo", en: "Close quarters" }, { es: "Gran resistencia y daño en corto alcance.", en: "Great toughness and damage at short range." }],
      ["arquero", { es: "Cazador orco", en: "Orc hunter" }, { es: "Ataque a distancia", en: "Ranged attacker" }, { es: "Flechas pesadas y venenos.", en: "Heavy arrows and poisons." }],
      ["movilidad", { es: "Jinete orco", en: "Orc rider" }, { es: "Especialista en movimiento", en: "Movement specialist" }, { es: "Alta velocidad y gran capacidad de reposicionamiento.", en: "High speed and strong repositioning." }],
      ["asesino", { es: "Acechador orco", en: "Orc stalker" }, { es: "Asesino", en: "Assassin" }, { es: "Elimina objetivos clave con ataques rápidos y sigilosos.", en: "Takes out key targets with fast, stealthy strikes." }],
      ["bombas", { es: "Demoledor orco", en: "Orc demolisher" }, { es: "Daño de área", en: "Area damage" }, { es: "Daño de área y control de zonas.", en: "Area damage and zone control." }],
      ["volador", { es: "Zancudo orco", en: "Orc glider" }, { es: "Unidad aérea", en: "Air unit" }, { es: "Unidad aérea de asalto y reconocimiento.", en: "Airborne assault and recon unit." }],
      ["agua", { es: "Guerrero del pantano", en: "Swamp warrior" }, { es: "Control y daño en masa", en: "Control and mass damage" }, { es: "Control y daño en masa en el agua; invoca criaturas acuáticas.", en: "Crowd control and damage in water; summons aquatic creatures." }],
      ["tanque", { es: "Bruto orco", en: "Orc brute" }, { es: "Alta defensa", en: "High defence" }, { es: "Provoca enemigos y protege aliados.", en: "Taunts enemies and protects allies." }],
      ["soporte", { es: "Chamán orco", en: "Orc shaman" }, { es: "Curación y mejoras", en: "Healing and buffs" }, { es: "Curaciones, mejoras y tótems que fortalecen al equipo.", en: "Heals, buffs and totems that strengthen the team." }],
      ["mago", { es: "Hechicero orco", en: "Orc sorcerer" }, { es: "Daño mágico", en: "Magic damage" }, { es: "Gran daño mágico y control elemental (fuego, maldiciones).", en: "Heavy magic damage and elemental control (fire, curses)." }],
      ["ingeniero", { es: "Ingeniero orco", en: "Orc engineer" }, { es: "Estructuras y utilidades", en: "Structures and utilities" }, { es: "Despliega torretas, trampas y artilugios mecánicos.", en: "Deploys turrets, traps and mechanical gadgets." }],
      ["naturaleza", { es: "Druida orco", en: "Orc druid" }, { es: "Invocación y control", en: "Summoning and control" }, { es: "Invoca bestias, controla el entorno y usa el poder de la naturaleza.", en: "Summons beasts, bends the terrain and wields nature's power." }],
    ]),
  },
];

export const getFaction = (slug: string) => factions.find((f) => f.slug === slug);
