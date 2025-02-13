import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware((context, next) => {
  const auth = context.request.headers.get("authorization");

  const USER = import.meta.env.AUTH_USER;
  const PASS = import.meta.env.AUTH_PASS;
  const validAuth = `Basic ${btoa(`${USER}:${PASS}`)}`;

  if (auth !== validAuth) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Protected"',
      },
    });
  }

  return next();
});
