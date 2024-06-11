import Image from "next/image";
import Link from "next/link";
import members from "../mock/members.json";
import albums from "../mock/albums.json";

export default function Home() {
  const imageSize = 170;
  const imageAlt = "Member Image";

  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={"/bliss.svg"}
          width={1920}
          height={540}
          alt="Album Image"
          className="px-80"
        />
      </div>
      <div className="px-80">
        <div className="text-xl font-semibold pt-9">Bliss</div>
        <div>
          Bliss’ music style is a versatile blend of various genres,
          incorporating elements of upbeat pop, electronic dance music, R&B,
          hip-hop, and synth-pop. Their songs feature catchy hooks, powerful
          vocals, smooth harmonies, energetic rap verses, and nostalgic retro
          sounds, creating a dynamic and engaging listening experience. They are
          known for their ability to seamlessly transition between different
          musical styles, making each track unique and memorable.
        </div>
      </div>
      <div className="px-80 text-xl font-semibold pt-9">Member</div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4 font-semibold">
          {members.map((element) => {
            return (
              <div key={element.id} className="flex flex-col items-center p-4">
                <Image
                  src={element.image}
                  width={imageSize}
                  height={imageSize}
                  alt={imageAlt}
                ></Image>
                <div>{element.name}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-80 text-xl font-semibold pt-9">Album</div>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-4 font-semibold">
          {albums.map((element) => {
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
      </div>
    </>
  );
}
