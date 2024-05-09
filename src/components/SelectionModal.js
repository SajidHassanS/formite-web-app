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
                <Dialog.Panel className=" min-h-[90vh] w-full bg-no-repeat bg-cover  transform overflow-hidden  bg-[url('/images/modalbg.png')] text-left align-middle shadow-xl transition-all">
                <section className="bg-gray-800 w-full px-56 py-8 flex justify-between items-center relative">
  {/* Step 1 */}
  <div
    onClick={() => setStep(1)}
    className="flex justify-center cursor-pointer items-center flex-col gap-3"
  >
    <h6
      className={`${step === 1 ? "text-blue-500" : "text-gray-200"
        } font-bold text-lg px-3 py-2 border rounded-full`}
    >
      01
    </h6>
    <h4 className="text-xl font-bold text-white">Select Room</h4>
  </div>
  {/* Line between Step 1 and 2 */}
  {step >= 2 && (
    <div style={{ width: '16%', height: '2px', backgroundColor: step === 2 ? 'blue' : 'gray', position: 'absolute', top: '40%', left: '25%', transform: 'translate(-50%, -50%)'}}></div>
  )}
  {/* Step 2 */}
  <div
    onClick={() => selectedRoom && setStep(2)}
    className="flex justify-center cursor-pointer items-center flex-col gap-3"
  >
    <h6
      className={`${step === 2 ? "text-blue-500" : "text-gray-200"
        } font-bold text-lg px-3 py-2 border rounded-full`}
    >
      02
    </h6>
    <h4 className="text-xl font-bold text-white">Select Texture</h4>
  </div>
  {/* Line between Step 2 and 3 */}
  {step >= 3 && (
    <div style={{ width: '16%', height: '2px', backgroundColor: step === 3 ? 'blue' : 'gray', position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)'}}></div>
  )}
  {/* Step 3 */}
  <div
    onClick={() => selectedColor && setStep(3)}
    className="flex justify-center cursor-pointer items-center flex-col gap-3"
  >
    <h6
      className={`${step === 3 ? "text-blue-500" : "text-gray-200"
        } font-bold text-lg px-3 py-2 border rounded-full`}
    >
      03
    </h6>
    <h4 className="text-xl font-bold text-white">Select Limaniation</h4>
  </div>
  {/* Line between Step 3 and 4 */}
  {step >= 4 && (
    <div style={{ width: '16%', height: '2px', backgroundColor: step === 4 ? 'blue' : 'gray', position: 'absolute', top: '40%', left: '75%', transform: 'translate(-50%, -50%)'}}></div>
  )}
  {/* Step 4 */}
  <div
    onClick={() => selectedColor && selectedRoom && setStep(4)}
    className="flex justify-center cursor-pointer items-center flex-col gap-3"
  >
    <h6
      className={`${step === 4 ? "text-blue-500" : "text-gray-200"
        } font-bold text-lg px-3 py-2 border rounded-full`}
    >
      04
    </h6>
    <h4 className="text-xl font-bold text-white">Final Submission</h4>
  </div>
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
