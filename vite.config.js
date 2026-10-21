import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import contactHandler from "./api/contact.js";

function withJson(res) {
  return {
    statusCode: 200,
    setHeader: (...args) => res.setHeader(...args),
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(body) {
      res.statusCode = this.statusCode;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(body));
    },
  };
}

function contactApi() {
  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use("/api/contact", (req, res) => {
        const chunks = [];
        req.on("data", (chunk) => chunks.push(chunk));
        req.on("end", async () => {
          try {
            req.body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
          } catch {
            req.body = {};
          }
          await contactHandler(req, withJson(res));
        });
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  if (env.RESEND_API_KEY) process.env.RESEND_API_KEY = env.RESEND_API_KEY;
  if (env.CONTACT_TO_EMAIL) process.env.CONTACT_TO_EMAIL = env.CONTACT_TO_EMAIL;

  return {
    plugins: [react(), contactApi()],
    server: {
      port: 3000,
    },
  };
});
