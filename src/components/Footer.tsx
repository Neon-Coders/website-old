import { MainLinkItem } from "@/types";
import Link from "next/link";

interface FooterProps {
  items?: MainLinkItem[];
}

export default function Footer({ items }: FooterProps) {
  return (
    <footer>
      <div className="flex flex-col items-center justify-between gap-4 border-t border-t-slate-200 py-20 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2 md:px-0">
          <p className="text-center font-medium leading-loose md:text-left">
            Built with Next.js, TypeScript, and Tailwind 🖤
          </p>
        </div>

        {items?.length ? (
          <div className="text-center  md:text-left">
            {items?.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline ml-4 underline-offset-4 font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ) : (
          "No Links"
        )}
      </div>
    </footer>
  );
}
