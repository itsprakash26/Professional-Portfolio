import { testimonials } from "../../data/testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="py-28 bg-[#060816]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-violet-400">
            Testimonials
          </p>

          <h2 className="text-5xl font-bold mt-4">
            What Clients Say
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;