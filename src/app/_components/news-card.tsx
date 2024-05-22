"use client";
import Image from "next/image";
import { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import adopt from "../assets/Foster.jpg";

type NewsCardProps = {
  category: string;
  text: string;
  createdAt: Date;
};

export default function NewsCard({ category, createdAt, text }: NewsCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative flex h-fit w-5/6 flex-col gap-4 rounded-xl bg-red-50 p-6 shadow lg:flex-row lg:items-stretch">
      <Image
        src={adopt}
        alt="animal"
        className="h-64 w-auto rounded-xl object-cover object-top"
      />
      <div className="flex flex-col justify-between gap-8">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-fit rounded bg-pink-950 p-2 text-base font-semibold text-white">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
            <div className="w-fit text-sm text-stone-600">
              {createdAt.toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </div>
          </div>
          <div
            className={`transition-all duration-700 ease-in-out ${!expanded ? "max-h-[200px] overflow-hidden" : "max-h-[6000px]"}`}
          >
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: (props) => <h1 {...props} className="py-2 text-3xl" />,
                h2: (props) => <h1 {...props} className="py-1 text-xl" />,
                h3: (props) => <h1 {...props} className="py-1 text-lg " />,
                p: (props) => <h1 {...props} className="mr-10 text-justify" />,
              }}
            >
              {text}
            </Markdown>
          </div>

          {/* <div
            dangerouslySetInnerHTML={{
              __html: text,
            }}
            className={`w-auto overflow-hidden whitespace-pre-wrap text-justify text-lg font-normal text-zinc-800 transition-all duration-700 ease-in-out
              ${isActive ? " max-h-[1500px]" : "max-h-[140px]"}`}
          ></div> */}
        </div>

        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="h-16 w-fit cursor-pointer select-none justify-center self-end rounded-xl bg-pink-950 p-5 text-center text-xl font-medium text-white shadow"
        >
          {expanded ? "Close" : "Read more"}
        </button>
      </div>
    </div>
  );
}
