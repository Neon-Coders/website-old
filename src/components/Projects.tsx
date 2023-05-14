/* eslint-disable react/no-unescaped-entities */
import { cn } from "@/lib/utils";
import { MainLinkItem } from "@/types";
import Link from "next/link";

interface MainProjectProps {
  items?: MainLinkItem[];
}

export default function Projects({ items }: MainProjectProps) {
  return (
    <div className="pt-10 mx-auto text-amber-200">
      <div className="lg:flex lg:flex-wrap lg:mx-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
            Projects
          </h1>

          <div className="text-gray-700 mt-1">
            <p>Some of the side projects I'm currently working on</p>
          </div>

          <div className="mt-7 flex flex-col">
            {items?.length ? (
              <div>
                {items.map((item, idx) => (
                  <>
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      key={idx}
                      className={cn(
                        "text-md font-semibold underline text-gray-800"
                      )}
                    >
                      {item.title}
                    </Link>

                    <p className="font-medium text-gray-500 pb-4">
                      {item.description}
                    </p>
                  </>
                ))}
              </div>
            ) : (
              "No Links"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
