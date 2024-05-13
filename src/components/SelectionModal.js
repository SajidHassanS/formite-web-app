"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import SelectRoom from "./SelectRoom";
import SelectTexture from "./SelectTexture";
import SelectLimination from "./SelectLimination";
import FinalSubmission from "./FinalSubmission";

export default function SelectionModal() {
  let [isOpen, setIsOpen] = useState(true);
  const [step, setStep] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  function closeModal() {
    console.log("Hiii");
  }

  function openModal() {
    setIsOpen(true);
  }
  const residence = [
    {
      title: "Living Room",
      image: "/images/3.png",
    },
    {
      title: "TV Room",
      image: "/images/4.png",
    },
    {
      title: "Drawing Room",
      image: "/images/3.png",
    },
    {
      title: "Bed Room",
      image: "/images/4.png",
    },
    {
      title: "Bath Room",
      image: "/images/card4.jpg",
    },
  ];
  const commercial = [
    {
      title: "Reception",
      image: "/images/5.png",
    },
    {
      title: "Conference Room",
      image: "/images/3.png",
    },
    {
      title: "Lunch Room",
      image: "/images/4.png",
    },
  ];
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" min-h-[90vh] w-full bg-no-repeat bg-cover  transform overflow-hidden  bg-[url('/images/modalbg.png')] z-10 text-left align-middle shadow-xl transition-all">
             
             
             
             
                <section className="bg-gray-800 w-full px-32 py-8 flex justify-center items-center relative">


               

            
                <ol className="flex items-center justify-center w-full mb-4 sm:mb-5">
    <li className={`flex w-1/4 items-center text-red dark:text-red-600 ${step >= 1 ? 'after:content-[\'\'] after:w-full after:h-2 after:border-b-2 after:border-red-600' : 'after:border-gray-100'} after:inline-block dark:after:border-red-600`}>
        <div style={{backgroundColor:"white"}} className={`flex items-center justify-center w-10 h-10 bg-${step >= 1 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 1 ? 'white' : 'gray'} shrink-0`} onClick={() => setStep(1)}>
            <svg className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
            </svg>
        </div>
    </li>
    <li className={`flex w-1/4 items-center ${step >= 2 ? 'after:content-[\'\'] after:w-full after:h-2 after:border-b-2 after:border-red-500' : 'after:border-red-600'} after:inline-block dark:after:border-red-600`}>
        <div style={{backgroundColor:"white"}} className={`flex items-center justify-center w-10 h-10 bg-${step >= 2 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 2 ? 'white' : 'gray'} shrink-0`} onClick={() => selectedRoom && setStep(2)}>
            <svg className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM2 12V6h16v6H2Z"/>
                <path d="M6 8H4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Zm8 0H9a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2Z"/>
            </svg>
        </div>
    </li>
    <li className={`flex items-center w-1/4 ${step >= 3 ? 'after:content-[\'\'] after:w-full after:h-2 after:border-b-2 after:border-red-500' : 'after:border-red-600'} after:inline-block dark:after:border-red-600`}>
        <div style={{backgroundColor:"white"}} className={`flex items-center justify-center w-10 h-10 bg-${step >= 3 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 3 ? 'white' : 'gray'} shrink-0`} onClick={() => selectedColor && setStep(3)}>
            <svg className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </div>
    </li>
    <li className={`flex items-center ${step >= 4 ? 'after:content-[\'\'] after:w-full after:h-2 after:border-b-2 after:border-red-500' : 'after:border-red-600'} after:inline-block dark:after:border-red-600`}>
        <div  style={{backgroundColor:"white"}} className={`flex items-center justify-center w-10 h-10 bg-${step >= 4 ? 'white' : 'gray'} rounded-full lg:h-12 lg:w-12 bg-${step >= 4 ? 'white' : 'gray'} shrink-0`} onClick={() => selectedColor && selectedRoom && setStep(4)}>
            <svg className="w-4 h-4 text-red-600 lg:w-6 lg:h-6 dark:text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </div>
    </li>
</ol>




 
</section>


                  {step === 1 && (
                    <SelectRoom
                      step={step}
                      residence={residence}
                      commercial={commercial}
                      setStep={setStep}
                      selectedRoom={selectedRoom}
                      setSelectedRoom={setSelectedRoom}
                    />
                  )}
                  {step === 2 && (
                    <SelectTexture
                      step={step}
                      residence={residence}
                      commercial={commercial}
                      setStep={setStep}
                      selectedColor={selectedColor}
                      selectedRoom={selectedRoom}
                      setSelectedColor={setSelectedColor}
                    />
                  )}
                  {step === 3 && (
                    <SelectLimination
                      step={step}
                      residence={residence}
                      commercial={commercial}
                      setStep={setStep}
                      selectedColor={selectedColor}
                      selectedRoom={selectedRoom}
                      setSelectedColor={setSelectedColor}
                    />
                  )}
                  {step === 4 && <FinalSubmission />}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
