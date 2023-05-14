/* eslint-disable react/no-unescaped-entities */
import { useIsFontReady } from "@/hooks/useIsFontReady";
import { LIGHT_COLORS } from "@/lib/colors";
import { shuffleArray } from "@/lib/shuffleArray";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

import { buttonVariants } from "./ui/Button";
import { RainbowHighlight } from "./ui/RainbowHighlight";

export default function About() {
  const isFontReady = useIsFontReady();
  const [colors, setColors] = useState<string[]>([]);

  useEffect(() => {
    setColors(shuffleArray(LIGHT_COLORS));
  }, []);

  return (
    <div className="pt-10 mx-auto text-amber-200">
      <div className="lg:flex lg:flex-wrap lg:mx-4">
        <div>
          <RoughNotationGroup show={isFontReady}>
            <h1 className="text-2xl font-bold text-gray-900 lg:text-4xl">
              Hello! I'm Ibrahim, a{" "}
              <RainbowHighlight color={colors[0]}>Frontend</RainbowHighlight>{" "}
              developer, and{" "}
              <RainbowHighlight color={colors[1]}>Technical</RainbowHighlight>{" "}
              writer.
            </h1>
            <div className="text-gray-700 mt-7">
              <p className="my-2">
                Welcome to my digital garden, where I share my journey of
                personal growth as a developer and my pursuit of a{" "}
                <RainbowHighlight color={colors[4]}>
                  successful tech career.
                </RainbowHighlight>
              </p>
              <p className="my-2">
                My primary goal is to build solutions that address{" "}
                <RainbowHighlight color={colors[3]}>
                  business problems,
                </RainbowHighlight>{" "}
                which I achieve by creating delightful{" "}
                <RainbowHighlight color={colors[4]}>
                  frontend experiences,
                </RainbowHighlight>{" "}
                high-performing applications, and{" "}
                <RainbowHighlight color={colors[5]}>
                  technical content.
                </RainbowHighlight>{" "}
              </p>

              <p className="my-2">
                Through my experiences, I have had the opportunity to work with
                specialized and cross-functional teams of varying sizes across
                different time zones. As a result, I have developed a working
                style that emphasizes{" "}
                <RainbowHighlight color={colors[5]}>
                  flexibility,
                </RainbowHighlight>{" "}
                clarity, and{" "}
                <RainbowHighlight color={colors[0]}>
                  collaboration,
                </RainbowHighlight>
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 lg:text-3xl mt-5">
                Writing
              </h2>

              <p className="my-2">
                I'm giving it a shot at writing weekly notes. You can browse the
                full{" "}
                <RoughNotation
                  type="circle"
                  multiline={true}
                  animationDuration={1500}
                  animationDelay={1700}
                  strokeWidth={2}
                  iterations={3}
                  padding={5}
                  color={colors[1]}
                >
                  <a
                    href="/writing"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                  >
                    archive,
                  </a>
                </RoughNotation>{" "}
                for as long as I manage to keep it up 😅. I also occasionally{" "}
                <RoughNotation
                  type="circle"
                  multiline={true}
                  animationDuration={1500}
                  animationDelay={1700}
                  strokeWidth={2}
                  iterations={3}
                  padding={5}
                  color={colors[4]}
                >
                  <a
                    href="https://dev.to/ibrahimraimi"
                    className="font-medium text-gray-700 transition-colors hover:text-gray-900 focus:text-gray-900 focus:outline-none"
                  >
                    blog
                  </a>
                </RoughNotation>{" "}
                about tech things that I've learnt or enjoyed, though the
                frequency of posts has really decreased lately.
              </p>
            </div>
          </RoughNotationGroup>

          <div className="mt-7 mb-7 space-y-3 md:space-y-0 md:space-x-3 md:flex">
            <Link
              href="https://github.com/ibrahimraimi"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ intent: "secondary", size: "large" }),
                "mr-4"
              )}
            >
              View GitHub
            </Link>

            <Link
              href="https://linkedin.com/in/ibrahimraimi"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "large", outline: true }))}
            >
              View LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
