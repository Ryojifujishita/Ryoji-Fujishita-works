'use client'

import { useEffect } from 'react'

export default function AdminPage() {
  useEffect(() => {
    // TinaCMSの管理画面にリダイレクト
    window.location.href = 'http://localhost:4001/admin/index.html'
  }, [])

  return <div>Redirecting to TinaCMS admin...</div>
} 