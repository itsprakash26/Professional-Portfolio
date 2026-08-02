import Stats from "./Stats";
import Button from "../ui/Button";

function About() {
    return (

        <section
            id="about"
            className="bg-[#050816] py-28"
        >

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

                <div>

                    <span className="text-violet-400 uppercase tracking-widest text-sm">
                        About Me
                    </span>

                    <h2 className="text-5xl font-bold mt-5 leading-tight">

                        I'm passionate about creating digital solutions

                    </h2>

                    <p className="text-gray-400 mt-8 leading-8">

                        I specialize in building responsive,
                        modern web applications using
                        React, JavaScript and TailwindCSS.

                    </p>

                    <div className="mt-10">

                        <Button>
                            Learn More
                        </Button>

                    </div>

                </div>

                <Stats />

            </div>

        </section>

    );
}

export default About;