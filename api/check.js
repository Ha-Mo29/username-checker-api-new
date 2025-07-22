export default async function handler(req, res) {
  const { platform, username } = req.query;

  if (!platform || !username) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  const urls = {
    instagram: `https://www.instagram.com/${username}`,
    tiktok: `https://www.tiktok.com/@${username}`,
    snapchat: `https://www.snapchat.com/add/${username}`
  };

  const url = urls[platform];

  if (!url) {
    return res.status(400).json({ error: 'Unsupported platform' });
  }

  try {
    const response = await fetch(url, { method: 'HEAD' });
    const available = response.status === 404;
    res.status(200).json({ available });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check username' });
  }
}
