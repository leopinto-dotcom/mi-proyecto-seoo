// Simula registros extraídos de una Base de Datos (PostgreSQL/MongoDB) o Headless CMS (Strapi/Contentful)
export const postsDatabase = [
  {
    id: 1,
    slug: "automatizar-sitemap-xml-nextjs",
    title: "Cómo automatizar un Sitemap XML con Next.js",
    updatedAt: "2026-11-20",
  },
  {
    id: 2,
    slug: "impacto-next-image-rendimiento",
    title: "Impacto de next/image en el rendimiento móvil",
    updatedAt: "2026-11-21",
  },
  {
    id: 3,
    slug: "guia-meta-tags-open-graph",
    title: "Guía completa de Meta Tags y Open Graph",
    updatedAt: "2026-11-22",
  },
];

export default function handler(req, res) {
  res.status(200).json(postsDatabase);
}