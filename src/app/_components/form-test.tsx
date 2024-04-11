"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { db } from "~/server/db";
import { cats } from "~/server/db/schema";
import { api } from "~/trpc/react";

type Inputs = {
  name: string;
  colour: string;
  imageLink: string;
  gender: string;
  dateOfBirth: Date;
  estimated: boolean;
  race: string;
  furLength: string;
};

export default function FormTest() {
  const { mutate } = api.cat.post.useMutation({
    onError: () => {
      alert("error");
    },
    onSuccess: () => {
      alert("success!");
    },
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    mutate({
      name: data.name,
      colour: data.colour,
      dateOfBirth: new Date(data.dateOfBirth),
      image: data.imageLink,
      isDOBEstimated: data.estimated,
      race: data.race,
      furLength: data.furLength,
      gender: data.gender,
    });
  };

  const imageUrl = watch("imageLink");

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
            {...register("imageLink", {})}
            className=" w-2/3 p-1 text-lg "
          />
        </div>
        <div>
          <div>gender: </div>

          <select {...register("gender", {})} className=" w-2/3 p-1 text-lg ">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <div>date of birth: </div>

          <input
            type="date"
            {...register("dateOfBirth", {})}
            className=" w-2/3 p-1 text-lg "
          />
        </div>
        <label>
          estimated?
          <input
            type="checkbox"
            {...register("estimated", {})}
            className="m-2 p-1 text-lg "
          />
        </label>
        <div>
          <div>fur length: </div>
          <select
            {...register("furLength", {})}
            className=" w-2/3 p-1 text-lg "
          >
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
            className=" w-2/3 p-1 text-lg "
          />
        </div>

        <input
          type="submit"
          className="w-fit cursor-pointer rounded bg-lime-500 p-3"
          value="submit"
        />
      </form>
      <div className="flex w-1/2 flex-col items-center justify-center gap-4 text-3xl text-white">
        Image Preview
        <div className="relative h-96 w-96">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="bad image"
              fill
              loader={(loader) => loader.src}
              className="h-1/2 w-1/2 text-base"
              onError={() => console.log("wyjebka")}
            />
          )}
        </div>
      </div>
    </div>
  );
}
