export default function handler(req, res) {
  const { pass } = req.query;
  const PASSWORD = process.env.INVITE_PASS || "undanganku2025"; // default fallback
  res.status(200).json({ valid: pass === PASSWORD });
}
