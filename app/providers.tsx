'use client'

import React from 'react';
import { TinaEditProvider } from 'tinacms/dist/edit-state'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TinaEditProvider
      showEditButton={false}
      editMode={<>{children}</>}
    >
      {children}
    </TinaEditProvider>
  )
} 