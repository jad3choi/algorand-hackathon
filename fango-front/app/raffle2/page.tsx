"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Modal = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

  return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
              <div className="text-center">
                  <h2 className="text-2xl font-bold mb-4">You Won!</h2>
                  <p className="mb-4">
                      The fan signing event schedule and detailed notice will be announced
                      to the winners at a later date, so please wait for your email!
                  </p>
                  <Link href="/result">
                  <button className="bg-indigo-400 text-black py-2 px-4 rounded">Check detailed results</button>
                  </Link>
              </div>
          </div>
      </div>
  );
};

const Home: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className="bg-white min-h-screen flex flex-col items-center">
            <main className="w-full max-w-6xl p-5">
                <section className="flex flex-col md:flex-row md:space-x-10 mb-10">
                    <div className="flex-shrink-0">
                        <Image src={"/raffle.svg"} width={400} height={400} alt="Album Image"/>
                    </div>
                    <div className="flex-grow mt-5 md:mt-0">
                        <div className="bg-gray-100 p-5 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold">Bliss</h2>
              <h3 className="text-xl">Eclipse</h3>
              <div className="mt-5 bg-black text-white p-5 rounded-lg shadow-lg">
                <h4 className="text-lg font-semibold">Bliss Fan meeting Raffle</h4>
                <div className="mt-3 pl-20 pr-20 flex justify-between">
                  <div className="text-center">
                    <div className="text-3xl">01</div>
                    <div>Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl">11</div>
                    <div>Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl">30</div>
                    <div>Min</div>
                  </div>
                  {/*<div className="text-center">*/}
                  {/*  <div className="text-3xl">00</div>*/}
                  {/*  <div>Sec</div>*/}
                  {/*</div>*/}
                </div>
                <div className="mt-5 bg-black text-white p-5 rounded-lg shadow-lg">
                  <div>Total Buyers: 10,000</div>
                  <div>Number of Winners: 20</div>
                  <div className="text-indigo-400">Odds of winning: 0.2%</div>
                </div>
                <button className="mt-5 w-full bg-green-900 text-white py-2 rounded-lg">Pending</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3 className="text-2xl font-bold mb-4">Photocards</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
               <Image src={"/ruby.svg"} width={400} height={400} alt="ruby"/>
              <div className="mt-3 text-center">Ruby</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
               <Image src={"/emerald.svg"} width={400} height={400} alt="emerald"/>
              <div className="mt-3 text-center">Emerald</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
               <Image src={"/opal.svg"} width={400} height={400} alt="opal"/>
              <div className="mt-3 text-center">Opal</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-lg shadow-lg">
               <Image src={"/topaz.svg"} width={400} height={400} alt="topaz"/>
              <div className="mt-3 text-center">Topaz</div>
            </div>
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </section>
      </main>
    </div>

  );
};

export default Home;
