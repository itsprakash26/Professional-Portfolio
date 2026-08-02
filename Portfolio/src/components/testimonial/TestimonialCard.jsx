function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#0c1327] border border-gray-800 rounded-xl p-6 hover:border-violet-500 transition">
      <p className="text-gray-300 leading-7">
        "{testimonial.review}"
      </p>

      <div className="mt-6">
        <h3 className="font-bold text-lg">
          {testimonial.name}
        </h3>

        <p className="text-violet-400 text-sm">
          {testimonial.role}
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;