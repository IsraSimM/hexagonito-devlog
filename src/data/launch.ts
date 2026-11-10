/**
 * Lanzamiento oficial. Todo lo que esté en null se oculta del sitio.
 * Cuando tengan fecha o tiendas, rellenen aquí y hagan push: no hay que tocar nada más.
 */
export const studio = {
  name: "Stinky Interactive",
  game: "HexaGonito",
  /** Correo de prensa/contacto. null = no se muestra. */
  contactEmail: null as string | null,
  /** Redes del estudio. Solo se muestran las que tengan URL. */
  social: {
    x: null as string | null,
    youtube: null as string | null,
    discord: null as string | null,
    bluesky: null as string | null,
  },
};

export const launch = {
  /** Fecha de lanzamiento ISO, p. ej. "2027-03-14". null = "Próximamente". Activa la cuenta atrás. */
  releaseDate: null as string | null,
  /** Plataformas confirmadas. */
  platforms: ["Windows (PC)"],
  /** Enlaces de tienda. null = botón oculto. */
  stores: {
    steam: null as string | null, // p. ej. "https://store.steampowered.com/app/123456/HexaGonito/"
    itch: null as string | null, // p. ej. "https://stinkyinteractive.itch.io/hexagonito"
  },
  /** ID de un vídeo de YouTube para el tráiler (lo que va después de "v="). null = sin tráiler. */
  trailerYouTubeId: null as string | null,
  price: null as string | null,
};

export const hasStores = () => Object.values(launch.stores).some(Boolean);
