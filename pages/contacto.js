import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Solicita tu Auditoría SEO Gratis - TechNova</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestro equipo de desarrollo web para evaluar el rendimiento y posicionamiento SEO de tu plataforma."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Contacto - TechNova Perú" />
        <meta
          property="og:description"
          content="Escríbenos y mejora la visibilidad de tu aplicación en buscadores."
        />
        <meta property="og:image" content="https://tu-dominio.vercel.app/images/seo-image.png" />
        <meta property="og:url" content="https://tu-dominio.vercel.app/contacto" />
        <meta property="og:type" content="website" />
      </Head>

      <div style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <nav style={{ marginBottom: "1.5rem", display: "flex", gap: "15px" }}>
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>

        <h1>Contáctanos</h1>
        <p>¿Listo para optimizar tu web? Envíanos tus datos y te responderemos en menos de 24 horas.</p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px" }}>
          <input type="text" placeholder="Tu nombre" required style={{ padding: "8px" }} />
          <input type="email" placeholder="Tu correo electrónico" required style={{ padding: "8px" }} />
          <textarea placeholder="Cuéntanos sobre tu proyecto" rows={4} style={{ padding: "8px" }} />
          <button type="submit" style={{ padding: "10px", background: "#0070f3", color: "#fff", border: "none", cursor: "pointer" }}>
            Enviar Mensaje
          </button>
        </form>
      </div>
    </>
  );
}