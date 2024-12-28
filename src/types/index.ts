// src/types/index.ts

export type Category = 'Wholesaling' | 'Creative Finance' | 'Agent Outreach' | 'Foreclosure';

export interface Template {
  title: string;        // Nadpis skriptu
  preview: string;      // Krátký popis účelu skriptu
  fullScript: string;   // HTML formátovaný obsah skriptu
}

// Rozšířené typy pro různé části skriptu (pokud byste je potřebovali)
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
