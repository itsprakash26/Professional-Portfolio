import { useRef } from "react";
import emailjs from "@emailjs/browser";

function HireForm({ closeModal }) {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_acm51gm",
      "template_gzgunui",
      form.current,
      {
        publicKey: "7aqDMqm0RboeeLuYf",
      }
    )
    .then((result) => {
      console.log("SUCCESS!", result.text);
      alert("Proposal Sent Successfully!");

      form.current.reset();
      closeModal();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert(error.text || error.message || "Something went wrong!");
    });
};

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5">
      <input
        name="name"
        type="text"
        placeholder="Full Name"
        className="w-full p-3 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
      />

      <input
        name="email"
        type="email"
        placeholder="Email Address"
        className="w-full p-3 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
      />

      <input
        name="company"
        type="text"
        placeholder="Company Name"
        className="w-full p-3 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
      />

      <input
        name="project"
        type="text"
        placeholder="Project Type"
        className="w-full p-3 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
      />

      <input
        name="budget"
        type="text"
        placeholder="Estimated Budget"
        className="w-full p-3 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
      />

      <textarea
        name="message"
        rows="5"
        placeholder="Project Description..."
        className="w-full p-3 rounded-lg bg-[#0c1327] border border-gray-700 outline-none resize-none"
      />

      <div className="flex gap-4">
        <button
          type="submit"
          className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg"
        >
          Send Proposal
        </button>

        <button
          type="button"
          onClick={closeModal}
          className="border border-gray-600 px-6 py-3 rounded-lg"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default HireForm;