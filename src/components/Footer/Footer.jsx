import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-[#545AFA] text-white py-10"
        >
            <div className="flex flex-col items-center justify-center px-4">
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl text-center md:text-left space-y-4 md:space-y-0 md:gap-60 gap-4">
                    <div className="flex flex-col flex-1 self-start font-semibold text-white">
                        <div className="text-2xl font-bold">Why Poodles?</div>
                        <div className="mt-8">
                            Meowtel is on a mission to help every cat and cat parent
                            live their best life. Our vetted and insured cat sitters
                            bring the purrfect hospitality to you.
                        </div>
                        <div className="justify-center text-center items-center p-2.5 mt-9 rounded-md border border-amber-400 border-solid max-md:px-5 cursor-pointer">
                            Book A Vet Now
                        </div>
                        <div className="mt-5 text-2xl font-bold">Get Started!</div>
                        <Link to="/Login" className="justify-center text-center items-center p-2.5 mt-8 whitespace-nowrap rounded-md border border-amber-400 border-solid max-md:px-5 cursor-pointer">
                            Login
                        </Link>
                        <Link to="/SignUp" className="justify-center text-center items-center p-2.5 mt-6 rounded-md border border-amber-400 border-solid max-md:px-5 cursor-pointer">
                            Sign Up
                        </Link>
                    </div>
                    <div className="flex flex-col flex-1 font-bold text-white">
                        <div className="text-2xl">Become A Vet Partner</div>
                        <div className="mt-9">
                            Be your own boss, set your own rates & availability, and
                            meet ameowzing kitties near you!
                        </div>
                        <Link to="/VetPartnerPage" className="justify-center text-center px-6 py-2.5 mt-7 font-semibold bg-amber-400 rounded-md max-md:px-8 cursor-pointer">
                            Become A Vet Partner
                        </Link>
                        <div className="mt-8 text-2xl">Contact Us</div>
                        <div className="mt-9">
                            Meowtel Inc. 44 Tehama St San Francisco, CA, 94105
                        </div>
                        <Link to="/Contact" className="justify-center text-center items-center p-2.5 mt-11 font-semibold rounded-md border border-amber-400 border-solid max-md:px-5 max-md:mt-10 cursor-pointer">
                            Contact Us
                        </Link>
                    </div>
                </div>
                <div className="underline text-neutral-200 max-md:max-w-full mt-8">
                    Poodles Petcare © 2024 • All rights reserved |
                    <Link to="#" className="hover:text-neutral-400">
                        {" "}
                        Terms Of Service{" "}
                    </Link>{" "}
                    |
                    <Link to="#" className="hover:text-neutral-400">
                        {" "}
                        Privacy Policy{" "}
                    </Link>{" "}
                    |
                    <Link to="#" className="hover:text-neutral-400">
                        {" "}
                        Anti-Harassment Policy{" "}
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer