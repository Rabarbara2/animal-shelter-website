"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { ArticlesType } from "~/server/db/schema";
import { postArticle, postAnimals } from "~/server/queries";
import { redirect } from "next/navigation";
import React from "react";

export default function ArticleForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
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

  return (
    <div className="flex w-5/6 items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col gap-2"
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
        <div>
          <textarea
            {...register("text", {})}
            className="  h-auto w-2/3 p-1 text-lg"
          />
        </div>
        <input type="submit" value="submit" className="bg-purple-400 p-5" />
      </form>
    </div>
  );
}

/*
dodaj ten fajny edytor tekstu zainstaluj go
zrób żeby bazodano trzymało ten tekst
w wyświetlaniu artykuły dodaj wyświetlanie tego tekstu specjalnego
posprzątaj troche
*/
