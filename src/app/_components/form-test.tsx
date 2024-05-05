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
import { revalidatePath } from "next/cache";

export default function FormTest(props: { images: ImagesResponse }) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<AnimalsType>();
  const onSubmit: SubmitHandler<AnimalsType> = async (data) => {
    const addedCat = await postAnimals(data);
    if (addedCat?.id) {
      await asignImagetoAnimal(addedCat.id, 8); // TODO
    }
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
          <div>name:</div>

          <input
            defaultValue=""
            {...register("name", {})}
            className="  w-2/3 p-1 text-lg"
          />
        </div>
        <div>
          <div>type:</div>

          <input
            defaultValue=""
            {...register("type", {})}
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
        </div>
        <div>
          <div>gender: </div>

          <select {...register("gender", {})} className=" w-2/3 p-1 text-lg ">
            <option value={AnimalGenders.MALE}>Male</option>
            <option value={AnimalGenders.FEMALE}>Female</option>
            <option value={AnimalGenders.OTHER}>Other</option>
          </select>
        </div>
        <div>
          <div>date of birth: </div>

          <input
            type="date"
            {...register("dateOfBirth", {})}
            className=" w-2/3 p-1 text-lg"
          />
        </div>

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
      <div className="flex w-1/2 flex-col items-center justify-center gap-4 ">
        {props.images.map((image) => {
          return (
            <div key={image.id}>
              <Image src={image.url} alt="obrazek" height={200} width={200} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
