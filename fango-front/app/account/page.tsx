"use client";


import Image from "next/image";
import { useState } from 'react';
import Link from "next/link";

const Modal2 = ({ isOpen2, onClose2 }) => {
    if (!isOpen2) return null;
  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-black rounded-lg overflow-hidden shadow-lg max-w-4xl w-full flex">
              <div className="relative w-1/2">
                  <Image src={"./eclipse.svg"} alt="Eclipse Album Cover" layout="fill" objectFit="cover"/>
              </div>
              <div className="w-1/2 p-8 text-white flex flex-col justify-between">
                  <div>
                      <h3 className="text-gray-400 text-sm">Bliss</h3>
                      <h2 className="text-3xl font-bold mb-4">Eclipse</h2>
                      <p className="mb-8">
                          Explore the enigmatic world of Eclipse the second album by Bliss. This album blends deep,
                          ethereal sounds with powerful vocals, capturing the mystery of a lunar eclipse. Featuring a
                          mix of haunting ballads and electrifying dance tracks, Eclipse showcases Bliss artistic
                          growth.
                      </p>
                  </div>
                  <Link href="/raffle2">
                      <button className="bg-indigo-400 text-white py-2 px-4 rounded">
                          Open Album
                      </button>
                  </Link>
              </div>
          </div>
      </div>
  );
};


const Modal = ({isOpen, onClose}) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-black rounded-lg overflow-hidden shadow-lg max-w-4xl w-full flex">
                <div className="relative w-1/2">
                    <Image src={"./dreamcatcher.svg"} alt="Eclipse Album Cover" layout="fill" objectFit="cover"/>
                </div>
                <div className="w-1/2 p-8 text-white flex flex-col justify-between">
                    <div>
                        <h3 className="text-gray-400 text-sm">Bliss</h3>
                        <h2 className="text-3xl font-bold mb-4">Dream Catcher</h2>
                        <p className="mb-8">
Bliss, the dynamic K-pop girl group consisting of members Ruby, Emerald, Opal, and Topaz, made their stunning debut with their first album, Aurora. This album introduces listeners to a radiant blend of vibrant, high-energy tracks and soulful melodies, reflecting the group's unique artistry. Aurora captures the magical and colorful essence of the northern lights, with each song showcasing the individual strengths and distinct personalities of the members. From catchy pop anthems to touching ballads, Aurora is a captivating journey through the dazzling world of Bliss, marking the beginning of their bright musical journey.
                        </p>
                    </div>
                    <Link href="/raffle">
                        <button className="bg-indigo-400 text-white py-2 px-4 rounded">
                            Open Album
                        </button>
          </Link>
              </div>
          </div>
      </div>
  );
};
export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModal2Open, setIsModal2Open] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        setIsModal2Open(false);
    };

    const openModal2 = () => {
        setIsModal2Open(true);
        setIsModalOpen(false);
    };

    const closeModal = () => setIsModalOpen(false);
    const closeModal2 = () => setIsModal2Open(false);
    return (
        <div className="bg-transparent flex flex-col items-center min-h-screen">
            <div className="w-full p-8">
                <div className="font-bold ml-80 text-3xl mb-8 mt-8">My Albums</div>
                <div className="flex ml-80 flex-row space-x-4">
                    <div className="bg-white rounded-lg shadow-lg p-5 max-w-xs">
                        <div className="relative pb-3">
                            <Image src={"/eclipse.svg"} alt="Dream Catcher" width={400} height={400}
                                   className="rounded-lg"/>
                        </div>
                        <div
                            className="absolute cursor-pointer bg-green-200 text-gray-700 px-1 py-1 rounded font-manrope text-[12px] font-bold leading-[16.39px] tracking-[-0.01em] text-left"
                            onClick={openModal2}>
                            Raffle On
                        </div>
                        <div className="mt-8">
                            <h3 className="font-manrope text-sm font-medium leading-5 text-left">Bliss</h3>
                            <h2 className="font-manrope text-2xl font-semibold leading-9 tracking-tight text-left">Eclipse
                                </h2>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-5 max-w-xs">
                        <div className="relative pb-3">
                            <Image src={"/dreamcatcher.svg"} alt="eclipse" width={400} height={400}
                                   className="rounded-lg"/>
                        </div>
                        <div
                            className="absolute bg-gray-200 text-gray-700 px-1 py-1 rounded font-manrope text-[12px] font-bold leading-[16.39px] tracking-[-0.01em] text-left"
                            onClick={openModal}>
                            Raffle Over
                        </div>
                        <div className="mt-8">
                            <h3 className="font-manrope text-sm font-medium leading-5 text-left">Bliss</h3>
                            <h2 className="font-manrope text-2xl font-semibold leading-9 tracking-tight text-left">Dream Catcher</h2>
                        </div>
                    </div>

                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}/>
            <Modal2 isOpen2={isModal2Open} onClose2={closeModal2}/>
        </div>
    );
}

