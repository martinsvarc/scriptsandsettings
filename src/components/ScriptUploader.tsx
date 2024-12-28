'use client'

import React, { useState } from 'react';
import CategorySelector from './CategorySelector';
import { Category } from '@/types';
import { scriptService } from '@/services/scriptService';

interface ScriptUploaderProps {
  teamId: string;
  memberstackId: string;
}

const ScriptUploader: React.FC<ScriptUploaderProps> = ({ teamId, memberstackId }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [scriptContent, setScriptContent] = useState<string>('');

  const handleCategorySelect = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleUpload = async () => {
    if (!selectedCategory) {
      alert('Please select a category first');
      return;
    }

    try {
      await scriptService.createScript(
        teamId,
        memberstackId,
        'New Script', // Název skriptu
        scriptContent,
        selectedCategory,
        false // isPrimary
      );
      alert('Script uploaded successfully!');
      setScriptContent('');
      setSelectedCategory(null);
    } catch (error) {
      console.error('Error uploading script:', error);
      alert('Failed to upload script');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Script Uploader</h1>
      
      <div className="mb-6">
        <CategorySelector
          onSelect={handleCategorySelect}
          selectedCategory={selectedCategory || undefined}
        />
      </div>

      <div className="mb-6">
        <textarea
          value={scriptContent}
          onChange={(e) => setScriptContent(e.target.value)}
          placeholder="Paste your script here..."
          className="w-full h-64 p-4 border rounded-lg"
        />
      </div>

      <button
        onClick={handleUpload}
        disabled={!selectedCategory || !scriptContent}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50"
      >
        Upload Script
      </button>
    </div>
  );
};

export default ScriptUploader;
