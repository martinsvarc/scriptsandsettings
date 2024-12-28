'use client'

import React from 'react';
import { SavedScript, ScriptSection } from '@/types';

interface ScriptDisplayProps {
  script: SavedScript;
  onEdit?: () => void;
}

const renderSection = (section: ScriptSection) => {
  switch (section.type) {
    case 'text':
      return <div className="my-4">{section.content}</div>;
    
    case 'list':
      return (
        <ul className="list-disc ml-6 my-4">
          {section.items?.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      );
    
    case 'numbered':
      return (
        <ol className="list-decimal ml-6 my-4">
          {section.items?.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ol>
      );
    
    case 'condition':
      return (
        <div className="my-4 bg-gray-50 p-4 rounded-lg">
          <div className="font-medium text-gray-700">[{section.condition?.trigger}]</div>
          <div className="mt-2">{section.condition?.response}</div>
        </div>
      );

    case 'heading':
      return <h3 className="text-xl font-bold my-4">{section.content}</h3>;
    
    default:
      return null;
  }
};

const ScriptDisplay: React.FC<ScriptDisplayProps> = ({ script, onEdit }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">{script.name}</h1>
        {onEdit && (
          <button
            onClick={onEdit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Edit Script
          </button>
        )}
      </div>
      <div className="prose max-w-none">
        {script.content.sections.map((section, index) => (
          <div key={index}>
            {section.title && section.timing && (
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <span className="text-sm text-gray-500">({section.timing})</span>
              </div>
            )}
            {renderSection(section)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScriptDisplay;
