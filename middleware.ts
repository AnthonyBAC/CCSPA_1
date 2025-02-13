import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const allowedIP = "190.47.102.181"; // Cambia esto por tu IP pública.
  const clientIP = context.request.headers.get("x-forwarded-for");

  if (clientIP !== allowedIP) {
    return new Response("Acceso denegado", { status: 403 });
  }

  return next();
});
