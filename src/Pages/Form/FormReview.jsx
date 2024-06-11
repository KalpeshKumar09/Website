
const FormReview = () => {
  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-xl py-4 px-4 flex flex-col items-center mx-4 w-full max-w-[1100px]">
        <div>
          <h1 className=" text-center text-3xl">Review</h1>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 py-6  grid-cols-1">
          <div>
            <div className="flex flex-col grow items-start w-full text-center whitespace-nowrap bg-white rounded">
              <h4 className="ml-4 text-2xl text-center text-indigo-500 max-md:mr-2.5">
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
                <h2>
                  Name: <span className="font-light">Bruno</span>
                </h2>
                <h2 className="mt-2">
                  Type: <span className="font-light">Dog</span>
                </h2>
                <h2 className="mt-2">
                  Breed: <span className="font-light">Labrador</span>
                </h2>
              </div>
              <div className="flex flex-col flex-1">
                <h2>
                  Weight: <span className="font-light">5Kg</span>
                </h2>
                <h2 className="mt-2">
                  Vaccinated: <span className="font-light">Yes</span>{" "}
                </h2>
                <h2 className="mt-2">
                  Gender: <span className="font-light">Male</span>
                </h2>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col grow items-start w-full text-center whitespace-nowrap bg-white rounded">
              <h4 className="ml-12 text-2xl font-medium text-indigo-500 max-md:ml-2.5">
                Address
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
              <h2 className="mt-5 ml-16 text-base font-light text-neutral-800 max-md:ml-2.5">
                xyz
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-start bg-white rounded max-md:max-w-full">
            <h4 className="ml-8 text-2xl font-medium text-center text-indigo-500 max-md:ml-2.5">
              Pet Concern
            </h4>
            <svg
              width="397"
              height="2"
              viewBox="0 0 497 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H834" stroke="#CFCDCD" />
            </svg>

            <h2 className="mt-4 ml-11 text-base font-light text-neutral-800 max-md:ml-2.5">
              Injury
            </h2>
          </div>
          <div className="flex flex-col ml-11 py-6 max-w-full w-[215px] max-md:mt-10 max-md:ml-2.5">
            <h4 className="justify-center p-2.5 text-base font-semibold bg-indigo-500 rounded-md shadow-sm text-neutral-100 max-md:px-5">
              Pay and confirm
            </h4>
            <p className="mt-3 text-xs font-medium text-center text-indigo-500">
              By clicking on pay now, you are agreeing to{" "}
              <span className="text-indigo-500">terms and condiiton</span>
            </p>
          </div>
          <div className="flex flex-col items-start gap-4  pr-20 pl-9  text-4xl font-medium text-center bg-white rounded text-neutral-800 max-md:px-5 max-md:max-w-full">
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
            <div className="flex grow gap-5 justify-between items-start flex-row">
              <div className="shrink-0 self-start w-24 md:w-56  bg-zinc-300 h-[100px]" />
              <div className="shrink-0 self-start w-24 md:w-56 bg-zinc-300 h-[100px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormReview;
