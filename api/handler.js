export default async function handler(req, res) {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Método no permitido" });
    }
  
    const { name, lastName, phone, email, select, message, "cf-turnstile-response": turnstileToken } = req.body;
  
    if (!turnstileToken) {
      return res.status(400).json({ error: "Falta el token de Turnstile" });
    }
  
    // Validar el captcha con Cloudflare
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    const turnstileVerifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
  
    const turnstileResponse = await fetch(turnstileVerifyUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: turnstileSecret,
        response: turnstileToken,
      }),
    });
  
    const turnstileData = await turnstileResponse.json();
  
    if (!turnstileData.success) {
      return res.status(400).json({ error: "Verificación de Turnstile fallida" });
    }
  
    // Si el captcha es válido, enviamos los datos a Basin
    const basinEndpoint = "TU_ENDPOINT_DE_BASIN";
    const basinResponse = await fetch(basinEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, lastName, phone, email, select, message }),
    });
  
    if (!basinResponse.ok) {
      return res.status(500).json({ error: "Error enviando datos a Basin" });
    }
  
    return res.status(200).json({ success: "Formulario enviado con éxito" });
  }
  