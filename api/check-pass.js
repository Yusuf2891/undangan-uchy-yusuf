export default function handler(req, res) {
  const { pass } = req.query;
  const validPass = process.env.INVITE_CODE || "undanganku2025"; // kode di environment Vercel
  res.status(200).json({ valid: pass === validPass });
}
