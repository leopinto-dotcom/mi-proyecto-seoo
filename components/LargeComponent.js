export default function LargeComponent() {
  return (
    <div style={{ padding: "20px", marginTop: "20px", border: "2px solid #0070f3", borderRadius: "8px" }}>
      <h2>Componente Cargado Dinámicamente (Lazy Loading)</h2>
      <p>
        Este bloque se descargó de forma diferida en el cliente (<code>ssr: false</code>),
        reduciendo el tamaño del bundle inicial de la página.
      </p>
    </div>
  );
}