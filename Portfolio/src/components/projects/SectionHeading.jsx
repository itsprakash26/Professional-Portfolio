function SectionHeading({ subtitle, title }) {
  return (
    <div className="text-center mb-16">
      <p className="uppercase tracking-[4px] text-violet-400 font-medium">
        {subtitle}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeading;