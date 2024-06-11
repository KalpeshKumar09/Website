import React from "react";

const SelectAddress = () => {
  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center py-10">
      <div className=" bg-white shadow-xl rounded-xl px-10 py-4 flex flex-col items-center mx-4 w-full max-w-[800px]">
        <div>
          <h1 className=" text-center text-3xl">Please Add Address Details</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h1>Select Address</h1>
          <div className="flex flex-row gap-4">
            <button className="text-center">
              <svg
                width="38"
                height="35"
                viewBox="0 0 38 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="38" height="35" rx="17.5" fill="#545AFA" />
                <path
                  d="M4.5 18.4731H8.44022V30H15.5326V20.4192H21.6793V30H28.6141V18.4731H33.5L18.5272 5L4.5 18.4731Z"
                  fill="#F5F5F5"
                />
              </svg>
              Home
            </button>
            <button className="text-center">
              <svg
                width="39"
                height="35"
                viewBox="0 0 39 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="39" height="35" rx="17.5" fill="#545AFA" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.6605 6.16C21.6605 4.96707 20.6934 4 19.5005 4C18.3076 4 17.3405 4.96706 17.3405 6.16V15.3401H8.16C6.96707 15.3401 6 16.3072 6 17.5001C6 18.693 6.96706 19.6601 8.16 19.6601H17.3405V28.84C17.3405 30.0329 18.3076 31 19.5005 31C20.6934 31 21.6605 30.0329 21.6605 28.84V19.6601H30.84C32.0329 19.6601 33 18.693 33 17.5001C33 16.3072 32.0329 15.3401 30.84 15.3401H21.6605V6.16Z"
                  fill="#F5F5F5"
                />
              </svg>
              Add Address
            </button>
          </div>
        </div>
        <form action="" className="grid grid-cols-2 gap-4 py-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-center">
              Select Date
            </label>
            <input
              type="date"
              className="text-center"
              name="date"
              onChange={inputChange("date")}
              value={values.date}
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <h3>Select Time</h3>
            <ul className="grid w-full grid-cols-2 gap-2 md:gap-6 md:grid-cols-2">
              <li>
                <input type="checkbox" className="hidden peer" id="home" />
                <label
                  htmlFor="home"
                  className="inline-flex items-center justify-center w-full py-2 md:px-4 text text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  10am-11am
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="work" />
                <label
                  htmlFor="work"
                  className="inline-flex items-center justify-center w-full py-2 md:px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  11am-12am
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="other" />
                <label
                  htmlFor="other"
                  className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  12am-1pm
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="other" />
                <label
                  htmlFor="other"
                  className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  1pm-2pm
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="other" />
                <label
                  htmlFor="other"
                  className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  2pm-3pm
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="other" />
                <label
                  htmlFor="other"
                  className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  3pm-4pm
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="other" />
                <label
                  htmlFor="other"
                  className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  4pm-5pm
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="other" />
                <label
                  htmlFor="other"
                  className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  5pm-6pm
                </label>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SelectAddress;
