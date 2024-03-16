"use client";
import Image from "next/image";
import adopt from "../assets/Foster.jpg";
import Link from "next/link";
import React, { useState } from "react";

export default function NewsCard(props: {
  category: string;
  text: string;
  createdAt: Date;
}) {
  const [isActive, setIsActive] = useState(false);
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
              {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
            </div>
            <div className="w-fit text-sm text-stone-600">
              {props.createdAt.toLocaleString([], {
                year: "numeric",
                month: "numeric",
                day: "numeric",
              })}
            </div>
            <div />
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: props.text,
            }}
            className={`w-auto overflow-hidden whitespace-pre-wrap text-justify text-lg font-normal text-zinc-800 transition-all duration-700 ease-in-out
              ${isActive ? " max-h-[1500px]" : "max-h-[140px]"}`}
          ></div>
        </div>

        <button
          onClick={() => setIsActive(!isActive)}
          className="h-16 w-fit cursor-pointer select-none justify-center self-end rounded-xl bg-pink-950 p-5 text-center text-xl font-medium text-white shadow"
        >
          {isActive ? "Close" : "Read more"}
        </button>
      </div>
    </div>
  );
}
