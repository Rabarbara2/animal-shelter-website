"use client";
import { useForm, SubmitHandler } from "react-hook-form";

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
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>name:</div>
      <input defaultValue="" {...register("name", {})} />
      <div>colour:</div>
      <input defaultValue="" {...register("colour", {})} />
      <div>image link: </div>
      <input defaultValue="" {...register("imageLink", {})} />
      <div>gender: </div>

      <select {...register("gender", {})}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <div>date of birth: </div>
      <input type="date" {...register("dateOfBirth", {})} />
      <div>estimated? </div>
      <input type="checkbox" {...register("estimated", {})} />
      <div>fur length: </div>
      <select {...register("furLength", {})}>
        <option value="bald">Bald</option>
        <option value="short">Short</option>
        <option value="medium">Medium</option>
        <option value="long">Long</option>
        <option value="unknown">Unknown</option>
      </select>

      <div>race: </div>
      <input defaultValue="" {...register("race", {})} />

      <input type="submit" />
    </form>
  );
}
