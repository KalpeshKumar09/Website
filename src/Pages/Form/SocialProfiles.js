const SocialProfiles = () => {
  return (
    <>
      <div className="fixed inset-0 bg-transparent flex justify-center items-center">
        <div className=" bg-white shadow-xl rounded-xl px-10 py-4 flex flex-col items-center mx-4 w-full max-w-[800px]">
          <div>
            <h1 className=" text-center text-3xl">Pet Concern</h1>
            <p className="text-center">
              Choose the specific concern or reason for your pet's visit,This
              helps us tailor our services to best meet your pet's needs.
            </p>
          </div>
          <form
            action=""
            className="w-full flex flex-col items-start max-w-[800px] bg-blue-600"
          >
            <div className="form-container">
              <div className="flex flex-col gap-2 bg-fuchsia-400">
                <ul className="grid w-full gap-6 md:grid-cols-2">
                  <li>
                    <input
                      type="checkbox"
                      className="hidden peer"
                      required
                      id="Yes"
                    />
                    <label
                      htmlFor="Yes"
                      className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                    >
                      Yes
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="hidden peer"
                      required
                      id="No"
                    />
                    <label
                      htmlFor="No"
                      className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                    >
                      No
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="hidden peer"
                      required
                      id="No"
                    />
                    <label
                      htmlFor="No"
                      className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                    >
                      No
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="hidden peer"
                      required
                      id="No"
                    />
                    <label
                      htmlFor="No"
                      className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                    >
                      No
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="hidden peer"
                      required
                      id="No"
                    />
                    <label
                      htmlFor="No"
                      className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                    >
                      No
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="hidden peer"
                      required
                      id="No"
                    />
                    <label
                      htmlFor="No"
                      className="inline-flex items-center justify-between w-full py-2 md:px-12 px-4 text-black bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#FAAF19]  peer-checked:text-black "
                    >
                      No
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="facebook">Describe Concern</label>
                <input
                  type="text"
                  className="form-control bg-emerald-500"
                  name="facebook"
                />
              </div>
            </div>
          </form>
          <div className="row">
            <div className="col-6">
              <button className="btn btn-danger">Back</button>
            </div>
            <div className="col-6 text-right">
              <button className="btn btn-primary">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialProfiles;
