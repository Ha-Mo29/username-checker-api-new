const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

// Helper to check availability
async function isUsernameAvailable(url) {
  try {
    const response = await axios.head(url, { timeout: 5000 });
    return response.status === 404;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return true; // Username is available
    }
    return false; // Username is taken or unknown error
  }
}

// Instagram
app.get('/api/check', async (req, res) => {
  const { platform, username } = req.query;
  if (!platform || !username) return res.status(400).json({ error: 'Missing parameters' });

  let url = '';
  if (platform === 'instagram') url = `https://www.instagram.com/${username}`;
  else if (platform === 'tiktok') url = `https://www.tiktok.com/@${username}`;
  else if (platform === 'snapchat') url = `https://www.snapchat.com/add/${username}`;
  else return res.status(400).json({ error: 'Invalid platform' });

  const available = await isUsernameAvailable(url);
  res.json({ platform, username, available });
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});
