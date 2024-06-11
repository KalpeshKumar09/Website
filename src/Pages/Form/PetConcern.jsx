const PetConcern = () => {
  return (
    <>
      <div className="fixed inset-0 bg-transparent flex justify-center items-center">
        <div className="bg-white shadow-xl rounded-xl py-4 px-4 flex flex-col items-center mx-4 w-full max-w-[1100px]">
          <div>
            <h1 className=" text-center text-3xl">Pet Concern</h1>
            <p className="text-center">
              Choose the specific concern or reason for your pet's visit,This
              helps us tailor our services to best meet your pet's needs.
            </p>
          </div>
          <form
            action=""
            className="flex flex-col gap-4 py-6"
          >
            <div className="flex flex-col gap-2">
              <ul className="grid w-full gap-10 grid-cols-2">
                <li>
                  <input
                    type="checkbox"
                    className="hidden peer"
                    required
                    id="infection"
                  />
                  <label
                    htmlFor="infection"
                    className="inline-flex items-center justify-between w-full py-2 px-10 sm:px-24 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                  >
                    Ear infection
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="hidden peer"
                    required
                    id="appetite"
                  />
                  <label
                    htmlFor="appetite"
                    className="inline-flex items-center justify-between w-full py-2 px-6 sm:px-24 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                  >
                    Loss of appetite
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="hidden peer"
                    required
                    id="Throwing"
                  />
                  <label
                    htmlFor="Throwing"
                    className="inline-flex items-center justify-between w-full py-2 px-10 sm:px-24 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                  >
                    Throwing up
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="hidden peer"
                    required
                    id="Injury"
                  />
                  <label
                    htmlFor="Injury"
                    className="inline-flex items-center justify-between w-full py-2 px-10 sm:px-24 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                  >
                    Injury
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="hidden peer"
                    required
                    id="rash"
                  />
                  <label
                    htmlFor="rash"
                    className="inline-flex items-center justify-between w-full py-2 px-6 sm:px-24 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                  >
                    Skin rash or allergy
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="hidden peer"
                    required
                    id="Other"
                  />
                  <label
                    htmlFor="Other"
                    className="inline-flex items-center justify-between w-full py-2 px-10 sm:px-24 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                  >
                    Other
                  </label>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <label htmlFor="concern">Describe Concern</label>
              <input
                type="text"
                className=" h-10 shadow-sm rounded-md"
                name="concern"
              />
            </div>
            <div className="flex flex-col justify-start gap-2">
              <label className="flex flex-row gap-2 items-center px-4 py-2  cursor-pointer">
                <svg
                  width="47"
                  height="43"
                  viewBox="0 0 47 43"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.128906"
                    y="0.167969"
                    width="46.4259"
                    height="42.2053"
                    rx="21.1027"
                    fill="#545AFA"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M25.9818 7.41148C25.9818 5.95345 24.7998 4.77148 23.3418 4.77148C21.8838 4.77148 20.7018 5.95345 20.7018 7.41148V18.6315H9.4818C8.02377 18.6315 6.8418 19.8135 6.8418 21.2715C6.8418 22.7295 8.02376 23.9115 9.4818 23.9115H20.7018V35.1315C20.7018 36.5895 21.8838 37.7715 23.3418 37.7715C24.7998 37.7715 25.9818 36.5895 25.9818 35.1315V23.9115H37.2018C38.6598 23.9115 39.8418 22.7295 39.8418 21.2715C39.8418 19.8135 38.6598 18.6315 37.2018 18.6315H25.9818V7.41148Z"
                    fill="#F5F5F5"
                  />
                </svg>

                <div className="flex flex-col justify-start">
                  <span className=" text-xl font-medium leading-normal">Upload A Photo</span>
                  <span>Add Photos If having Any Physical Issues.</span>
                </div>
                <input type="file" className="hidden" />
              </label>
            </div>
          </form>
        </div >
      </div >
    </>
  );
};

export default PetConcern;
