import contact1 from "../Images/Contact-Images/contact1.png"
import contact2 from "../Images/Contact-Images/contact2.png"
import Breadcrumb from "../../components/NavigationBar/Breadcrumb";

const Contact = () => {

    const path = [
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/Contact' }
    ];

    return (
        <>
            <div className="px-10">
                <Breadcrumb path={path} />
            </div>
            <section className=" min-h-screen flex flex-col items-center justify-center py-6 bg-contain bg-no-repeat bg-center" style={{
                backgroundImage: `url(${contact1})`,
            }}>
                <div className=" flex max-w-[1100px] p-2 items-center gap-10 bg-white mt-10" >
                    <div className=" px-4 md:px-6 shadow-xl py-8 rounded-lg">
                        <h2 className="font-bold text-3xl text-black">Contact us</h2>
                        <span className="text-[16px] mt-2">Use the form below and we will respond within 24 hours.</span>

                        <form action="" className="flex flex-col gap-4 mt-8">
                            <div className="flex flex-col gap-2">
                                <h3>Vaccinated</h3>
                                <ul className="flex w-full flex-row gap-4">
                                    <li>
                                        <input
                                            type="checkbox"
                                            className="hidden peer"
                                            required
                                            id="Parent"
                                        />
                                        <label
                                            htmlFor="Parent"
                                            className="inline-flex items-center justify-between  py-4  px-4 text-[#545AFA] bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#545AFA]  peer-checked:text-white peer-checked:bg-[#545AFA] "
                                        >
                                            Pet Parent
                                        </label>
                                    </li>
                                    <li>
                                        <input
                                            type="checkbox"
                                            className="hidden peer"
                                            required
                                            id="Vet"
                                        />
                                        <label
                                            htmlFor="Vet"
                                            className="inline-flex items-center justify-between  py-4  px-4 text-[#545AFA] bg-white border-2  rounded-lg cursor-pointer  peer-checked:border-[#545AFA]  peer-checked:text-white peer-checked:bg-[#545AFA] "
                                        >
                                            Pet Vet
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    className="p-2 mt-1 rounded-md border"
                                    type="text"
                                    name="fullName"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">E-mail</label>
                                <input
                                    className="p-2 mt-1 rounded-md border"
                                    type="email"
                                    name="email"
                                    placeholder="Your E-mail"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="help">What can we help with</label>
                                <input
                                    className="p-2 mt-1 rounded-md border w-full"
                                    type="text"
                                    name="help"
                                    placeholder="Choose a reason"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="service">Message</label>
                                <textarea name="service" rows="5" cols="10" placeholder="Write your message" className="p-2 mt-1 rounded-md border"></textarea>
                            </div>
                            <button className="bg-[#545AFA] rounded-md text-white py-2 text-[16px] mt-4">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <h1 className="text-xl md:text-2xl text-gray-700 font-semibold">Our Most Common Questions</h1>
                </div>
            </section>
            <section className="min-h-screen flex justify-center items-center text-gray-600 bg-no-repeat bg-cover" style={{
                backgroundImage: `url(${contact2})`,
            }}>
                <div className="px-5 py-24 w-full max-w-[1100px]">
                    <div className="flex flex-col gap-10 items-center w-full max-w-[1000px]">
                        <div className="relative overflow-hidden border border-gray-400 rounded-lg shadow-lg bg-white">
                            <input type="checkbox" className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer" />
                            <div className="h-12 w-full pl-5 flex items-center">
                                <h1 className="text-[#545AFA]">What is your Cancellation Policy?</h1>
                            </div>

                            <div className="absolute top-1.5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_148_42)">
                                        <rect x="4" y="34.5" width="34" height="34" rx="7" transform="rotate(-90 4 34.5)" fill="white" shapeRendering="crispEdges" />
                                        <rect x="4.25" y="34.25" width="33.5" height="33.5" rx="6.75" transform="rotate(-90 4.25 34.25)" stroke="#CFCDCD" strokeWidth="0.5" shapeRendering="crispEdges" />
                                        <path d="M12.5 14L21.1308 21L29.5 14" stroke="#545AFA" strokeWidth="1.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_148_42" x="0" y="0.5" width="42" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_148_42" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_148_42" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                <div className="p-4">
                                    <p>Customers may cancel within 24 hours of making their reservation and receive a 100% refund and the sitter will not receive any earnings. After the first 24 hours, the following cancellation rules apply: <br />Customers will receive a 100% refund to their Account Balance if they cancel anytime up to 48 hours before the start date of the reservation and the sitter will not receive any earnings. <br /> Customers will receive a 50% refund and the sitter will earn 50% of their planned earnings if the customer cancels between 24-48 hours of the start of the reservation. <br /> No refund will be issued within 24 hours of the reservation and the sitter will keep 100% of their planned earnings. <br />We have a 100% Satisfaction Guarantee <br />If you are not fully satisfied with your sitter after the Meet & Greet or during the reservation, please call 1-844-636-9835 so we can help you re-book with a new sitter to ensure we can deliver on our purrfect hospitality promise.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden border border-gray-400 rounded-lg shadow-lg bg-white">
                            <input type="checkbox" className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer" />
                            <div className="h-12 w-full pl-5 flex items-center">
                                <h1 className="text-[#545AFA]">Flea, Tick & Heartworm</h1>
                            </div>

                            <div className="absolute top-1.5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_148_42)">
                                        <rect x="4" y="34.5" width="34" height="34" rx="7" transform="rotate(-90 4 34.5)" fill="white" shapeRendering="crispEdges" />
                                        <rect x="4.25" y="34.25" width="33.5" height="33.5" rx="6.75" transform="rotate(-90 4.25 34.25)" stroke="#CFCDCD" strokeWidth="0.5" shapeRendering="crispEdges" />
                                        <path d="M12.5 14L21.1308 21L29.5 14" stroke="#545AFA" strokeWidth="1.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_148_42" x="0" y="0.5" width="42" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_148_42" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_148_42" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                <div className="p-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tenetur cumque et aliquam, nisi voluptatibus. Harum quidem nam, laborum labore sequi cupiditate cum explicabo eveniet suscipit, impedit, esse fugiat! Natus!</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden border border-gray-400 rounded-lg shadow-lg bg-white">
                            <input type="checkbox" className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer" />
                            <div className="h-12 w-full pl-5 flex items-center">
                                <h1 className="text-[#545AFA]">Flea, Tick & Heartworm</h1>
                            </div>

                            <div className="absolute top-1.5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_148_42)">
                                        <rect x="4" y="34.5" width="34" height="34" rx="7" transform="rotate(-90 4 34.5)" fill="white" shapeRendering="crispEdges" />
                                        <rect x="4.25" y="34.25" width="33.5" height="33.5" rx="6.75" transform="rotate(-90 4.25 34.25)" stroke="#CFCDCD" strokeWidth="0.5" shapeRendering="crispEdges" />
                                        <path d="M12.5 14L21.1308 21L29.5 14" stroke="#545AFA" strokeWidth="1.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_148_42" x="0" y="0.5" width="42" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_148_42" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_148_42" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                <div className="p-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tenetur cumque et aliquam, nisi voluptatibus. Harum quidem nam, laborum labore sequi cupiditate cum explicabo eveniet suscipit, impedit, esse fugiat! Natus!</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden border border-gray-400 rounded-lg shadow-lg bg-white">
                            <input type="checkbox" className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer" />
                            <div className="h-12 w-full pl-5 flex items-center">
                                <h1 className="text-[#545AFA]">Flea, Tick & Heartworm</h1>
                            </div>

                            <div className="absolute top-1.5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_148_42)">
                                        <rect x="4" y="34.5" width="34" height="34" rx="7" transform="rotate(-90 4 34.5)" fill="white" shapeRendering="crispEdges" />
                                        <rect x="4.25" y="34.25" width="33.5" height="33.5" rx="6.75" transform="rotate(-90 4.25 34.25)" stroke="#CFCDCD" strokeWidth="0.5" shapeRendering="crispEdges" />
                                        <path d="M12.5 14L21.1308 21L29.5 14" stroke="#545AFA" strokeWidth="1.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_148_42" x="0" y="0.5" width="42" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_148_42" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_148_42" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                <div className="p-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tenetur cumque et aliquam, nisi voluptatibus. Harum quidem nam, laborum labore sequi cupiditate cum explicabo eveniet suscipit, impedit, esse fugiat! Natus!</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative overflow-hidden border border-gray-400 rounded-lg shadow-lg bg-white">
                            <input type="checkbox" className="absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer" />
                            <div className="h-12 w-full pl-5 flex items-center">
                                <h1 className="text-[#545AFA]">Flea, Tick & Heartworm</h1>
                            </div>

                            <div className="absolute top-1.5 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                                <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_148_42)">
                                        <rect x="4" y="34.5" width="34" height="34" rx="7" transform="rotate(-90 4 34.5)" fill="white" shapeRendering="crispEdges" />
                                        <rect x="4.25" y="34.25" width="33.5" height="33.5" rx="6.75" transform="rotate(-90 4.25 34.25)" stroke="#CFCDCD" strokeWidth="0.5" shapeRendering="crispEdges" />
                                        <path d="M12.5 14L21.1308 21L29.5 14" stroke="#545AFA" strokeWidth="1.5" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_148_42" x="0" y="0.5" width="42" height="42" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="2" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_148_42" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_148_42" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>

                            <div className="bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
                                <div className="p-4">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque tenetur cumque et aliquam, nisi voluptatibus. Harum quidem nam, laborum labore sequi cupiditate cum explicabo eveniet suscipit, impedit, esse fugiat! Natus!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex justify-center text-gray-600">
                <div className="container px-5 py-24 w-full max-w-[1100px]">
                    <div className="text-center mb-12">
                        <h1 className="text-2xl text-gray-700 font-semibold">Still have questions?</h1>
                    </div>
                    <div className="flex flex-wrap m-4 items-center justify-center">
                        <div className="p-4 sm:w-1/2 lg:w-1/3 mt-10">
                            <div className=" px-2 border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden flex flex-col items-center">
                                <svg width="41" height="42" viewBox="0 0 41 42" fill="none" xmlns="http://www.w3.org/2000/svg" className=" object-cover object-center mt-4">
                                    <path d="M12.2146 18.5502C13.5546 20.6402 17.5946 26.4002 22.9846 29.1702C23.1994 29.2789 23.4432 29.3162 23.6806 29.2766C23.9181 29.2371 24.1368 29.1227 24.3047 28.9502C25.4372 27.811 26.6503 26.755 27.9347 25.7902C28.2369 25.581 28.5908 25.4592 28.9577 25.438C29.3247 25.4168 29.6904 25.4972 30.0146 25.6702C33.0475 27.2868 35.4415 29.8853 36.8047 33.0402C36.9202 33.3238 36.957 33.6333 36.9112 33.936C36.8655 34.2387 36.7389 34.5235 36.5447 34.7602C34.8647 36.7602 29.8046 41.8602 23.9646 38.7102C23.9646 38.7102 3.15462 28.9102 2.01462 12.3602C1.93948 11.3797 2.15513 10.3988 2.63462 9.54022C3.69463 7.57704 5.38074 6.02472 7.42466 5.13022C7.85258 4.96207 8.31515 4.90148 8.77195 4.95379C9.22874 5.00609 9.66581 5.16969 10.0447 5.43022C12.4868 7.03302 14.4796 9.23238 15.8346 11.8202C15.9526 12.0719 15.9973 12.3516 15.9637 12.6275C15.9301 12.9034 15.8196 13.1643 15.6446 13.3802C14.8846 14.2802 13.5146 15.8902 12.3446 17.1302C12.1663 17.3178 12.0565 17.56 12.0329 17.8176C12.0093 18.0753 12.0733 18.3334 12.2146 18.5502Z" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M21.4946 8.93945C21.4946 8.93945 30.5447 10.6795 32.4347 19.8795" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M22.6748 2C22.6748 2 37.4948 4.35 39.0248 19.88" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                </svg>

                                <div className="p-6 text-center">
                                    <h1 className="text-[#545AFA]">91-234-Poodles</h1>
                                    <p className="leading-relaxed mb-3 text-center">Talk to a real humans</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 mt-10">
                            <div className="py-2 border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden flex flex-col items-center">
                                <svg width="41" height="33" viewBox="0 0 41 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                                    <path d="M34.95 2H6.11C3.84011 2 2 3.8401 2 6.10999V26.42C2 28.6899 3.84011 30.53 6.11 30.53H34.95C37.2199 30.53 39.06 28.6899 39.06 26.42V6.10999C39.06 3.8401 37.2199 2 34.95 2Z" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M5.89014 5.53125L20.5301 18.7113L34.9401 5.53125" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M5.89014 26.3614L16.9001 15.4414" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M35.3003 26.3614L24.1104 15.4414" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                </svg>

                                <div className="p-6 text-center">

                                    <h1 className="text-[#545AFA]">Poodles@gmail.com</h1>
                                    <p className=" mb-3 text-center text-sm">Receive a reply in 48 hours</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/3 mt-10">
                            <div className=" px-6 border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden text-center flex flex-col items-center">
                                <svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4">
                                    <path d="M2.00009 31.09V4.2C2.00272 3.61733 2.23542 3.05929 2.64743 2.64728C3.05944 2.23527 3.6175 2.00263 4.20016 2H31.0301C31.6136 2 32.1732 2.23178 32.5858 2.64436C32.9984 3.05694 33.2301 3.61652 33.2301 4.2V23.79C33.2314 24.0798 33.1755 24.3669 33.0655 24.635C32.9556 24.9031 32.7937 25.1468 32.5893 25.3521C32.3849 25.5575 32.1419 25.7204 31.8744 25.8316C31.6068 25.9428 31.3199 26 31.0301 26H9.35007C8.82041 25.9991 8.30859 26.1911 7.91013 26.54L2.42014 31.28C2.38405 31.3135 2.33884 31.3356 2.29025 31.3435C2.24166 31.3514 2.1918 31.3448 2.14694 31.3246C2.10209 31.3043 2.0643 31.2712 2.03818 31.2295C2.01205 31.1877 1.99876 31.1392 2.00009 31.09Z" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M9.06055 9.41016H26.0005" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M9.06055 14.5312H20.7105" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                    <path d="M33.23 11H37.41C37.9962 11 38.5583 11.2328 38.9728 11.6473C39.3872 12.0617 39.62 12.6239 39.62 13.21V38.73C39.6196 38.7775 39.6062 38.8239 39.5813 38.8643C39.5564 38.9046 39.5208 38.9374 39.4785 38.959C39.4363 38.9807 39.389 38.9904 39.3417 38.987C39.2943 38.9836 39.2488 38.9674 39.2101 38.94L33.8401 35.07C33.4641 34.7994 33.0132 34.6526 32.55 34.65H13.2101C12.624 34.65 12.0618 34.4172 11.6473 34.0027C11.2329 33.5883 11 33.0261 11 32.44V26" stroke="#FAAF19" strokeWidth="3" strokeMiterlimit="10" />
                                </svg>

                                <div className="p-6 text-center">

                                    <h1 className="text-[#545AFA]">Live Chat <span className="text-[#16A34A]">(Online)</span></h1>
                                    <p className="leading-relaxed mb-3 text-center">9 AM - 6 PM</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact