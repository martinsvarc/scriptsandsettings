// src/services/scriptService.ts
import { Category, SavedScript } from '@/types';

interface CreateScriptParams {
  teamId: string;
  memberstackId: string;
  name: string;
  content: string;
  category: Category;
  isPrimary?: boolean;
}

interface UpdateScriptParams extends Partial<CreateScriptParams> {
  id: string;
  isSelected?: boolean;
}

export const scriptService = {
  // Získat všechny skripty
  getScripts: async (teamId: string, memberstackId?: string, category?: Category) => {
    try {
      const params = new URLSearchParams({ teamId });
      if (memberstackId) params.append('memberstackId', memberstackId);
      if (category) params.append('category', category);

      const response = await fetch(`/api/scripts?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch scripts');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching scripts:', error);
      throw error;
    }
  },

  // Vytvořit nový skript
  createScript: async (
    teamId: string,
    memberstackId: string,
    name: string,
    content: string,
    category: Category,
    isPrimary: boolean = false
  ) => {
    try {
      const response = await fetch('/api/scripts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          teamId,
          memberstackId,
          name,
          content,
          category,
          isPrimary
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create script');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating script:', error);
      throw error;
    }
  },

  // Aktualizovat existující skript
  updateScript: async ({ id, teamId, ...params }: UpdateScriptParams) => {
    try {
      const response = await fetch('/api/scripts', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id,
          teamId,
          ...params
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to update script');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating script:', error);
      throw error;
    }
  },

  // Smazat skript
  deleteScript: async (id: string, teamId: string) => {
    try {
      const response = await fetch(`/api/scripts?id=${id}&teamId=${teamId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to delete script');
      }

      return await response.json();
    } catch (error) {
      console.error('Error deleting script:', error);
      throw error;
    }
  }
};
