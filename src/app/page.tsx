'use client'

import { useEffect, useState } from 'react'
import ScriptUploader from '@/components/ScriptUploader'
import { getMemberData } from "@/utils/memberstack"
import { scriptService } from '@/services/scriptService'
import { categories } from '@/components/CategorySelector'
import { Category } from '@/types'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [teamId, setTeamId] = useState<string>('');
  const [memberstackId, setMemberstackId] = useState<string>('');

  useEffect(() => {
    const initializeData = async () => {
      try {
        // Get member data
        const { teamId, memberstackId } = await getMemberData();
        setTeamId(teamId);
        setMemberstackId(memberstackId);

        // Preload scripts
        const scriptsPromises = Object.values(categories).map(category =>
          scriptService.getScripts(teamId, memberstackId, category.type as Category)
        );
        await Promise.all(scriptsPromises);

        setIsLoading(false);
      } catch (error) {
        console.error('Error initializing data:', error);
        setIsLoading(false);
      }
    };

    initializeData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ScriptUploader teamId={teamId} memberstackId={memberstackId} />
    </main>
  );
}
