const AddAddress = () => {
  return (
    <div className="fixed inset-0 bg-transparent flex justify-center items-center py-10">
      <div className=" shadow-xl rounded-xl py-4 flex flex-col items-center mx-4 w-full max-w-[1100px]">
        <div>
          <h1 className=" text-center text-3xl">Address Details</h1>
        </div>
        <form action="" className="grid grid-cols-2 gap-4 py-6 place-content-between">
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="text-center"
              placeholder="Full Name"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="code">Pincode</label>
            <input
              type="text"
              className="text-center"
              placeholder="Pincode"
              name="code"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="phone">Mobile</label>
            <input
              type="text"
              className="form-control text-center"
              name="phone"
              placeholder="Mobile"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="street">Street</label>
            <input
              type="text"
              className="form-control text-center"
              name="street"
              placeholder="Street Address"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control text-center"
              name="city"
              placeholder="City"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              className="form-control text-center"
              name="landmark"
              placeholder="Landmark"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="state">State</label>
            <input
              type="text"
              className="form-control text-center"
              name="state"
              placeholder="State"
            />
          </div>
          <div className="flex flex-col gap-2 mb-4">
            <h3>Type</h3>
            <ul className="grid w-full grid-cols-2 gap-2 md:gap-6 md:grid-cols-3">
              <li>
                <input type="checkbox" className="hidden peer" id="home" />
                <label
                  htmlFor="home"
                  className="inline-flex items-center justify-center w-full py-2 md:px-4 text text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  Home
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="work" />
                <label
                  htmlFor="work"
                  className="inline-flex items-center justify-center w-full py-2 md:px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  Work
                </label>
              </li>
              <li>
                <input type="checkbox" className="hidden peer" id="other" />
                <label
                  htmlFor="other"
                  className="inline-flex items-center justify-center w-full py-2 md:px-2 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                >
                  Other
                </label>
              </li>
            </ul>
          </div>
        </form>

        <div className="flex justify-center items-center mt-4">
          <button className="bg-[#545AFA] text-white py-3 px-6 text-sm rounded-md">
            Save Address
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAddress;
