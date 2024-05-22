"use client";
import "@uiw/react-markdown-preview/markdown.css";
import "@uiw/react-md-editor/markdown-editor.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { ArticlesType } from "~/server/db/schema";
import { postArticle } from "~/server/queries";

export default function ArticleForm() {
  const {
    register,
    control,
    handleSubmit,

    reset,
    formState: { isSubmitSuccessful },
  } = useForm<ArticlesType>();
  const onSubmit: SubmitHandler<ArticlesType> = async (data) => {
    await postArticle(data);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      redirect("/");
    }
  }, [isSubmitSuccessful, reset]);
  const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
    ssr: false,
  });
  return (
    <div className="flex w-5/6 flex-col items-center rounded-xl bg-slate-500 p-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        <div>
          <div>category:</div>

          <input
            defaultValue=""
            {...register("category", {})}
            className="  w-2/3 p-1 text-lg"
          />
        </div>
        <div>Author:</div>
        <div>
          <input
            defaultValue=""
            {...register("createdById", {})}
            className="  w-2/3 p-1 text-lg"
          />
        </div>
        <div>Content:</div>

        <div data-color-mode="light">
          <Controller
            control={control}
            name="text"
            render={({ field }) => <MDEditor {...field} />}
          />
        </div>
        <div className="abs relative flex w-full flex-col items-center justify-center">
          <Link
            href={"/employees"}
            className="absolute left-0 w-min self-start text-slate-50 hover:text-pink-300"
          >
            back
          </Link>
          <input
            type="submit"
            value="submit"
            className="rounded bg-purple-400 p-5 hover:cursor-pointer "
          />
        </div>
      </form>
    </div>
  );
}
