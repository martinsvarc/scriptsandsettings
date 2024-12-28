import React from 'react';
import { Template } from '@/types';

interface ScriptDisplayProps {
  script: Template;
}

const ScriptDisplay: React.FC<ScriptDisplayProps> = ({ script }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Pro převedení HTML string na React elementy používáme dangerouslySetInnerHTML */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: script.fullScript }} 
      />
    </div>
  );
};

export default ScriptDisplay;
