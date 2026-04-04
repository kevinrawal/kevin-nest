const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

export async function fetchHealth() {
  const response = await fetch(`${API_URL}/health`);
  if (!response.ok) {
    throw new Error('Failed to fetch health');
  }
  return response.json();
}