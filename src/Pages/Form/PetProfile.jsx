const PetProfile = () => {
  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-xl px-10 py-4 flex flex-col items-center mx-4 w-full max-w-[800px]">
        <div>
          <h1 className="text-center text-3xl">Create Pet Profile</h1>
          <p className="text-center">
            Get started by setting up your pet's profile! Enter basic details
            about your furry friend to personalize their experience and
            streamline future bookings
          </p>
        </div>
        <form className="grid grid-cols-2 gap-4 py-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="text-center"
              placeholder="Pet's Name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="flex flex-row gap-2 text-center items-center px-4 py-2  cursor-pointer">
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

              <span className=" text-base leading-normal">Upload A Photo</span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="petType">Pet Type</label>
            <input
              type="text"
              className="form-control text-center"
              name="petType"
              placeholder="Pet's Type"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Vaccinated</h3>
            <ul className="grid w-full gap-6 grid-cols-2">
              <li>
                <input type="checkbox" className="hidden peer" id="Yes" />
                <label
                  htmlFor="Yes"
                  className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
                >
                  Yes
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="No" />
                <label
                  htmlFor="No"
                  className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
                >
                  No
                </label>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="breed">Breed</label>
            <input
              type="text"
              className="form-control text-center"
              name="breed"
              placeholder="Pet's Breed"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h3>Gender</h3>
            <ul className="grid w-full gap-6 grid-cols-2">
              <li>
                <input type="checkbox" className="hidden peer" id="male" />
                <label
                  htmlFor="male"
                  className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
                >
                  Male
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="female" />
                <label
                  htmlFor="female"
                  className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
                >
                  Female
                </label>
              </li>
            </ul>
          </div>
        </form>
        <div className="flex flex-col gap-2 mb-4">
          <h3>Weight</h3>
          <ul className="grid w-full grid-cols-3 gap-10 md:gap-28 md:grid-cols-4">
            <li>
              <input type="checkbox" className="hidden peer" id="weight1" />
              <label
                htmlFor="weight1"
                className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
              >
                0-9 Kg
              </label>
            </li>
            <li>
              <input type="checkbox" className="hidden peer" id="weight2" />
              <label
                htmlFor="weight2"
                className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
              >
                9-23 Kg
              </label>
            </li>
            <li>
              <input type="checkbox" className="hidden peer" id="weight3" />
              <label
                htmlFor="weight3"
                className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
              >
                23-45 Kg
              </label>
            </li>
            <li>
              <input type="checkbox" className="hidden peer" id="weight4" />
              <label
                htmlFor="weight4"
                className="inline-flex items-center justify-center w-full py-2 md:px-1 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
              >
                45-80 Kg
              </label>
            </li>
          </ul>
        </div>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-[#545AFA] text-white py-3 px-6 text-sm rounded-md">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
