import type { VercelRequest, VercelResponse } from '@vercel/node';
import { orchestrator } from '../../server/agents/orchestrator';
import { insertJournalEntrySchema } from '../../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'POST') {
      const validatedData = insertJournalEntrySchema.parse(req.body);
      validatedData.userId = validatedData.userId || 1;
      
      await orchestrator.saveJournalEntry(validatedData.userId, validatedData.content);
      
      return res.json({ success: true });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Journal save error:", error);
    return res.status(500).json({ error: "Failed to save journal entry" });
  }
}
