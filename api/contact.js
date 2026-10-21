import { Resend } from "resend";

  const recipient = process.env.CONTACT_TO_EMAIL;
  const destination =
    recipient && recipient.includes("@") ? recipient : "princyandrianantenaina@yahoo.com";

function asText(value, max) {
  return String(value ?? "").trim().slice(0, max);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Méthode refusée" });
  }

  if (!process.env.RESEND_API_KEY) {
    return res.status(500).json({ error: "Envoi non configuré" });
  }

  const name = asText(req.body?.name, 120);
  const email = asText(req.body?.email, 180);
  const subject = asText(req.body?.subject, 140);
  const message = asText(req.body?.message, 4000);

  if (!name || !email || !subject || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Champs manquants" });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: [destination],
    replyTo: email,
    subject,
    text: `Nom : ${name}\nEmail : ${email}\n\n${message}`,
  });

  if (error) return res.status(502).json({ error: "Envoi impossible" });
  return res.status(200).json({ ok: true });
}

