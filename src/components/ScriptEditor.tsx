'use client'

import React, { useState, useEffect } from 'react'
import { SavedScript, ScriptSection, SectionType } from '@/types'
import { PlusCircle, Trash2, Clock, List, MessageSquare, Type } from 'lucide-react'

// Pomocná funkce pro generování ID
const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

interface SectionEditorProps {
  section: ScriptSection
  onUpdate: (section: ScriptSection) => void
  onDelete: () => void
}

const SectionEditor: React.FC<SectionEditorProps> = ({ section, onUpdate, onDelete }) => {
  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    onUpdate({
      ...section,
      content: e.target.value
    })
  }

  const handleItemChange = (index: number, value: string) => {
    if (!section.items) return
    const newItems = [...section.items]
    newItems[index] = value
    onUpdate({
      ...section,
      items: newItems
    })
  }

  const addItem = () => {
    onUpdate({
      ...section,
      items: [...(section.items || []), '']
    })
  }

  const removeItem = (index: number) => {
    if (!section.items) return
    const newItems = section.items.filter((_, i) => i !== index)
    onUpdate({
      ...section,
      items: newItems
    })
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {section.type === 'text' && <Type size={20} />}
          {section.type === 'list' && <List size={20} />}
          {section.type === 'condition' && <MessageSquare size={20} />}
          <input
            type="text"
            value={section.title || ''}
            onChange={(e) => onUpdate({ ...section, title: e.target.value })}
            placeholder="Section Title"
            className="border rounded px-2 py-1"
          />
          {section.timing !== undefined && (
            <div className="flex items-center">
              <Clock size={16} className="mr-1" />
              <input
                type="text"
                value={section.timing}
                onChange={(e) => onUpdate({ ...section, timing: e.target.value })}
                placeholder="Timing"
                className="border rounded px-2 py-1 w-24"
              />
            </div>
          )}
        </div>
        <button onClick={onDelete} className="text-red-500">
          <Trash2 size={20} />
        </button>
      </div>

      {section.type === 'text' && (
        <textarea
          value={section.content || ''}
          onChange={handleContentChange}
          placeholder="Enter text content..."
          className="w-full h-32 border rounded p-2"
        />
      )}

      {(section.type === 'list' || section.type === 'numbered') && (
        <div className="space-y-2">
          {section.items?.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span>{section.type === 'numbered' ? `${index + 1}.` : '•'}</span>
              <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                className="flex-1 border rounded px-2 py-1"
              />
              <button onClick={() => removeItem(index)} className="text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <button
            onClick={addItem}
            className="flex items-center space-x-1 text-blue-500"
          >
            <PlusCircle size={16} />
            <span>Add Item</span>
          </button>
        </div>
      )}

      {section.type === 'condition' && section.condition && (
        <div className="space-y-2">
          <div>
            <label className="block text-sm font-medium">Trigger:</label>
            <input
              type="text"
              value={section.condition.trigger}
              onChange={(e) =>
                onUpdate({
                  ...section,
                  condition: { ...section.condition!, trigger: e.target.value }
                })
              }
              className="w-full border rounded px-2 py-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Response:</label>
            <textarea
              value={section.condition.response}
              onChange={(e) =>
                onUpdate({
                  ...section,
                  condition: { ...section.condition!, response: e.target.value }
                })
              }
              className="w-full h-24 border rounded p-2"
            />
          </div>
        </div>
      )}
    </div>
  )
}

const ScriptEditor: React.FC<{ script: SavedScript; onSave: (script: SavedScript) => Promise<void> }> = ({
  script,
  onSave
}) => {
  const [sections, setSections] = useState<ScriptSection[]>(script.content.sections)
  const [name, setName] = useState(script.name)

  const addSection = (type: SectionType) => {
    const newSection: ScriptSection = {
      id: generateId(), // Použití naší funkce pro generování ID
      type,
      title: '',
      content: '',
      items: type === 'list' || type === 'numbered' ? [''] : undefined,
      condition: type === 'condition' ? { trigger: '', response: '' } : undefined,
      timing: ''
    }
    setSections([...sections, newSection])
  }

  const updateSection = (id: string, updatedSection: ScriptSection) => {
    setSections(sections.map(section => 
      section.id === id ? updatedSection : section
    ))
  }

  const deleteSection = (id: string) => {
    setSections(sections.filter(section => section.id !== id))
  }

  const handleSave = async () => {
    const updatedScript: SavedScript = {
      ...script,
      name,
      content: { sections }
    }
    await onSave(updatedScript)
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-xl font-bold w-full border-b-2 border-gray-200 focus:border-blue-500 outline-none pb-2"
          placeholder="Script Name"
        />
      </div>

      <div className="space-y-4">
        {sections.map(section => (
          <SectionEditor
            key={section.id}
            section={section}
            onUpdate={(updatedSection) => updateSection(section.id, updatedSection)}
            onDelete={() => deleteSection(section.id)}
          />
        ))}
      </div>

      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => addSection('text')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Text
        </button>
        <button
          onClick={() => addSection('list')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add List
        </button>
        <button
          onClick={() => addSection('numbered')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Numbered List
        </button>
        <button
          onClick={() => addSection('condition')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add Condition
        </button>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSave}
          className="px-6 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
        >
          Save Script
        </button>
      </div>
    </div>
  )
}

export default ScriptEditor
