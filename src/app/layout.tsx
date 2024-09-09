"use client";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface RootLayoutProps {
  modals: React.ReactNode;
  children: React.ReactNode;
}

export default function RootLayout({ children, modals }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pokedex</title>
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          {modals}
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
