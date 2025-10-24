export default function handler(req, res) {
  const { pass } = req.query;

  // password diambil dari environment variable di vercel
  const valid = pass === process.env.INVITE_PASS;

  res.status(200).json({ valid });
}
