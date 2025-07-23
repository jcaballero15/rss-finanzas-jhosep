export default function handler(req, res) {
  res.setHeader("Content-Type", "application/rss+xml");
  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Resumen Diario Jhosep</title>
  <link>https://rss-finanzas-jhosep.vercel.app</link>
  <description>Boletín diario de acciones, bonos, FX y derivados</description>
  <item>
    <title>Resumen del ${new Date().toLocaleDateString("es-PA")}</title>
    <link>https://rss-finanzas-jhosep.vercel.app/rss.xml</link>
    <guid>${Date.now()}</guid>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <description><![CDATA[
      <b>📰 Resumen diario de mercado</b><br>
      <b>📦 Acciones</b><br>
      Apple sube 2% tras resultados — impacto positivo en ETFs tech<br>
      <b>💵 Bonos</b><br>
      Tasa 10a USA sube 4 bps — duration afectada<br>
      <i>📎 <a href="https://jhosep-finanzas.vercel.app/rss.xml">Ver más</a></i>
    ]]></descriptio
