export type TaskStatus = 'pending' | 'completed';

export interface IceValues {
  impact: number;
  confidence: number;
  effort: number;
}

export interface AiIceSuggestion extends IceValues {
  reason?: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  ice: IceValues;
  status: TaskStatus;
  createdAt: Date;
}
