export type ProjectId = 'landsafe' | 'ethanol-plant' | 'political-strategy' | 'aiesec';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
  source?: 'gemini' | 'grounded-fallback';
}

export interface InteractivePipelineStage {
  name: string;
  label: string;
  status: string;
  description: string;
  sampleData: string;
}
