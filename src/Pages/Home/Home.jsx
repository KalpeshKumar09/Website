import home1 from "../Images/Home-Images/home1.png"
import home2 from "../Images/Home-Images/home2.png"
import homw4 from "../Images/Home-Images/homw4.png"
import home5 from "../Images/Home-Images/home5.png"
import home6 from "../Images/Home-Images/home6.png"
import homebg1 from "../Images/Home-Images/homebg1.png"


const Home = () => {



    return (
        <>
            <section className="min-h-screen flex justify-center py-6">
                <div className=" flex flex-col md:flex md:flex-col max-w-[1100px] p-5 items-center gap-10 ">
                    <div className="pb-4">
                        <div className="flex flex-col gap-7 md:flex md:flex-row">
                            <div
                                className="w-full lg:w-1/2 flex justify-center">
                                <div className="flex justify-center lg:justify-center flex-col">
                                    <h1 className="my-2 max-w-xl py-6 md:text-[46px] text-3xl">Bringing Vet Care to Your Doorstep</h1>
                                    <p className=" text-left">Looking for professional pet care services in Jaipur?
                                        Look no further </p>
                                </div>
                            </div>
                            <div
                                className="w-full lg:w-1/2 lg:pb-8 flex justify-center">
                                <div className="flex items-center justify-center">
                                    <img src={home1} alt="about" className="rounded-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-cover bg-no-repeat py-4 h-20 overflow-hidden flex items-center" style={{
                        backgroundImage: `url(${home2})`,

                    }}>
                        <div className="w-full flex flex-row md:flex md:flex-row items-center justify-between px-4 md:px-10">
                            <h1 className="text-white sm:text-2xl">Choose Hassle Free Vet Services</h1>
                            <button className="bg-[#FAAF19] py-1 px-6 rounded text-white">Book A Vet Now</button>
                        </div>

                    </div>
                </div>
            </section >
            <section className="min-h-screen flex flex-col items-center py-2 bg-no-repeat bg-cover bg-center" style={{
                backgroundImage: `url(${homebg1})`,

            }}>
                <div className=" flex flex-col max-w-[1100px] p-5 items-center gap-6 md:gap-20 ">
                    <div className="pb-2">
                        <h1 className="my-2 text-center text-4xl ">
                            Be a Part Of  Our Community
                        </h1>
                        <p className="px-4 md:px-40 text-center">Join our furry family! Get involved, connect with fellow pet lovers, and stay updated
                            on all things Poodles PetCare. Together, let's create a thriving community centered
                            around our shared love for pets!</p>
                    </div>
                    <div className="flex flex-wrap m-4 gap-12 justify-center">
                        <div className=" sm:w-1/2 md:w-1/4 shadow-xl rounded-lg overflow-hidden bg-white">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex flex-row items-center justify-center">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32.5" cy="32.5" r="32.5" fill="#D9D9D9" />
                                    </svg>

                                    <div className="px-2 text-center">

                                        <h4 className="leading-relaxed  text-center">PoodlesPetcare</h4>
                                        <p className="leading-relaxed  text-center">@PoodlesPetcare</p>

                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg width="212" height="193" viewBox="0 0 212 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="212" height="193" rx="4" fill="#D9D9D9" />
                                    </svg>

                                    <div className="px-6 md:px-10 text-center">

                                        <p className="leading-relaxed mb-3 text-center">The #BarkingHeads range is
                                            perfect for all types of pooch</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" sm:w-1/2 md:w-1/4 shadow-xl rounded-lg overflow-hidden bg-white">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex flex-row items-center justify-center">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32.5" cy="32.5" r="32.5" fill="#D9D9D9" />
                                    </svg>

                                    <div className="px-2 text-center">

                                        <h4 className="leading-relaxed  text-center">PoodlesPetcare</h4>
                                        <p className="leading-relaxed  text-center">@PoodlesPetcare</p>

                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg width="212" height="193" viewBox="0 0 212 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="212" height="193" rx="4" fill="#D9D9D9" />
                                    </svg>

                                    <div className="px-10 text-center">

                                        <p className="leading-relaxed mb-3 text-center">The #BarkingHeads range is
                                            perfect for all types of pooch</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" sm:w-1/2 md:w-1/4 shadow-xl rounded-lg overflow-hidden bg-white">
                            <div className="flex flex-col items-center gap-3">
                                <div className="flex flex-row items-center justify-center">
                                    <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="32.5" cy="32.5" r="32.5" fill="#D9D9D9" />
                                    </svg>

                                    <div className="px-2 text-center">

                                        <h4 className="leading-relaxed  text-center">PoodlesPetcare</h4>
                                        <p className="leading-relaxed  text-center">@PoodlesPetcare</p>

                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg width="212" height="193" viewBox="0 0 212 193" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="212" height="193" rx="4" fill="#D9D9D9" />
                                    </svg>

                                    <div className="px-10 text-center">

                                        <p className="leading-relaxed mb-3 text-center">The #BarkingHeads range is
                                            perfect for all types of pooch</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="min-h-screen flex justify-center py-6">
                <div className=" flex flex-col max-w-[1100px] p-5 items-center gap-6 md:gap-20 ">
                    <div className="pb-4">
                        <h1 className="my-10 text-center text-4xl ">
                            Effortless Booking in Three Simple Steps
                        </h1>
                        <p className="text-center text-xl">Easy as 1-2-3: Booking Made Simple</p>
                    </div>
                    <div>
                        <div className="mt-16 flex flex-wrap md:justify-center md:items-center gap-10">
                            <div className="flex flex-row justify-center">
                                <div className="w-full ">
                                    <img className="p-4 object-cover object-center"
                                        src={homw4} alt="blog" />

                                </div>
                            </div>
                            <div className="w-full max-w-xl lg:w-1/2">
                                <h6
                                    className="mb-2 font-semibold text-center">Select Pet Profile</h6>
                                <p
                                    className="mb-4 text-neutral-400 text-center">Choose from your saved pet profiles or create a new one.
                                    Having a pet profile ensures personalized service for your
                                    furry friend.</p>
                            </div>
                        </div>
                        <div className="mt-8 flex flex-wrap md:justify-center md:items-center md:mr-10">


                            <div className="w-full max-w-xl lg:w-1/2">
                                <h6
                                    className="mb-2 font-semibold text-center">Choose Service Concern</h6>
                                <p
                                    className="mb-4 text-neutral-400 text-center">Select the type of concern for your
                                    pet's veterinary service. Whether it's a health
                                    issue, consultation, or specific</p>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="w-full ">
                                    <img className="p-4 object-cover object-center"
                                        src={home5} alt="blog" />

                                </div>
                            </div>
                        </div>
                        <div className="mt-16 flex flex-wrap md:justify-center md:items-center gap-10">
                            <div className="w-full max-w-xl lg:w-1/2">
                                <h6
                                    className="mb-2 font-semibold text-center">Schedule Appointment</h6>
                                <p
                                    className="mb-4 text-neutral-400 text-center">Pick a date and time slot for your pet's appointment. Choose
                                    a convenient time that fits your schedule and complete the
                                    booking process.</p>
                            </div>
                            <div className="flex flex-row justify-center">
                                <div className="w-full ">
                                    <img className="p-4 object-cover object-center"
                                        src={home6} alt="blog" />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-cover bg-no-repeat py-4 h-20 overflow-hidden flex items-center" style={{
                        backgroundImage: `url(${home2})`,

                    }}>
                        <div className="w-full flex flex-row md:flex md:flex-row items-center justify-between px-4 md:px-10">
                            <h1 className="text-white sm:text-3xl">Join Our NewsLetter</h1>
                            <div className="flex flex-row justify-between gap-10">
                                <input type="text" className="w-full rounded-md px-10" />
                                <button className="bg-[#FAAF19] py-1 px-6 rounded text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home