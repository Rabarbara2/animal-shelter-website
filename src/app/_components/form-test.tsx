"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="flex w-5/6 justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <div>
          <div>name:</div>

          <input
            defaultValue=""
            {...register("name", {})}
            className="  w-1/3 p-1 text-lg"
          />
        </div>
        <div>
          <div>colour:</div>

          <input
            defaultValue=""
            {...register("colour", {})}
            className=" w-1/3 p-1 text-lg "
          />
        </div>
        <div>
          <div>image link: </div>

          <input
            defaultValue=""
            {...register("imageLink", {})}
            className=" w-1/3 p-1 text-lg "
          />
        </div>
        <div>
          <div>gender: </div>

          <select {...register("gender", {})} className=" w-1/3 p-1 text-lg ">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <div>date of birth: </div>

          <input
            type="date"
            {...register("dateOfBirth", {})}
            className=" w-1/3 p-1 text-lg "
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
            className=" w-1/3 p-1 text-lg "
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
            className=" w-1/3 p-1 text-lg "
          />
        </div>

        <input
          type="submit"
          className="w-fit cursor-pointer rounded bg-lime-500 p-3"
          value="submit"
        />
      </form>
      <div className="relative h-96 w-96">
        <Image src={watch("imageLink")} alt="woof" fill />
      </div>
    </div>
  );
}
