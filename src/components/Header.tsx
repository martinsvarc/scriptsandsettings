'use client'
import Image from 'next/image'
import { Category, HeaderProps } from '@/types'

// Extracted logic for generating title
const generateTitle = (step: number, selectedCategory?: Category): string => {
  switch (step) {
    case 1: return "Upload Scripts for Your Team"
    case 2: return selectedCategory || ""
    case 3: return selectedCategory || ""
    default: return ""
  }
}

// Extracted logic for generating subheadline
const generateSubheadline = (
  step: number, 
  isUploadMode: boolean, 
  selectedTemplate?: string
): string => {
  switch (step) {
    case 1: 
      return "Align and Train Your Team on Your Own Scripts or Proven Templates"
    case 2: 
      return "Prepare your script"
    case 3: 
      if (isUploadMode) {
        return "Your Uploaded Script. Make any edits you need, then click 'Save' when you're done."
      }
      if (selectedTemplate) {
        return "Make any edits you need, then click 'Save' when you're done."
      }
      return "Choose One of Our Templates."
    default: 
      return ""
  }
}

export default function Header({ 
  step, 
  selectedCategory, 
  isUploadMode, 
  selectedTemplate 
}: HeaderProps) {
  // Generate title and subheadline using extracted functions
  const title = generateTitle(step, selectedCategory)
  const subheadline = generateSubheadline(step, isUploadMode, selectedTemplate)

  return (
    <header 
      className="w-full bg-white rounded-[20px] px-4 py-2" 
      aria-label="Script Upload Header"
    >
      <div className="flex items-start space-x-2">
        <div className="flex-shrink-0 mt-[2px]">
          <Image
            src="https://res.cloudinary.com/drkudvyog/image/upload/v1733749804/Script_icon_qqt4mv.png"
            alt="Script Upload Icon"
            width={24}
            height={24}
            className="object-contain"
            priority // Optimize image loading for above-the-fold content
            loading="eager"
          />
        </div>
        <div className="flex-1">
          <h1 
            className="text-[18px] md:text-[16px] sm:text-[14px] font-extrabold font-montserrat leading-tight text-[#5b06be] mb-1"
            aria-level={1}
          >
            {title.endsWith('.') ? title.slice(0, -1) : title}
          </h1>
          <p 
            className="text-[11px] md:text-[10px] sm:text-[9px] font-bold font-montserrat text-gray-600 leading-snug"
            aria-description="Header description"
          >
            {subheadline}
          </p>
        </div>
      </div>
    </header>
  )
}

// Recommended additional improvements for @/types/index.ts
interface HeaderProps {
  step: number;
  selectedCategory?: Category;
  isUploadMode: boolean;
  selectedTemplate?: string;
}

// Type guard for additional runtime type checking
function isValidHeaderProps(props: Partial<HeaderProps>): props is HeaderProps {
  return (
    props.step !== undefined && 
    typeof props.step === 'number' &&
    typeof props.isUploadMode === 'boolean'
  )
}
