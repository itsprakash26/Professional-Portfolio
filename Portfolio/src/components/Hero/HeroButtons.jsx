function HeroButtons() {
  const goToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex gap-5 mt-10">

      {/* View My Work - Button hi rahega */}
      <button
        onClick={goToProjects}
        className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-lg"
      >
        View My Work
      </button>

      {/* Download CV - Direct PDF link */}
      <a
        href="/Omprakash.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-600 px-8 py-4 rounded-lg hover:border-violet-500 inline-flex items-center"
      >
        Download CV
      </a>

    </div>
  );
}

export default HeroButtons;