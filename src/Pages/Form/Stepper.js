const Stepper = ({ steps, currentStep }) => {
  return (
    <div className="flex flex-col justify-end">
      <div className="flex flex-col items-center">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center mb-6 relative w-full">
            <div className="flex flex-col items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2  ${
                  currentStep === i + 1
                    ? "border-blue-500 bg-blue-500 text-white"
                    : i + 1 < currentStep || complete
                    ? "border-blue-500 bg-blue-500 text-white"
                    : "border-gray-300 bg-white text-gray-500"
                }`}
              >
                {i + 1 < currentStep || complete ? (
                  <svg
                    width="32"
                    height="20"
                    viewBox="0 0 42 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.83496 14.5533C6.26377 14.8813 8.59544 18.1564 11.1941 21.4257C13.5295 24.3638 17.995 31.2648 19.4229 25.2236C22.3263 12.9399 30.9156 9.22305 40.0854 2.3457"
                      stroke="#F5F5F5"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              {i < steps.length - 1 && (
                <div className="h-12 w-px bg-gray-300 absolute top-10"></div>
              )}
            </div>
            <div className="ml-4">
              <p
                className={`text-gray-500 ${
                  currentStep === i + 1 ? "font-bold text-blue-500" : ""
                }`}
              >
                {step}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
