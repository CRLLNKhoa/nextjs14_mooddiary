import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import Musicbar from "@/components/layout/Musicbar";
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: {
    default: "Nhật kí cảm xúc",
    template: "%x | Nhật kí cảm xúc",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"font-san"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <main className="relative grid grid-cols-5 h-screen">
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black p-4 flex justify-between items-center">

            </div> */}
            <div className="hidden lg:block"><Sidebar /></div>
            <div className="col-span-5 lg:col-span-3 bg-black overflow-y-auto menuSide">{children}</div>
            <div className="hidden lg:block"><Musicbar /></div>
          </main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}