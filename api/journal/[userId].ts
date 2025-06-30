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

      const entries = await storage.getJournalEntries(userIdNum, 10);
      return res.json(entries);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Get journal entries error:", error);
    return res.status(500).json({ error: "Failed to get journal entries" });
  }
}
