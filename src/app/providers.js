'use client';

import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';

export default function Providers({ children }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            {children}
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        border: '1px solid var(--border)',
                        background: 'var(--popover)',
                        color: 'var(--popover-foreground)',
                    },
                }}
            />
        </ThemeProvider>
    );
}
