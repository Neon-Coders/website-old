import About from "@/components/About";
import Footer from "@/components/Footer";
import { MainNav } from "@/components/MainNav";
import { footerConfig } from "@/config/Footer";
import { navConfig } from "@/config/Nav";
import { Inter } from "next/font/google";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const seoOptions = {
  url: "https://ibrahimraimi.vercel.app",
  image: "https://i.ibb.co/ZfGgvBv/screely-1684023911481.png",
};

export default function Home() {
  return (
    <>
      <NextSeo
        title="Ibrahim Raimi"
        description="I'm Ibrahim, a software engineer and technical writer. I build solutions to business problems by creating delightful frontend experiences 
          and performant applications."
        openGraph={{
          images: [
            {
              url: seoOptions.image,
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
          site: seoOptions.url,
          handle: "@ibrahimraimi_",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/favicon.ico",
          },
        ]}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Ibrahim Raimi",
          },
        ]}
      />
      <div
        className={`container max-w-5xl flex flex-col min-h-screen  antialiased ${inter.className}`}
      >
        <header className="sticky top-0 z-40 bg-white">
          <div className="border-b border-b-slate-200">
            <MainNav items={navConfig.mainLink} />
          </div>
        </header>
        <main className="flex-1">
          <About />
        </main>
        <Footer items={footerConfig.mainLink} />
      </div>
    </>
  );
}
