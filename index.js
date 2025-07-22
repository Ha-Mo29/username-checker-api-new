const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

// Instagram Check
app.get('/check/instagram/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const response = await fetch(`https://www.instagram.com/${username}`, { method: 'HEAD' });
    res.json({ available: response.status === 404 });
  } catch {
    res.status(500).json({ error: 'Error checking Instagram' });
  }
});

// TikTok Check
app.get('/check/tiktok/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const response = await fetch(`https://www.tiktok.com/@${username}`, { method: 'HEAD' });
    res.json({ available: response.status === 404 });
  } catch {
    res.status(500).json({ error: 'Error checking TikTok' });
  }
});

// Snapchat Check
app.get('/check/snapchat/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const response = await fetch(`https://www.snapchat.com/add/${username}`, { method: 'HEAD' });
    res.json({ available: response.status === 404 });
  } catch {
    res.status(500).json({ error: 'Error checking Snapchat' });
  }
});

app.listen(port, () => {
  console.log(`API running on port ${port}`);
});