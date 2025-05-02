"use client";

import React from "react";
import { TinaCMS, TinaProvider } from "tinacms";

const cms = new TinaCMS({
  enabled: true,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || '',
});

export function TinaWrapper({ children }: { children: React.ReactNode }) {
  return (
    <TinaProvider cms={cms}>
      {children}
    </TinaProvider>
  );
} 