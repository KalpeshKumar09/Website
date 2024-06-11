import about3 from "../Images/About-Images/about3.png";
import about1 from "../Images/About-Images/about1.png";
import about2 from "../Images/About-Images/about2.png";
import about4 from "../Images/About-Images/about4.png";

const About = () => {
    return (
        <>
            <div className="flex justify-center items-center min-h-screen px-4"  >
                <div className="flex flex-col gap-2 md:gap-16 h-screen bg-center bg-no-repeat justify-center bg-contain max-w-4xl" style={{
                    backgroundImage: `url(${about4})`,
                }} >
                    <div className="flex items-center justify-center">
                        <img src={about3} alt="About Image" className="w-full max-w-xs md:max-w-md" />
                    </div>
                    <div className="flex justify-center">
                        <p className="my-2 py-6 text-center text-sm md:text-base">
                            Meowtel is the #1 cat sitting app nationwide, trusted by thousands of cat lovers
                            across America. Kitties are our top priority for the thousands of local cat sitters
                            who deliver Meowtel's purrfect hospitality each and every day.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center min-h-screen px-4 bg-center bg-no-repeat bg-contain" >
                <div className="flex flex-col gap-2 md:gap-16 h-screen bg-center bg-no-repeat justify-center bg-contain max-w-4xl" style={{
                    backgroundImage: `url(${about2})`,
                }}>
                    <div className="flex justify-center flex-row">
                        <img src={about1} alt="Mission Image" className="w-full md:w-1/3" />
                        <h1 className=" text-center text-lg md:text-2xl">
                            Our <span className="font-semibold">Mission</span>
                        </h1>
                    </div>
                    <div className="flex flex-col gap-16 shadow-2xl p-4 md:p-20 w-full max-w-4xl">
                        <div className="flex justify-center items-center">
                            <p className="my-2 py-6 text-center text-sm md:text-base">
                                Meowtel is on a mission to help every cat and cat parent live their best life. As
                                a cat mom who loves to travel, I used to be so stressed out leading up to my
                                trips! My kitties, Goosie and Lefty, need a lot of TLC while I'm away, and they
                                would be incredibly upset to stay in a pet kennel or boarding facility. That's
                                why I created Meowtel: because cats deserve quality, in-home care from a
                                trusted and insured cat whisperer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
