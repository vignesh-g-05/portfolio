import "./globals.css";

import { Fredoka, JetBrains_Mono, Outfit, Quicksand } from "next/font/google";

import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { TooltipProvider } from "@/components/ui/shadcn/tooltip";

export const metadata: Metadata = {
  title: "Vignesh G",
  description: "Portfolio app of Vignesh G",
  icons: {
    icon: "/icon.svg",
  },
};

export const outfit = Outfit({ subsets: ["latin"] });
export const quicksand = Quicksand({ subsets: ["latin"] });
export const jetbrains = JetBrains_Mono({ subsets: ["latin"] });
export const fredoka = Fredoka({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark scrollbar-minimal bg-background text-foreground font-sans antialiased"
    >
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "var(--secondary)",
              color: "var(--secondary-foreground)",
            },
            duration: 5000,
            success: {
              iconTheme: {
                primary: "var(--chart-3)",
                secondary: "var(--secondary)",
              },
            },
          }}
        />
      </body>
    </html>
  );
}
