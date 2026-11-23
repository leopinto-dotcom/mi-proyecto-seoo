import { postsDatabase } from "./posts";

export default async function handler(req, res) {
  // Detecta automáticamente el dominio (localhost en desarrollo o tu dominio real en Vercel)
  const protocol = req.headers["x-forwarded-proto"] || "http";
  const host = req.headers.host;
  const BASE_URL = `${protocol}://${host}`;

  // 1. Rutas estáticas de la aplicación
  const staticRoutes = [
    { url: "/", lastmod: "2026-11-22", changefreq: "daily", priority: "1.0" },
    { url: "/blog", lastmod: "2026-11-22", changefreq: "daily", priority: "0.8" },
    { url: "/contacto", lastmod: "2026-11-15", changefreq: "monthly", priority: "0.6" },
  ];

  // 2. Rutas dinámicas obtenidas desde la base de datos / CMS
  const dynamicRoutes = postsDatabase.map((post) => ({
    url: `/blog/${post.slug}`,
    lastmod: post.updatedAt,
    changefreq: "weekly",
    priority: "0.9",
  }));

  const allRoutes = [...staticRoutes, ...dynamicRoutes];

  // 3. Generación del documento XML estándar
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}