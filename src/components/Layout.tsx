import { MainNav } from "@/components/MainNav";
import { navConfig } from "@/config/Nav";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={`container max-w-5xl flex flex-col min-h-screen antialiased ${inter.variable}`}
    >
      <header className="sticky top-0 z-40 bg-white">
        <div className="border-b border-b-slate-200">
          <MainNav items={navConfig.mainLink} />
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}
