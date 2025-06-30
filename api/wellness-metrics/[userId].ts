import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { userId } = req.query;
      const userIdNum = parseInt(userId as string);
      
      if (isNaN(userIdNum)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }

      const days = parseInt(req.query.days as string) || 7;
      const metrics = await storage.getWellnessMetrics(userIdNum, days);
      return res.json(metrics);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Get wellness metrics error:", error);
    return res.status(500).json({ error: "Failed to get wellness metrics" });
  }
}
