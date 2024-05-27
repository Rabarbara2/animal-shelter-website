"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnimalGenders, AnimalTypes, AnimalsType } from "~/server/db/schema";
import {
  ImagesResponse,
  asignImagetoAnimal,
  deleteImage,
  postAnimals,
} from "~/server/queries";

import Link from "next/link";
import TrashBinIcon from "../assets/trash-bin";
import { UploadDropzone } from "../utils/uploadthing";

type FormTestProps = {
  images: ImagesResponse;
};

type FormType = AnimalsType & {
  imageId: number;
};

export default function FormTest({ images }: FormTestProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const { imageId, dateOfBirth, ...animalData } = data;
    const addedCat = await postAnimals({
      ...animalData,
      dateOfBirth: new Date(dateOfBirth).toJSON(),
    });
    if (addedCat?.id) {
      await asignImagetoAnimal(addedCat.id, imageId); // TODO
    }
  };
  console.log(watch("dateOfBirth"), new Date(watch("dateOfBirth")).toJSON());

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      redirect("/employees");
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-5/6 flex-col items-center rounded-xl bg-slate-500 p-6"
    >
      <div className="flex w-full flex-row justify-between gap-2 p-6 text-lg">
        <div className="basis-1/2">
          <div className="w-full">
            <div>name:</div>
            <input
              autoComplete="off"
              defaultValue=""
              minLength={2}
              required
              about="miau"
              {...register("name", {})}
              className="w-full p-1 text-lg"
            />
          </div>
          <div className="w-full">
            <div>type:</div>
            <select {...register("type", {})} className=" w-full p-1 text-lg ">
              <option value={AnimalTypes.CAT}>Cat</option>
              <option value={AnimalTypes.DOG}>Dog</option>
              <option value={AnimalTypes.BIRD}>Bird</option>
              <option value={AnimalTypes.LIZARD}>Lizard</option>
              <option value={AnimalTypes.RAT}>Rat</option>
              <option value={AnimalTypes.FROG}>Frog</option>
              <option value={AnimalTypes.OTHER}>Other</option>
            </select>
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
              type="month"
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

        <div className="flex h-fit basis-1/2 flex-col gap-4 p-6 text-xl">
          Upload image:
          <UploadDropzone
            className="rounded-2xl bg-slate-400 p-6 hover:cursor-pointer [&_label]:text-black hover:[&_label]:text-gray-800 [&_svg]:text-gray-100"
            endpoint="animalImageUploader"
            onUploadError={(error) => {
              alert(error);
            }}
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
        </div>
      </div>
      <div className="w-full p-5 text-xl">Choose image:</div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => {
          return (
            <label key={image.id} className="relative w-fit">
              <input
                type="radio"
                value={image.id}
                {...register("imageId")}
                className="absolute m-2 scale-150"
              />
              <TrashBinIcon
                className="absolute right-0 m-2 h-6 fill-red-500 font-bold hover:cursor-pointer"
                onClick={async () => {
                  await deleteImage(image.id);
                  router.refresh();
                }}
              />
              <Image
                src={image.url}
                alt="obrazek"
                width={275}
                height={384}
                className="h-full max-h-64 rounded-md object-cover"
              />
            </label>
          );
        })}
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
          disabled={isSubmitting}
          className="w-1/5 min-w-fit cursor-pointer rounded bg-lime-500 p-3 text-2xl font-medium tracking-wide disabled:bg-slate-500"
          value="submit"
        />
      </div>
    </form>
  );
}
