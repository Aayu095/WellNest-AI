import type { VercelRequest, VercelResponse } from '@vercel/node';
import { storage } from '../../server/storage';
import { insertWellnessMetricsSchema } from '../../shared/schema';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'POST') {
      const validatedData = insertWellnessMetricsSchema.parse(req.body);
      validatedData.userId = validatedData.userId || 1;
      
      const metrics = await storage.createWellnessMetrics(validatedData);
      return res.json(metrics);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Wellness metrics error:", error);
    return res.status(500).json({ error: "Failed to save wellness metrics" });
  }
}
