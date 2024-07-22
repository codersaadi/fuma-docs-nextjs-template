'use client'
import Layout from '@/components/Layout'
import { ThemeProvider } from 'next-themes';

import { PrimeReactProvider } from 'primereact/api';
        
export function Provider({ children }: { children: React.ReactNode }) {

return <ThemeProvider defaultTheme="system"  attribute="class">
  <PrimeReactProvider>

<Layout>{children}</Layout>

</PrimeReactProvider>
</ThemeProvider>
}