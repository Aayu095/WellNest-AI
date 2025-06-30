import type { VercelRequest, VercelResponse } from '@vercel/node';
import { orchestrator } from '../../server/agents/orchestrator';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const agents = orchestrator.getAllAgents();
      const status = Array.from(agents.entries()).map(([name, agent]) => ({
        name,
        role: agent.getRole(),
        tools: agent.getTools(),
        status: "active"
      }));
      
      return res.json(status);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Agent status error:", error);
    return res.status(500).json({ error: "Failed to get agent status" });
  }
}
