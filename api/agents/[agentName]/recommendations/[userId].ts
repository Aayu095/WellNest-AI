import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../../../server/storage';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { agentName, userId } = req.query;
      
      if (!agentName || typeof agentName !== 'string') {
        return res.status(400).json({ error: "Agent name is required" });
      }
      
      const userIdNum = parseInt(userId as string);
      if (isNaN(userIdNum)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }
      
      const recommendations = await storage.getActiveRecommendations(
        userIdNum, 
        agentName
      );
      return res.json(recommendations);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Get recommendations error:", error);
    return res.status(500).json({ error: "Failed to get recommendations" });
  }
}
