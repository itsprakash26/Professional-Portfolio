import hero from "../../assets/hero.png";

function HeroImage() {
  return (
    <div className="relative flex justify-center">
      {/* Purple Glow */}
      <div className="absolute w-96 h-96 bg-violet-600 rounded-full blur-[120px] opacity-30"></div>

      {/* Profile Image */}
      <img
        src={hero}
        alt="Developer"
        className="relative w-[500px]"
      />

      {/* Floating Code Card */}
      <div className="absolute right-0 top-32 bg-[#111827] border border-gray-700 rounded-xl p-5 shadow-xl">
        <p className="text-violet-400 mb-2">&lt;/&gt; Code</p>

        <pre className="text-sm text-gray-300">
{`const developer = {
  name: "Om Prakash",
  skills: ["React","JS","CSS"],
  passion: "Building"
}`}
        </pre>
      </div>
    </div>
  );
}

export default HeroImage;