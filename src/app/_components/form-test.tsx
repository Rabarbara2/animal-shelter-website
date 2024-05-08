"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import { AnimalGenders, AnimalsType } from "~/server/db/schema";
import {
  asignImagetoAnimal,
  postAnimals,
  getAnimalImages,
  ImagesResponse,
} from "~/server/queries";
import { redirect } from "next/navigation";
import React from "react";

import { OurFileRouter } from "../api/uploadthing/core";
import { UploadButton, UploadDropzone } from "../utils/uploadthing";

type FormTestProps = {
  images: ImagesResponse;
};

type FormType = AnimalsType & {
  imageId: number;
};

export default function FormTest({ images }: FormTestProps) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const { imageId, ...animalData } = data;
    const addedCat = await postAnimals(animalData);
    if (addedCat?.id) {
      await asignImagetoAnimal(addedCat.id, imageId); // TODO
    }
  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      redirect("/");
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-5/6 flex-col items-center bg-slate-500 p-6"
    >
      <div className="flex w-full flex-row justify-between gap-2 p-6 text-lg">
        <div className="basis-1/2">
          <div className="w-full">
            <div>name:</div>
            <input
              defaultValue=""
              {...register("name", {})}
              className="w-full p-1 text-lg"
            />
          </div>
          <div className="w-full">
            <div>type:</div>
            <input
              defaultValue=""
              {...register("type", {})}
              className="  w-full p-1 text-lg"
            />
          </div>

          <div className="w-full">
            <div>colour:</div>

            <input
              defaultValue=""
              {...register("colour", {})}
              className=" w-full p-1 text-lg "
            />
          </div>

          <div className="w-full">
            <div>gender: </div>

            <select
              {...register("gender", {})}
              className=" w-full p-1 text-lg "
            >
              <option value={AnimalGenders.MALE}>Male</option>
              <option value={AnimalGenders.FEMALE}>Female</option>
              <option value={AnimalGenders.OTHER}>Other</option>
            </select>
          </div>
          <div className="w-full">
            <div>date of birth: </div>

            <input
              type="date"
              {...register("dateOfBirth", {})}
              className=" w-full p-1 text-lg"
            />
          </div>

          <div className="w-full">
            <div>fur length: </div>
            <select
              {...register("furLength", {})}
              className=" w-full p-1 text-lg"
            >
              <option value="bald">Bald</option>
              <option value="short">Short</option>
              <option value="medium">Medium</option>
              <option value="long">Long</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
          <div className="w-full">
            <div>race: </div>

            <input
              defaultValue=""
              {...register("race", {})}
              className="w-full p-1 text-lg"
            />
          </div>
        </div>

        <div className="flex basis-1/2 flex-col gap-4 p-6 text-xl">
          Upload image:
          <UploadDropzone
            endpoint="animalImageUploader"
            onUploadError={() => {
              alert("upload error");
            }}
            onClientUploadComplete={() => {
              location.reload();
            }}
          />
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-4 p-4">
        {images.map((image) => {
          return (
            <label key={image.id} className="relative w-fit">
              <input
                type="radio"
                value={image.id}
                {...register("imageId")}
                className="absolute m-2 scale-150"
              />

              <Image
                src={image.url}
                alt="obrazek"
                width={288}
                height={384}
                className="h-full max-h-64 rounded-md object-cover"
              />
            </label>
          );
        })}
      </div>
      <input
        type="submit"
        disabled={isSubmitting}
        className="w-1/5 cursor-pointer rounded bg-lime-500 p-3 text-2xl font-medium tracking-wide disabled:bg-slate-500"
        value="submit"
      />
    </form>
  );
}
