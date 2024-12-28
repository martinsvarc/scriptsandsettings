'use client'
import Image from 'next/image'
import { Category, HeaderProps } from '@/types'

export default function Header({
  step,
  selectedCategory,
  scriptTitle
}: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4 bg-white border-b">
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <div>
          <h1 className="text-xl font-bold">Script Uploader</h1>
          <div className="text-sm text-gray-500">
            Step {step}: {selectedCategory ? `${selectedCategory} Scripts` : 'Select Category'}
            {scriptTitle && ` - ${scriptTitle}`}
          </div>
        </div>
      </div>
    </header>
  )
}
