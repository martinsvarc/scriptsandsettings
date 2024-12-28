import React from 'react';
import { Template } from '@/types';

interface ScriptDisplayProps {
  script: Template;
}

const ScriptDisplay: React.FC<ScriptDisplayProps> = ({ script }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{script.title}</h1>
      <p className="text-gray-600 mb-8">{script.preview}</p>
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: script.fullScript }} 
      />
    </div>
  );
};

export default ScriptDisplay;
