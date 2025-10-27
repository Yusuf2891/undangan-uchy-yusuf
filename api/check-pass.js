// CommonJS version (tidak perlu package.json "type": "module")
module.exports = (req, res) => {
  const pass = req.query?.pass;
  const PASSWORD = process.env.INVITE_PASS ||
  res.status(200).json({ valid: pass === PASSWORD });
};
