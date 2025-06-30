import type { VercelRequest, VercelResponse } from '@vercel/node';
import { orchestrator } from '../../../server/agents/orchestrator';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'POST') {
      const { agentName } = req.query;
      const { message, conversationHistory = [], userId = 1 } = req.body;
      
      if (!agentName || typeof agentName !== 'string') {
        return res.status(400).json({ error: "Agent name is required" });
      }
      
      if (!message || !message.trim()) {
        return res.status(400).json({ error: "Message is required" });
      }

      const result = await orchestrator.handleAgentConversation(
        agentName, 
        message, 
        conversationHistory, 
        userId
      );
      
      return res.json(result);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Agent conversation error:", error);
    return res.status(500).json({ error: "Failed to process conversation" });
  }
}
