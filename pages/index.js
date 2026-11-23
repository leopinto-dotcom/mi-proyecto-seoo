import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>TechNova Perú | Desarrollo Web y Consultoría SEO en Next.js</title>
        <meta
          name="description"
          content="Impulsa tu negocio digital con aplicaciones web ultrarrápidas en Next.js y estrategias avanzadas de posicionamiento SEO en Google."
        />
        <meta name="keywords" content="Next.js, SEO técnico, desarrollo web, rendimiento, Perú" />
        {/* Open Graph */}
        <meta property="og:title" content="TechNova Perú | Desarrollo Web y Consultoría SEO" />
        <meta
          property="og:description"
          content="Creamos sitios web optimizados para Core Web Vitals y motores de búsqueda."
        />
        <meta property="og:image" content="https://tu-dominio.vercel.app/images/seo-image.png" />
        <meta property="og:url" content="https://tu-dominio.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "15px" }}>
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <h1>Bienvenido a TechNova Perú</h1>
        <p>Especialistas en optimización web, renderizado híbrido y SEO técnico.</p>
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Optimización SEO con Next.js"
          priority
        />
      </div>
    </>
  );
}