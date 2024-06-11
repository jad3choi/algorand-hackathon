import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={"/main.svg"}
          width={1920}
          height={540}
          alt="Album Image"
          className="px-80"
        />

        <div className="px-80 mt-10 text-2xl font-semibold">
          Bliss' 2nd album 'Eclipse' Fan sign event raffle results
        </div>
        <button className=" mt-10 text-2xl  bg-indigo-400 border p-2 rounded ">
          transaction
        </button>
      </div>
    </>
  );
}
