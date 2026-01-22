"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

type logoProps = {
  width: number
  height: number
}

export default function Logo({ width, height }: logoProps) {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Image priority width={width} height={height} src="/logo_new.png" alt="autelar-logo" />
    </div>
  )
}
