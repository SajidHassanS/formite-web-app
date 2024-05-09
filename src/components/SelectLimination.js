"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

const SelectLimination = ({
  step,
  setStep,
  selectedRoom,
  selectedColor,
  residence,
  commercial,
  setSelectedColor,
}) => {
  return (
    <>
      <section className="px-12 pt-16 flex justify-center flex-col gap-3 items-center">
        {/* <Image
          src={"/images/Logo.png"}
          width={500}
          height={500}
          alt="logo"
          className="h-24 w-32 object-cover"
        /> */}
        <h3 className=" text-4xl font-bold text-white ">{selectedRoom}</h3>
      </section>
      <div className="flex justify-center flex-col md:flex-row gap-5 items-center flex-wrap px-12 py-8">
        <div className="h-[37rem] w-[75%]">
          <img
            src={'/images/mainbg.jpg'}
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        {/* <section className="flex w-[45%] flex-col justify-center items-center">
          <h3 className=" text-xl font-bold text-white w-full text-center uppercase">
            Textures
          </h3>

       
          <NewSlider1 />
          <NewSlider2 />
        </section> */}
      </div>
      {!(selectedColor === null) && (
        <section className="px-12 flex justify-end items-center pb-6">
          <button
            onClick={() => setStep(step + 1)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Continue
          </button>
        </section>
      )}
    </>
  );
};

export default SelectLimination;



function NewSlider1() {
  const data = [
    {
      image: "/images/texture2.png",
    },
    {
      image: "/images/texture1.png",
    },
    {
      image: "/images/texture2.png",
    },
    {
      image: "/images/texture1.png",
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="md:flex relative gap-6 items-center  w-[97%]  h-[20rem]">

        {data?.map((item, idx) => (

          <div key={idx} className={`absolute left-0 right-0 gap-6 top-0 bottom-0  w-full h-auto flex justify-center items-center -z-10 ${idx === index ? " translate-x-0 transition-all opacity-100  ease-linear duration-[1s]" : " translate-x-[100vw] opacity-0"
            }`}>
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image}
              className=" w-1/3 h-[80%] object-center bg-center z-10 object-cover"
            />
          </div>
        ))}
        <div className=" absolute left-0 right-0 -bottom-[50%] -z-10   w-full">
          <img src="/images/under.png" className="w-full h-auto" />
        </div>
        <div className=' flex gap-3 absolute left-[20%]  right-[20%]  bottom-0 top-0 justify-between items-center px-8'>
          <button
            aria-label="slide backward"
            className="absolute z-30 left-0 p-3 -ml-10  rounded-full cursor-pointer"
            onClick={() => {
              if (index === 0) {
                setIndex(3)
              } else {
                setIndex(index - 1)
              }
            }}
          >
            <FaAngleLeft color="white" size={30} />
          </button>

          <button
            aria-label="slide forward"
            className="absolute z-30 right-0 -mr-10 p-3  rounded-full"
            onClick={() => {
              if (index === 3) {
                setIndex(0)
              } else {
                setIndex(index + 1)
              }
            }}
          >
            <FaAngleRight color="white" size={30} />
          </button>
        </div>
      </div>
    </>
  );
};

function NewSlider2() {
  const data = [
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
    {
      image1: "/images/texture1.png",
      image2: "/images/texture2.png",
      image3: "/images/texture1.png",
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <>
      <div className="md:flex relative items-center w-[97%]  h-[20rem]">

        {data?.map((item, idx) => (

          <div key={idx} className={`absolute left-0 right-0 gap-6 inset-0 w-full h-auto flex justify-center items-center -z-10 ${idx === index ? " translate-x-0 transition-all opacity-100  ease-linear duration-[1s]" : " translate-x-[100vw] opacity-0"
            }`}>
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image1}
              className=" w-1/4 h-[16rem] object-center bg-center object-cover"
            />
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image2}
              className=" w-1/4 h-[16rem] object-center bg-center object-cover"
            />
            <Image
              width={1000}
              height={1000}
              alt="image"
              src={item.image3}
              className=" w-1/4 h-[16rem] object-center bg-center object-cover"
            />
          </div>
        ))}

        <div className=' flex gap-3 absolute  left-0 right-0 bottom-0 top-0 justify-between items-center px-8'>
          <button
            aria-label="slide backward"
            className="z-30 p-3  rounded-full cursor-pointer"
            onClick={() => {
              if (index === 0) {
                setIndex(3)
              } else {
                setIndex(index - 1)
              }
            }}
          >
            <FaAngleLeft color="white" size={30} />
          </button>

          <button
            aria-label="slide forward"
            className="z-30 p-3  rounded-full"
            onClick={() => {
              if (index === 3) {
                setIndex(0)
              } else {
                setIndex(index + 1)
              }
            }}
          >
            <FaAngleRight color="white" size={30} />
          </button>
        </div>
      </div>
    </>
  );
};




