# Username Checker API

This API allows you to check if a username is available on Instagram, TikTok, and Snapchat.

## Endpoints

- `/check/instagram/:username`
- `/check/tiktok/:username`
- `/check/snapchat/:username`

Returns JSON:
```json
{ "available": true }
```

## Deploy to Vercel

1. Push this project to GitHub.
2. Go to [Vercel](https://vercel.com) > New Project > Import the repo.
3. Set Framework: **Other**
4. Root directory: `.`
5. Set `index.js` as entry.
6. Click Deploy.

## Test locally

```bash
npm install
node index.js
```

Visit `http://localhost:3000/check/instagram/desired_username`"# username-checker-api-new" 
