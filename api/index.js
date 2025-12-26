// index.js - Vercel serverless API example
export default async function handler(req, res) {
  // Enable CORS for testing (optional)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === "OPTIONS") {
    return res.status(200).end(); // Preflight
  }

  // GET request example
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "Hello from Vercel API!",
      timestamp: Date.now()
    });
  }

  // POST request example
  if (req.method === "POST") {
    const body = req.body || {};
    // Simple validation
    if (!body.name) {
      return res.status(400).json({
        success: false,
        error: "Missing 'name' in request body"
      });
    }

    return res.status(200).json({
      success: true,
      message: `Hello ${body.name}, your API is working!`,
      timestamp: Date.now()
    });
  }

  // If method not allowed
  res.setHeader('Allow', 'GET,POST,OPTIONS');
  return res.status(405).json({ success: false, error: "Method not allowed" });
}
