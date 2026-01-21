"use client"

import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Logo() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contato')
  }

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Image priority width={240} height={49} src="/logo.png" alt="autelar-logo" />
    </div>
  )
}
