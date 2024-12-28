export type Category = 'Wholesaling' | 'Creative Finance' | 'Agent Outreach' | 'Foreclosure';

export interface CategoryData {
  type: Category;
  title: string;
  description: string;
}

export interface Template {
  title: string;
  preview: string;
  fullScript: string;
}

export interface SavedScript {
  id: string;
  name: string;
  content: string;
  category: Category;
  teamId: string;
  memberstackId: string;
  createdAt: string;
  updatedAt: string;
}

export interface HeaderProps {
  step: number;
  selectedCategory: Category | null;
  scriptTitle?: string;
}

export interface Section {
  title: string;
  timing: string;
  mainText?: string;
  conditions?: Condition[];
  bullets?: string[];
  numbered?: string[];
  subsections?: Subsection[];
}

export interface Condition {
  trigger: string;
  response: string;
}

export interface Subsection {
  title: string;
  bullets: string[];
}

export interface FormattingToolbarProps {
  editorRef: React.RefObject<HTMLDivElement>;
  onRevert: () => void;
  hasChanges: boolean;
}

export interface ScriptDisplayProps {
  script: Template;
  content: string;
}

export interface ScriptUploaderProps {
  teamId: string;
  memberstackId: string;
}

export interface ScriptFolderProps {
  scripts: SavedScript[];
  onScriptSelect: (script: SavedScript) => void;
  onScriptDelete: (scriptId: string) => Promise<void>;
  onScriptRename: (scriptId: string, newName: string) => Promise<void>;
}

export interface ScriptActionsProps {
  onDelete: () => void;
  onRename: (newName: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface DocumentUploaderProps {
  onUpload: (content: string) => void;
  onError: (error: string) => void;
}
