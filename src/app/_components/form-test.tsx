"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { CatGenders, CatsType } from "~/server/db/schema";
import { postCats } from "~/server/queries";
import { redirect } from "next/navigation";
import React from "react";
import { revalidatePath } from "next/cache";
import ImageTest from "./image-test";

export default function FormTest() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<CatsType>();
  const onSubmit: SubmitHandler<CatsType> = async (data) => {
    await postCats(data);
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      redirect("/");
    }
  }, [isSubmitSuccessful, reset]);

  const imageUrl = watch("image");

  return (
    <div className="flex w-5/6 items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-1/2 flex-col gap-2"
      >
        <div>
          <div>name:</div>

          <input
            defaultValue=""
            {...register("name", {})}
            className="  w-2/3 p-1 text-lg"
          />
        </div>
        <div>
          <div>colour:</div>

          <input
            defaultValue=""
            {...register("colour", {})}
            className=" w-2/3 p-1 text-lg "
          />
        </div>
        <div>
          <div>image link: </div>

          <input
            defaultValue=""
            {...register("image", {})}
            className=" w-2/3 p-1 text-lg "
          />
        </div>
        <div>
          <div>gender: </div>

          <select {...register("gender", {})} className=" w-2/3 p-1 text-lg ">
            <option value={CatGenders.MALE}>Male</option>
            <option value={CatGenders.FEMALE}>Female</option>
          </select>
        </div>
        <div>
          <div>date of birth: </div>

          <input
            type="month"
            {...register("dateOfBirth", {})}
            className=" w-2/3 p-1 text-lg"
          />
        </div>
        <label>
          estimated?
          <input
            type="checkbox"
            {...register("isDOBEstimated", {})}
            className="m-2 p-1 text-lg"
          />
        </label>
        <div>
          <div>fur length: </div>
          <select {...register("furLength", {})} className=" w-2/3 p-1 text-lg">
            <option value="bald">Bald</option>
            <option value="short">Short</option>
            <option value="medium">Medium</option>
            <option value="long">Long</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div>
          <div>race: </div>

          <input
            defaultValue=""
            {...register("race", {})}
            className="w-2/3 p-1 text-lg"
          />
        </div>

        <input
          type="submit"
          disabled={isSubmitting}
          className="w-fit cursor-pointer rounded bg-lime-500 p-3 disabled:bg-slate-500"
          value="submit"
        />
      </form>
      <div className="flex w-1/2 flex-col items-center justify-center gap-4 text-3xl text-white">
        Image Preview
        <div className="relative h-72 w-64">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="bad image"
              fill
              loader={(loader) => loader.src}
              className="🐷 h-72 w-64 rounded border-b border-slate-800 object-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
}
