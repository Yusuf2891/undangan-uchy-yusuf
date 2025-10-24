export default function handler(req, res) {
  const { pass } = req.query;
  const PASSWORD = process.env.INVITE_PASS; // password dari Vercel Environment
  res.status(200).json({ valid: pass === PASSWORD });
}
