import { Link } from "react-router-dom"
import Breadcrumb from "../../components/NavigationBar/Breadcrumb";

const SignUp = () => {
    const path = [
        { label: 'Home', href: '/' },
        { label: 'SignUp', href: '/SignUp' }
    ];
    return (
        <>
            <div className="px-10">
                <Breadcrumb path={path} />
            </div>
            <div className="flex items-center justify-center min-h-screen bg-white">
                <div className="relative flex flex-col m-6 p-2 gap-4 space-y-8   md:flex-row md:space-y-0 max-w-[1100px]">
                    <div className="relative md:block hidden w-1/2">
                        <h2 className="text-[32px] font-bold text-neutral-800">
                            Benefits You Get With Poodles
                        </h2>
                        <div className="flex gap-3.5 mt-10 max-md:mt-10">
                            <svg
                                width="61"
                                height="61"
                                viewBox="0 0 61 61"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M47 23.8167C47 37.7068 37.5176 48.0687 23.5006 48.0687C9.48363 48.0687 0 39.5032 0 25.6132C0 13.0381 9.71333 2.90431 18.8006 0.463024C35.4067 -2.58864 47 9.92669 47 23.8167Z"
                                    fill="#FAAF19"
                                />
                                <path
                                    d="M28.4474 14.6562L9 58.7348L52.934 39.101C52.934 39.101 52.934 38.7149 52.934 38.0382C52.6887 27.4703 44.9551 18.3513 34.2188 15.7191C32.3202 15.2502 30.3926 14.8952 28.4474 14.6562Z"
                                    stroke="#231F20"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M28.447 14.6562C28.447 14.6562 28.447 29.518 52.9337 39.1011"
                                    stroke="#231F20"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M13.5151 48.4893C13.5151 48.4893 17.5696 49.8532 16.6034 55.3232"
                                    stroke="#231F20"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M16.2765 42.2324C16.2765 42.2324 24.0807 41.0385 23.4118 52.2796"
                                    stroke="#231F20"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M21.0671 31.3848C21.0671 31.3848 27.4071 34.0702 23.9881 41.3753"
                                    stroke="#231F20"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M25.3485 21.6777C25.3485 21.6777 37.5342 32.7771 35.2227 47.0011"
                                    stroke="#231F20"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M51.5892 39.6888C51.5892 39.6888 40.2248 36.0327 35.4233 41.3787"
                                    stroke="#231F20"
                                    strokeWidth="1.75"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M42.5 11C43.3284 11 44 10.3284 44 9.5C44 8.67157 43.3284 8 42.5 8C41.6716 8 41 8.67157 41 9.5C41 10.3284 41.6716 11 42.5 11Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M58 37C59.1046 37 60 36.1046 60 35C60 33.8954 59.1046 33 58 33C56.8954 33 56 33.8954 56 35C56 36.1046 56.8954 37 58 37Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M52 13C52.5523 13 53 12.5523 53 12C53 11.4477 52.5523 11 52 11C51.4477 11 51 11.4477 51 12C51 12.5523 51.4477 13 52 13Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M59.5 29C60.3284 29 61 28.3284 61 27.5C61 26.6716 60.3284 26 59.5 26C58.6716 26 58 26.6716 58 27.5C58 28.3284 58.6716 29 59.5 29Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M33.5977 20.505C33.5977 20.505 30.2791 13.5648 34.0548 11.0034"
                                    stroke="#231F20"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M40.0057 21.4331C40.6078 21.8476 46.1599 22.1098 51.1546 13.3486"
                                    stroke="#231F20"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M45.8588 31.385C45.8588 31.385 49.1588 25.1286 57.0522 26.8716"
                                    stroke="#231F20"
                                    strokeMiterlimit="10"
                                />
                                <path
                                    d="M53 18L53.3086 18.6606L54 18.7645L53.4971 19.2722L53.6171 20L53 19.6575L52.3829 20L52.4971 19.2722L52 18.7645L52.6914 18.6606L53 18Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M43.4937 14L43.962 14.9865L45 15.1486L44.2532 15.9189L44.4304 17L43.4937 16.4865L42.5696 17L42.7468 15.9189L42 15.1486L43.038 14.9865L43.4937 14Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M36 12L36.3086 12.6606L37 12.7645L36.5029 13.2783L36.6171 14L36 13.6575L35.3829 14L35.5029 13.2783L35 12.7645L35.6914 12.6606L36 12Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M35.5 5L35.9629 5.99083L37 6.14679L36.2543 6.91743L36.4257 8L35.5 7.48624L34.5743 8L34.7543 6.91743L34 6.14679L35.0371 5.99083L35.5 5Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M59 19L59.6171 20.3211L61 20.5291L60.0057 21.5566L60.2343 23L59 22.315L57.7657 23L58.0057 21.5566L57 20.5291L58.3829 20.3211L59 19Z"
                                    fill="#231F20"
                                />
                                <path
                                    d="M52.5 22L52.9629 22.9908L54 23.1468L53.2457 23.9174L53.4257 25L52.5 24.4862L51.5657 25L51.7457 23.9174L51 23.1468L52.0371 22.9908L52.5 22Z"
                                    fill="#231F20"
                                />
                            </svg>

                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                <div className="text-[16px] font-semibold">
                                    <span className="font-medium">Sign Up is </span>
                                    <span className="text-indigo-500">Free</span>
                                </div>
                                <p className=" text-[16px] text-stone-950 text-opacity-70">
                                    Creating an account on Poodles is free & takes 1min
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-4 max-md:mt-10">
                            <svg
                                width="49"
                                height="49"
                                viewBox="0 0 49 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M47 23.8167C47 37.7068 37.5176 48.0687 23.5006 48.0687C9.48363 48.0687 0 39.5032 0 25.6132C0 13.0381 9.71333 2.90431 18.8006 0.463024C35.4067 -2.58864 47 9.92669 47 23.8167Z"
                                    fill="#FAAF19"
                                />
                                <path
                                    d="M30.6308 27.0824C36.1764 27.0824 40.672 22.5868 40.672 17.0412C40.672 11.4956 36.1764 7 30.6308 7C25.0852 7 20.5896 11.4956 20.5896 17.0412C20.5896 22.5868 25.0852 27.0824 30.6308 27.0824Z"
                                    fill="#010101"
                                />
                                <path
                                    d="M12.2423 47.9445C11.8205 42.8632 11.4881 37.4431 15.4381 33.5761C17.2558 31.6829 19.6008 30.3802 22.1685 29.8371C23.939 29.5239 28.5602 29.6261 29.1099 31.9015C29.1994 32.4004 29.1994 32.9112 29.1099 33.41L28.3045 40.7603C28.2831 40.8688 28.2989 40.9814 28.3493 41.0799C28.401 41.1325 28.4644 41.1721 28.5344 41.1955C28.6044 41.2188 28.679 41.2252 28.7519 41.2141H32.1267C32.2238 41.2248 32.3214 41.1998 32.4015 41.1438C32.461 41.0675 32.4907 40.972 32.4847 40.8754C32.6521 38.9826 32.6114 37.0771 32.3633 35.1932C32.1715 33.9149 31.3406 32.0869 32.0117 30.8661C32.7915 29.4536 36.096 29.3385 37.4829 29.3705C39.631 29.402 41.7283 30.0281 43.5422 31.1793C49.2946 34.8864 49.2946 41.8725 48.8025 47.9637"
                                    fill="#010101"
                                />
                            </svg>

                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                <p className="text-[16px] font-medium text-neutral-800">
                                    Access To Experts
                                </p>
                                <p className=" text-base text-stone-950 text-opacity-70">
                                    Poodles have a team of veterinary professionals
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mt-4">
                            <svg
                                width="51"
                                height="52"
                                viewBox="0 0 51 52"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M47 23.8167C47 37.7068 37.5176 48.0687 23.5006 48.0687C9.48363 48.0687 0 39.5032 0 25.6132C0 13.0381 9.71333 2.90431 18.8006 0.463024C35.4067 -2.58864 47 9.92669 47 23.8167Z"
                                    fill="#FAAF19"
                                />
                                <path
                                    d="M24.9683 30.7779C25.8449 30.7779 26.5556 29.3566 26.5556 27.6033C26.5556 25.85 25.8449 24.4287 24.9683 24.4287C24.0916 24.4287 23.381 25.85 23.381 27.6033C23.381 29.3566 24.0916 30.7779 24.9683 30.7779Z"
                                    fill="#010101"
                                />
                                <path
                                    d="M37.1905 30.7779C38.1548 30.7779 38.9365 29.3566 38.9365 27.6033C38.9365 25.85 38.1548 24.4287 37.1905 24.4287C36.2262 24.4287 35.4445 25.85 35.4445 27.6033C35.4445 29.3566 36.2262 30.7779 37.1905 30.7779Z"
                                    fill="#010101"
                                />
                                <path
                                    d="M30.9976 13C19.9535 13 11 21.5281 11 32.0476C11 42.5671 19.9535 51.0952 30.9976 51.0952C42.0418 51.0952 51 42.5671 51 32.0488C51 21.5305 42.0465 13 30.9976 13ZM30.9976 46.2627C22.7556 46.2627 16.0736 39.8978 16.0736 32.0476C16.0736 24.1974 22.7603 17.8325 30.9976 17.8325C39.2349 17.8325 45.9217 24.1962 45.9217 32.0476C45.9217 39.899 39.2444 46.2627 30.9976 46.2627Z"
                                    fill="#010101"
                                />
                                <path
                                    d="M22.7232 34.5874C22.7232 34.5874 24.6178 40.5312 31.6177 40.4826C31.6177 40.4826 37.0531 40.8518 39.3584 34.5874H40.8412C40.8412 34.5874 38.5849 42.6067 31.025 42.189C31.025 42.189 24.1231 42.9404 21.1587 34.5874H22.7232Z"
                                    fill="#010101"
                                />
                            </svg>

                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                <p className="text-[16px] font-medium text-neutral-800">
                                    Stress-Free Veterinary Consultations
                                </p>
                                <p className="text-base text-stone-950 text-opacity-70">
                                    Our veterinary consultations help to keep pets calm
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-start mt-2">
                            <svg
                                width="49"
                                height="54"
                                viewBox="0 0 49 54"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M47 23.8167C47 37.7068 37.5176 48.0687 23.5006 48.0687C9.48363 48.0687 0 39.5032 0 25.6132C0 13.0381 9.71333 2.90431 18.8006 0.463024C35.4067 -2.58864 47 9.92669 47 23.8167Z"
                                    fill="#FAAF19"
                                />
                                <path
                                    d="M30.4301 40.4755C27.4394 40.4755 27.2594 40.2518 27.5998 37.2756C27.8089 35.4374 27.8673 33.5748 28.1591 31.7463C28.3828 30.3555 27.3566 29.7379 26.739 28.8285C25.144 26.5234 25.1829 23.7612 26.8218 22.137C27.7084 21.2937 28.865 20.7919 30.0865 20.7207C31.308 20.6495 32.5153 21.0134 33.4939 21.7479C35.4391 23.1825 36.2657 25.8864 34.5296 27.9629C32.3267 30.5986 33.0708 33.3122 33.1389 36.123C33.1389 36.5267 33.2652 36.9206 33.3139 37.3242C33.6689 40.2323 33.4598 40.4803 30.4301 40.4755Z"
                                    fill="black"
                                />
                                <path
                                    d="M48.9049 16.3547C36.8883 14.7548 30.5956 8 30.5956 8C23.6171 15.4404 12.0576 16.1261 12.0576 16.1261C10.7981 50.4543 30.5956 53.1971 30.5956 53.1971C51.4191 47.8234 48.9049 16.3547 48.9049 16.3547ZM30.5956 51.7138C30.5956 51.7138 12.4029 46.3353 14.1196 18.0713C14.1196 18.0713 24.1861 15.7808 30.5956 10.8643C35.605 14.172 41.1377 16.6087 46.9597 18.0713C46.9597 18.0713 49.2453 44.9591 30.5956 51.7138Z"
                                    fill="#010101"
                                />
                            </svg>

                            <div className="flex flex-col grow shrink-0 mt-2 basis-0 w-fit">
                                <p className="text-[16px] font-medium text-neutral-800">
                                    Private And Secure Consultation
                                </p>
                                <p className="text-base text-stone-950 text-opacity-70">
                                    The consultation remains confidential
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-8 border-2 border-[#FAAF19] py-8 rounded-lg md:w-1/2 bg-white">
                        <span className="font-bold text-2xl text-black text-center">
                            Sign up
                        </span>

                        <button className="bg-white border px-1 py-2 w-full rounded-md mt-5 flex text-center text-sm  text-black font-medium">
                            <svg
                                className="mr-3"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                width="20px"
                            >
                                <path
                                    fill="#FFC107"
                                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                                <path
                                    fill="#FF3D00"
                                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                />
                                <path
                                    fill="#4CAF50"
                                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                />
                                <path
                                    fill="#1976D2"
                                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                />
                            </svg>
                            Continue with Google
                        </button>

                        <div className="mt-2 px-12 grid grid-cols-3 items-center text-gray-400">
                            <hr className="border-gray-400" />
                            <p className="text-center text-sm">Or</p>
                            <hr className="border-gray-400" />
                        </div>

                        <form action="">
                            <div className="py-2">
                                <label className="mb-2 text-md">First Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    name="firstName"
                                    id="firstName"
                                />
                            </div>
                            <div className="py-2">
                                <label className="mb-2 text-md">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    name="lastName"
                                    id="lastName"
                                />
                            </div>
                            <div className="py-2">
                                <label className="mb-2 text-md">E-mail</label>
                                <input
                                    type="email"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                    name="email"
                                    id="email"
                                />
                            </div>
                            <div className="py-2">
                                <label className="mb-2 text-md">Contact Number</label>
                                <input
                                    type="text"
                                    name="contact"
                                    id="contact"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                />
                            </div>
                            <div className="py-2">
                                <label className="mb-2 text-md">Zip Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    id="zipCode"
                                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                                />
                            </div>
                        </form>
                        <button className="w-full mt-4 bg-[#545AFA] text-white p-2 rounded-md mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                            Create Account
                        </button>

                        <div className="text-center text-gray-400 mt-4">
                            Already have an account?
                            <Link className="text-[#545AFA]">Log in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp