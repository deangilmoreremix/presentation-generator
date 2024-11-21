import { API_CONFIG } from './api-config';

export interface GeneratePresentationParams {
  plain_text: string;
  length?: number;
  theme?: string;
}

export interface TaskStatus {
  task_id: string;
  task_status: 'FAILURE' | 'PENDING' | 'RECEIVED' | 'RETRY' | 'REVOKED' | 'STARTED' | 'SUCCESS';
  task_result?: any;
  task_info: {
    progress: number;
  };
}

export const themes = [
  'daniel', 'default', 'eddy', 'felix', 'gradient', 'iris', 'lavender',
  'monolith', 'adam', 'aurora', 'bruno', 'clyde', 'nebula', 'nexus'
] as const;

export type Theme = typeof themes[number];

class APIError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'APIError';
  }
}

export async function generatePresentation(params: GeneratePresentationParams): Promise<string> {
  const response = await fetch(`${API_CONFIG.BASE_URL}/presentation/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-key': API_CONFIG.API_KEY,
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new APIError(response.status, error.detail?.[0]?.msg || 'Failed to generate presentation');
  }

  const data = await response.json();
  return data.task_id;
}

export async function getTaskStatus(taskId: string): Promise<TaskStatus> {
  const response = await fetch(`${API_CONFIG.BASE_URL}/task_status/${taskId}`, {
    method: 'GET',
    headers: {
      'X-API-key': API_CONFIG.API_KEY,
    },
  });

  if (!response.ok) {
    throw new APIError(response.status, 'Failed to get task status');
  }

  return response.json();
}