'use client'

import Image from 'next/image'

interface BlogHeaderImageProps {
  src: string
  alt: string
}

export function BlogHeaderImage({ src, alt }: BlogHeaderImageProps) {
  return (
    <div className="relative h-64 md:h-96 mb-8 bg-gray-100 rounded-sm overflow-hidden">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}