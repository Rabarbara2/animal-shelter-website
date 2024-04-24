import obrazek from "../assets/animals.jpg";
import Navbar from "../_components/navbar";
import Image from "next/image";
import Triangle from "../assets/triangle";

import FormTest from "../_components/form-test";
import ArticleForm from "../_components/article-form";

export default async function Aboutus() {
  return (
    <div className="flex flex-col items-center bg-zinc-800">
      <Navbar />
      <div className="relative flex w-5/6 flex-col items-center justify-center overflow-hidden">
        <Image src={obrazek} alt="hero" className="  brightness-[70%]" />
        <div className="absolute left-8 ">
          <div className="p-2 text-5xl font-semibold text-white drop-shadow-xl">
            We help animals
          </div>
          <div className="ml-10 p-4 text-lg text-white drop-shadow-lg">
            Animals are super cool in our opinion
          </div>
        </div>
      </div>
      <div className="w-5/6 overflow-hidden bg-pink-900 ">
        <Triangle fill="white" className="brightness-[70%]" />
      </div>
      <ArticleForm />
      <FormTest />
      <div className="h-96 w-5/6 bg-pink-900 p-12 text-lg text-white">
        At [Animal Shelter Name], we believe that every life is precious and
        deserving of love and care. Our dedicated team of staff and volunteers
        work around the clock to ensure that each animal that comes through our
        doors receives the attention, medical care, and support they need to
        thrive. Our shelter is more than just a place for animals to stay
        temporarily; it&apos;s a sanctuary where they are treated with kindness
        and respect. We provide a nurturing environment where they can heal from
        past traumas, receive training and socialization, and ultimately find
        loving forever homes. In addition to our commitment to the welfare of
        individual animals, we are also passionate about addressing broader
        issues such as pet overpopulation and animal welfare education. Through
        our spay/neuter programs, community outreach efforts, and educational
        initiatives, we strive to make a positive impact on the lives of animals
        both within our shelter and beyond. None of our work would be possible
        without the generous support of our community. Whether through
        donations, volunteering, or adopting, every contribution helps us
        continue our vital work of saving lives and making a difference. Join us
        in our mission to create a world where every animal is valued and
        cherished. Together, we can make a difference, one paw at a time. Thank
        you for supporting Animal Shelter and being a part of our journey.
      </div>
    </div>
  );
}
