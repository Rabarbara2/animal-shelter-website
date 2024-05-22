import LogoHeader from "../assets/logo-header";
export default function Footer() {
  return (
    <>
      <div className="flex w-5/6 items-center justify-between gap-6 bg-pink-950 p-6">
        <div className="flex items-center">
          <LogoHeader className="h-20 w-fit p-1" />
          <div className=" text-lg font-medium text-white">Animal Shelter</div>
        </div>
        <div className="flex flex-col text-white">
          <div>Shelter for homeless animals</div>
          <div>21 Animal Street</div>
          <div>Townie McTownface</div>
          <div>22-360 City</div>
        </div>
        <div className="text-white">
          <div>Call us</div>
          +48 213 223 213
        </div>
      </div>
      <div className="p-1">All rights reserved 2023</div>
    </>
  );
}
