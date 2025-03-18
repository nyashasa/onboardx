import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Header } from '@/components/Header';
import { Sidebar } from '@/components/Sidebar';
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OnboardX - Streamline Your Onboarding",
  description: "A modern onboarding platform for businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            {/* Fixed Header */}
            <Header className="fixed top-0 w-full z-50 bg-background border-b" />
            
            <div className="flex pt-14"> {/* Adjust based on header height */}
              {/* Fixed Sidebar */}
              <aside className="hidden md:block fixed top-14 left-0 h-[calc(100vh-3.5rem)] w-64 border-r bg-background">
                <Sidebar />
              </aside>
              
              {/* Main content area - scrollable */}
              <main className="flex-1 ml-0 md:ml-64 p-6 overflow-y-auto min-h-[calc(100vh-3.5rem)]">
                {children}
              </main>
            </div>
            
            <footer className="border-t py-4 text-center text-sm text-muted-foreground ml-0 md:ml-64">
              <div className="container">
                © {new Date().getFullYear()} OnboardX. All rights reserved.
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
