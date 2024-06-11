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
            <label htmlFor="photo">Upload A Photo</label>
            <input type="file" className="form-control" name="photo" />
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
          <ul className="grid w-full grid-cols-4 gap-10 md:gap-28 md:grid-cols-4">
            <li>
              <input type="checkbox" className="hidden peer" id="weight1" />
              <label
                htmlFor="weight1"
                className="inline-flex items-center justify-center w-full py-2 md:px-4 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
              >
                0-9 Kg
              </label>
            </li>
            <li>
              <input type="checkbox" className="hidden peer" id="weight2" />
              <label
                htmlFor="weight2"
                className="inline-flex items-center justify-center w-full py-2 md:px-4 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
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
                className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2 rounded-lg cursor-pointer peer-checked:border-[#FAAF19] peer-checked:text-black"
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
