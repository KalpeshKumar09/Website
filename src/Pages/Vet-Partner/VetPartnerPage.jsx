import vet1 from "../Images/VetPartner-Images/vet1.png"
import vet2 from "../Images/VetPartner-Images/vet2.png"
import vet3 from "../Images/VetPartner-Images/vet3.png"
import vet4 from "../Images/VetPartner-Images/vet4.png"
import vet5 from "../Images/VetPartner-Images/vet5.png"
import vet6 from "../Images/VetPartner-Images/vet6.png"
import vet7 from "../Images/VetPartner-Images/vet7.png"
import vet8 from "../Images/VetPartner-Images/vet8.png"
import vet9 from "../Images/VetPartner-Images/vet9.png"
import vet10 from "../Images/VetPartner-Images/vet10.png"
import Breadcrumb from "../../components/NavigationBar/Breadcrumb";

const VetPartnerPage = () => {

    const path = [
        { label: 'Home', href: '/' },
        { label: 'VetPartnerPage', href: '/VetPartnerPage' }
    ];

    return (
        <>
            <div className="px-10">
                <Breadcrumb path={path} />
            </div>
            <section className=" flex flex-col justify-center items-center py-6 " >
                <div className=" flex max-w-[1100px] p-5 items-center gap-10 w-full bg-no-repeat bg-cover" style={{
                    backgroundImage: `url(${vet2})`,
                }}>
                    <div className="md:block hidden w-1/2">
                        <h2 className="text-[32px] font-bold text-neutral-800 text-center">
                            Earn your place in the Poodles Vet Community
                        </h2>
                        <div className="flex flex-col mt-4 max-md:mt-2">
                            <img src={vet1} alt="" />

                            <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                                <p className=" text-[16 text-stone-950 text-opacity-70 text-center">
                                    Turn your love for pets into a thriving, full-time business.
                                    We're so committed to quality pet care that fewer than 10% of
                                    submitted profiles make it onto Poodles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 px-4 md:px-10 shadow-2xl py-8 rounded-lg bg-white"  >
                        <h2 className="font-bold text-3xl text-black">Join Vet Community</h2>
                        <span className="text-[16px] mt-2">Use the form below and become a part of vet community.</span>

                        <form action="" className="flex flex-col gap-4 mt-8">
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
                                <label htmlFor="contact">Contact Number</label>
                                <input
                                    className="p-2 mt-1 rounded-md border w-full"
                                    type="text"
                                    name="contact"
                                    placeholder="Your Contact"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="city">City</label>
                                <input
                                    className="p-2 mt-1 rounded-md border w-full"
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="service">Service Offered by you</label>
                                <textarea name="service" rows="5" cols="10" placeholder="Service"></textarea>
                            </div>
                            <button className=" rounded-md text-white py-2 text-[16px]">
                                Join Now
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <section className=" flex flex-col justify-center items-center  py-4">
                <div className="container px-5 py-24 w-full max-w-[1100px]">
                    <div className="text-center mb-12">
                        <h1 className="text-2xl font-semibold">Why pet care With Poodles?</h1>
                        <p className="text-base md:text-lg  mb-1 px-32">We're a nationally recognized brand just for pet people and our pet vets love the dedicated support they receive.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-2 sm:w-1/2 lg:w-1/4 mt-8">
                            <div className="">
                                <img className="p-4 w-full object-cover object-center"
                                    src={vet3} alt="blog" />
                                <div className="py-4 ">

                                    <p className="px-6 leading-relaxed mb-3 text-center">You're in charge! Start and grow your dream veterinary business with Poodles</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4">
                            <div className="">
                                <img className="p-4 w-full object-cover object-center"
                                    src={vet4} alt="blog" />
                                <div className="p-6 ">

                                    <p className="leading-relaxed mb-3 text-center">Set your own rates and leverage market insights and data tools to maximize your earnings</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4 mt-10">
                            <div className="">
                                <img className="p-4 w-full object-cover object-center"
                                    src={vet5} alt="blog" />
                                <div className="p-6 ">

                                    <p className="leading-relaxed mb-3 text-center">Have the opportunity to care for amazingly cute pets while setting your own schedule</p>

                                </div>
                            </div>
                        </div>
                        <div className="p-4 sm:w-1/2 lg:w-1/4">
                            <div className="">
                                <img className="p-4 w-full object-cover object-center"
                                    src={vet6} alt="blog" />
                                <div className="p-6 ">

                                    <p className="leading-relaxed mb-3 text-center">We're here to help: Enjoy speedy support and complimentary insurance coverage through Poodles</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-center py-6">
                <div className="flex flex-col max-w-[1100px] p-5 items-center">
                    <div className="pb-4">
                        <h1 className=" text-center text-2xl font-semibold">Our Process Consists of 4 Steps</h1>
                        <p className="text-center px-20 md:px-40 lg:px-56 mt-6">We approve submissions from select cities and states all across the United States, and approved cat sitters can expect to get their business up and running in an average of one week.</p>
                        <div>
                            <div className="mt-16 flex flex-wrap lg:justify-center gap-10">
                                <div className="flex flex-row justify-center">
                                    <div className="w-full ">
                                        <img className="p-4 object-cover object-center"
                                            src={vet7} alt="blog" />

                                    </div>
                                    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="41" cy="41" r="41" fill="#FFB834" />
                                        <path d="M39.176 57V27.1L41.798 29.814H32.368V24.8H45.156V57H39.176Z" fill="black" />
                                    </svg>

                                </div>
                                <div className="w-full max-w-xl lg:w-1/2">
                                    <h6
                                        className="mb-2 font-semibold">Showcase your knowledge and share your goals</h6>
                                    <p
                                        className="mb-4 text-neutral-400">It's free and it only takes a few minutes to create your Veterinary account. We'll ask a few questions to ensure you're a great fit for the marketplace.</p>
                                </div>
                            </div>
                            <div className="mt-16 flex flex-wrap lg:justify-center gap-10">
                                <div className="flex flex-row justify-center">
                                    <div className="w-full ">
                                        <img className="p-4 object-cover object-center"
                                            src={vet8} alt="blog" />

                                    </div>
                                    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="41" cy="41" r="41" fill="#FFB834" />
                                        <path d="M29.61 57V52.998L42.398 40.854C43.4713 39.842 44.2687 38.9527 44.79 38.186C45.3113 37.4193 45.6487 36.714 45.802 36.07C45.986 35.3953 46.078 34.7667 46.078 34.184C46.078 32.712 45.572 31.5773 44.56 30.78C43.548 29.952 42.0607 29.538 40.098 29.538C38.534 29.538 37.108 29.814 35.82 30.366C34.5627 30.918 33.474 31.7613 32.554 32.896L28.368 29.676C29.6253 27.9893 31.312 26.686 33.428 25.766C35.5747 24.8153 37.9667 24.34 40.604 24.34C42.9347 24.34 44.9587 24.7233 46.676 25.49C48.424 26.226 49.758 27.284 50.678 28.664C51.6287 30.044 52.104 31.6847 52.104 33.586C52.104 34.6287 51.966 35.6713 51.69 36.714C51.414 37.726 50.8927 38.7993 50.126 39.934C49.3593 41.0687 48.24 42.3413 46.768 43.752L35.774 54.194L34.532 51.94H53.346V57H29.61Z" fill="black" />
                                    </svg>

                                </div>

                                <div className="w-full max-w-xl lg:w-1/2">
                                    <h6
                                        className="mb-2 font-semibold">Complete and submit your listing</h6>
                                    <p
                                        className="mb-4 text-neutral-400">You'll write your vet Bio, upload your Veterinary Photos, set your rates, choose your availability for vet and select the zip codes you want to service.</p>
                                </div>
                            </div>
                            <div className="mt-16 flex flex-wrap lg:justify-center gap-10">
                                <div className="flex flex-row justify-center">
                                    <div className="w-full ">
                                        <img className="p-4 object-cover object-center"
                                            src={vet9} alt="blog" />

                                    </div>
                                    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="41" cy="41" r="41" fill="#FFB834" />
                                        <path d="M40.144 57.46C37.8747 57.46 35.6513 57.138 33.474 56.494C31.3273 55.8193 29.518 54.8993 28.046 53.734L30.622 49.088C31.7873 50.0387 33.198 50.8053 34.854 51.388C36.51 51.9707 38.2427 52.262 40.052 52.262C42.1987 52.262 43.87 51.8327 45.066 50.974C46.262 50.0847 46.86 48.8887 46.86 47.386C46.86 45.914 46.308 44.7487 45.204 43.89C44.1 43.0313 42.3213 42.602 39.868 42.602H36.924V38.508L46.124 27.56L46.906 29.814H29.61V24.8H51.552V28.802L42.352 39.75L39.224 37.91H41.018C44.974 37.91 47.9333 38.7993 49.896 40.578C51.8893 42.326 52.886 44.58 52.886 47.34C52.886 49.1493 52.426 50.8207 51.506 52.354C50.586 53.8873 49.1753 55.1293 47.274 56.08C45.4033 57 43.0267 57.46 40.144 57.46Z" fill="black" />
                                    </svg>

                                </div>
                                <div className="w-full max-w-xl lg:w-1/2">
                                    <h6
                                        className="mb-2 font-semibold">We'll conduct your reference and background check</h6>
                                    <p
                                        className="mb-4 text-neutral-400">We'll contact your references and conduct a background check paid for by Poodles. A minimum of two professional references are required to complete your submission.</p>
                                </div>
                            </div>
                            <div className="mt-16 flex flex-wrap lg:justify-center gap-10">
                                <div className="flex flex-row justify-center">
                                    <div className="w-full ">
                                        <img className="p-4 object-cover object-center"
                                            src={vet10} alt="blog" />

                                    </div>
                                    <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="41" cy="41" r="41" fill="#FFB834" />
                                        <path d="M25.564 49.686V45.546L41.434 24.8H47.828L32.188 45.546L29.198 44.626H54.728V49.686H25.564ZM43.228 57V49.686L43.412 44.626V38.14H49.024V57H43.228Z" fill="black" />
                                    </svg>


                                </div>
                                <div className="w-full max-w-xl lg:w-1/2">
                                    <h6
                                        className="mb-2 font-semibold">Demonstrate you're ready to conduct reservations and complete your sitter activation call</h6>
                                    <p
                                        className="mb-4 text-neutral-400">You'll review FAQs and resources in order to set yourself up for success. Afterward, you'll have the opportunity to schedule a 20-minute call to allow us to get to know you and answer all of your questions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VetPartnerPage;