import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Desarrollo Web y SEO Técnico | TechNova Perú</title>
        <meta
          name="description"
          content="Lee nuestros últimos artículos sobre Next.js, generación de sitemaps dinámicos, lazy loading y optimización de Core Web Vitals."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Blog de Desarrollo Web y SEO Técnico - TechNova" />
        <meta
          property="og:description"
          content="Guías prácticas para mejorar el posicionamiento orgánico de tus aplicaciones React y Next.js."
        />
        <meta property="og:image" content="https://tu-dominio.vercel.app/images/seo-image.png" />
        <meta property="og:url" content="https://tu-dominio.vercel.app/blog" />
        <meta property="og:type" content="article" />
      </Head>

      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "15px" }}>
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <h1>Blog de Ingeniería Web</h1>
        <article style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem", marginBottom: "1rem" }}>
          <h2>Cómo automatizar un Sitemap XML con Next.js</h2>
          <p>Descubre cómo conectar tus rutas dinámicas de base de datos con los rastreadores de Google.</p>
        </article>
        <article>
          <h2>Impacto de next/image en el rendimiento móvil</h2>
          <p>Reduce el peso de tus activos gráficos hasta en un 70% mediante conversión automática a WebP.</p>
        </article>
      </div>
    </>
  );
}