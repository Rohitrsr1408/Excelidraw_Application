// apps/excelidraw-frontend/config.ts
// Use environment variables provided by Docker or Next.js
export const HTTP_BACKEND =
  process.env.NEXT_PUBLIC_HTTP_BACKEND_HOST || "http://localhost:4040";
export const WS_BACKEND =
  process.env.NEXT_PUBLIC_WS_BACKEND_HOST || "ws://localhost:8080";
