'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async () => {
    const res = await fetch('/api/admin-login', {
      method: 'POST',
      body: JSON.stringify({ password }),
    })

    if (res.ok) {
      router.push('/admin')
    } else {
      alert('Invalid password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-6 border rounded-lg">
        <input
          type="password"
          placeholder="Enter password"
          className="border p-2 mb-4 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-black text-white px-4 py-2">
          Login
        </button>
      </div>
    </div>
  )
}