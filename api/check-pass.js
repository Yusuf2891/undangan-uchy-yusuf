export default function handler(req, res) {
  const { pass } = req.query;
  const PASSWORD = process.env.INVITE_PASS; // atur di Environment Vercel
  res.status(200).json({ valid: pass === PASSWORD });
}
