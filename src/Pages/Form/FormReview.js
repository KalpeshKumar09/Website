import React from "react";

const FormReview = () => {
  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center">
      <div className=" bg-white shadow-2xl rounded-xl px-10 py-4 flex flex-col items-center mx-4 w-full max-w-[800px]">
        <div>
          <h1 className=" text-center text-3xl">Review</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 py-6  grid-cols-1">
          <div>
            <div>
              <h4 className="ml-10 text-2xl text-center text-indigo-500 max-md:mr-2.5">
                Pet Details
              </h4>
              <svg
                width="493"
                height="2"
                viewBox="0 0 493 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H834" stroke="#CFCDCD" />
              </svg>
            </div>
            <div className="flex gap-5 mt-2 ml-10 max-w-full text-base text-neutral-800 w-[375px] max-md:pr-5 max-md:ml-2.5">
              <div className="flex flex-col flex-1 text-center">
                <div>
                  Name: <span className="font-light">Bruno</span>
                </div>
                <div className="mt-2">
                  Type: <span className="font-light">Dog</span>
                </div>
                <div className="mt-2">
                  Breed: <span className="font-light">Labrador</span>
                </div>
              </div>
              <div className="flex flex-col flex-1">
                <div>
                  Weight: <span className="font-light">5Kg</span>
                </div>
                <div className="mt-2">
                  Vaccinated: <span className="font-light">Yes</span>{" "}
                </div>
                <div className="mt-2">
                  Gender: <span className="font-light">Male</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col grow items-start w-full text-center whitespace-nowrap bg-white rounded">
              <div className="ml-12 text-2xl font-medium text-indigo-500 max-md:ml-2.5">
                Address
              </div>
              <svg
                width="293"
                height="2"
                viewBox="0 0 493 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1H834" stroke="#CFCDCD" />
              </svg>
              <div className="mt-5 ml-16 text-base font-light text-neutral-800 max-md:ml-2.5">
                xyz
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start bg-white rounded max-md:max-w-full">
            <div className="ml-8 text-2xl font-medium text-center text-indigo-500 max-md:ml-2.5">
              Pet Concern
            </div>
            <svg
              width="397"
              height="2"
              viewBox="0 0 497 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H834" stroke="#CFCDCD" />
            </svg>

            <div className="mt-4 ml-11 text-base font-light text-neutral-800 max-md:ml-2.5">
              Injury
            </div>
          </div>
          <div className="flex flex-col ml-11 py-6 max-w-full w-[215px] max-md:mt-10 max-md:ml-2.5">
            <div className="justify-center p-2.5 text-base font-semibold bg-indigo-500 rounded-md shadow-sm text-neutral-100 max-md:px-5">
              Pay and confirm
            </div>
            <div className="mt-3 text-xs font-medium text-center text-indigo-500">
              By clicking on pay now, you are agreeing to{" "}
              <span className="text-indigo-500">terms and condiiton</span>
            </div>
          </div>
          <div className="flex flex-col items-start  pr-20 pl-9  text-4xl font-medium text-center bg-white rounded text-neutral-800 max-md:px-5 max-md:max-w-full">
            <div>
              <span className="text-2xl text-indigo-500">Date</span>
              <span className="text-2xl">:</span>{" "}
              <span className="text-base font-light text-neutral-800">
                Friday 28 June 2024
              </span>
            </div>
            <div className="mt-1">
              <span className="text-2xl text-indigo-500">Slot</span>
              <span className="text-2xl">:</span>{" "}
              <span className="text-base font-light">10am to 11am</span>
            </div>
            <div className="flex grow gap-5 justify-between items-start sm:flex-row">
              <div className="shrink-0 self-start w-22 sm:w-56 bg-zinc-300 h-[100px]" />
              <div className="shrink-0 self-start w-56 bg-zinc-300 h-[100px]" />
            </div>
          </div>
          <div className="flex grow gap-5 text-base font-medium whitespace-nowrap text-zinc-400 sm:mt-52">
            <div className="flex flex-1 gap-2 my-auto justify-end flex-row">
              <svg
                width="45"
                height="18"
                viewBox="0 0 45 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43 10.5C43.8284 10.5 44.5 9.82843 44.5 9C44.5 8.17157 43.8284 7.5 43 7.5V10.5ZM0 9L15 17.6603V0.339746L0 9ZM43 7.5L13.5 7.5V10.5L43 10.5V7.5Z"
                  fill="#9699A3"
                />
              </svg>

              <div className="my-auto">Previous</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormReview;
