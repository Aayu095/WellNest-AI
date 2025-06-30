import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';
import { orchestrator } from '../../server/agents/orchestrator';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'POST') {
      const { mood, userId = 1 } = req.body;
      
      if (!mood) {
        return res.status(400).json({ error: "Mood is required" });
      }

      const result = await orchestrator.runMoodUpdate(mood, userId);
      return res.json(result);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Mood update error:", error);
    return res.status(500).json({ error: "Failed to update mood" });
  }
}
