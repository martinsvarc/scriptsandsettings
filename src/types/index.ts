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

// Pro typy sekcí a podmínek
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
