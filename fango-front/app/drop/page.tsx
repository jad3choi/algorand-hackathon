"use client";

import React, { useState } from "react";
import Image from "next/image";
import members from "../mock/members.json";

export default function Home() {
  const imageSize = 170;
  const imageAlt = "Member Image";

  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center items-start px-80">
        <div className="w-1/2 flex justify-center">
          <Image
            src={"/eclipse.svg"}
            width={400}
            height={400}
            alt="Album Image"
          />
        </div>
        <div className="w-1/2 pl-10">
          <div className="text-xl font-semibold text-gray-500">Bliss</div>
          <div className="text-3xl font-bold">Eclipse</div>
          <div className="mt-4 text-lg font-semibold text-gray-700">
            Includes
          </div>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Exclusive Music Tracks x 1</li>
            <li>Fan Sign Event Entry Ticket x 1</li>
            <li>Interactive Digital Photobook x 1</li>
            <li>Digital Photo Cards x 4</li>
          </ul>
          <div className="mt-6 flex items-center">
            <button
              onClick={decrement}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              -
            </button>
            <div className="px-4">{quantity}</div>
            <button
              onClick={increment}
              className="px-4 py-2 bg-gray-300 rounded"
            >
              +
            </button>
          </div>
          <div className="mt-4 text-xl font-bold">
            Total: {quantity * 10} USDT
          </div>
          <button className="mt-6 w-80 py-4 bg-indigo-400 text-white text-xl font-bold rounded">
            BUY
          </button>
        </div>
      </div>
      <div className="px-80 text-xl font-semibold pt-9">Photocards</div>
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
    </>
  );
}
