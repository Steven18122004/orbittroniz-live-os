export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  try {
    const r = await fetch('https://site.api.espn.com/apis/site/v2/sports/soccer/eng.1/scoreboard');
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(200).json({ events: [], error: 'ESPN Football API temp down' });
  }
}
