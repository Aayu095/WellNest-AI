import type { VercelRequest, VercelResponse } from '@vercel/node';
import { orchestrator } from '../../server/agents/orchestrator';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { userId } = req.query;
      const userIdNum = parseInt(userId as string);
      
      if (isNaN(userIdNum)) {
        return res.status(400).json({ error: "Invalid user ID" });
      }

      const insights = await orchestrator.runInsightsAnalysis(userIdNum);
      return res.json(insights);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Insights error:", error);
    return res.status(500).json({ error: "Failed to generate insights" });
  }
}
