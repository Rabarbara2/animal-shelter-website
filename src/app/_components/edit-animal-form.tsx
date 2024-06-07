"use client";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { AnimalGenders, AnimalTypes, AnimalsType } from "~/server/db/schema";
import {
  AnimalResponse,
  ImagesResponse,
  asignImagetoAnimal,
  deleteImage,
  updateAnimals,
} from "~/server/queries";

import Link from "next/link";
import TrashBinIcon from "../assets/trash-bin";
import { UploadDropzone } from "../utils/uploadthing";
import { format } from "date-fns";

type FormTestProps = {
  images: ImagesResponse;
  animal: AnimalResponse;
};

type FormType = AnimalsType & {
  imageId: number;
};

export default function EditAnimalForm({ images, animal }: FormTestProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<FormType>({
    defaultValues: {
      ...animal,
      dateOfBirth: format(new Date(animal.dateOfBirth), "yyyy-MM"),
    },
  });

  const onSubmit: SubmitHandler<FormType> = async (data) => {
    const { imageId, dateOfBirth, ...animalData } = data;
    console.log(data);
    const addedCat = await updateAnimals({
      ...animalData,
      dateOfBirth: new Date(dateOfBirth).toJSON(),
      id: animal.id,
    });
    console.log(addedCat);
    if (addedCat?.id) {
      await asignImagetoAnimal(addedCat.id, imageId);
    }
  };
  console.log(watch("dateOfBirth"), new Date(watch("dateOfBirth")).toJSON());

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      redirect("/employees");
    }
  }, [isSubmitSuccessful, reset]);

  console.log(animal.dateOfBirth);

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
            <label htmlFor="dateOfBirth">date of birth: </label>

            <input
              id="dateOfBirth"
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

            <input {...register("race", {})} className="w-full p-1 text-lg" />
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
                defaultChecked={animal?.animalImages.id === image.id}
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
          className="w-1/5 min-w-fit cursor-pointer rounded bg-orange-500 p-3 text-2xl font-medium tracking-wide disabled:bg-slate-500"
          value="edit"
        />
      </div>
    </form>
  );
}
