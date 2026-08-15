function HeroButtons() {
  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const downloadCV = () => {
    window.open("./Omprakash.pdf", "_blank");
  };
  return (
    <div className="flex gap-5 mt-10">

      <button 
      onClick={goToProjects}
      className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-lg">
        View My Work
      </button>

      <button 
      onClick={downloadCV}
      className="border border-gray-600 px-8 py-4 rounded-lg hover:border-violet-500">
        Download CV
      </button>

    </div>
  );
}

export default HeroButtons;