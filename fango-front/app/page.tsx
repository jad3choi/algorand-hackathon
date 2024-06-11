import Link from "next/link";
import Image from "next/image";
import artists from "./mock/artists.json";

export default function Home() {
  const imageSize = 170;
  const imageAlt = "Artist Image";

  return (
    <main className="flex flex-col items-center">
      <Link href={"/drop"}>
        <Image
          src={"/main.svg"}
          width={1920}
          height={540}
          alt="Album Image"
          className="px-80"
        />
      </Link>
      <div className="text-2xl font-bold pt-6">Meet your Artist.</div>
      <div className="grid grid-cols-4 font-semibold">
        {artists.map((element) => {
          return (
            <Link key={element.id} href={element.href}>
              <div className="flex flex-col items-center p-4">
                <Image
                  src={element.image}
                  width={imageSize}
                  height={imageSize}
                  alt={imageAlt}
                ></Image>
                <div>{element.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
