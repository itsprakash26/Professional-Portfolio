import HeroImage from "./HeroImage";
import HeroButtons from "./HeroButtons";
import TechIcons from "./TechIcons";

function Hero() {
  return (
    <section className="min-h-screen bg-[#060816] flex items-center">
      <div className="max-w-7xl mt-10 mx-auto grid lg:grid-cols-2 gap-16 items-center px-6">

        {/* Left */}

        <div>

          <span className="bg-violet-900/40 text-violet-400 px-4  py-2 rounded-full text-sm">
            I'M A WEB DEVELOPER
          </span>

          <h1 className="text-6xl font-bold mt-8 leading-tight">
            Hi, I'm
            <span className="text-violet-500"> OM </span>
          </h1>

          <h2 className="text-5xl font-bold mt-2">
            I build things for the web.
          </h2>

          <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">
            I'm a passionate frontend developer specializing in building
            exceptional digital experiences using React, JavaScript,
            and modern web technologies.
          </p>

          <HeroButtons />

          <TechIcons />

        </div>

        {/* Right */}

        <HeroImage />

      </div>
    </section>
  );
}

export default Hero;