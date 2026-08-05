import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { socialLinks, contactInfo } from "../../data/socialLinks";

function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#050816] lg:w-full md:w-full w-[550px]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-violet-400">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left */}

          <div>
  <h3 className="text-3xl font-bold">
    Get In Touch
  </h3>

  <p className="text-gray-400 mt-6 leading-8">
    Feel free to contact me for freelance work,
    collaboration or full-time opportunities.
  </p>

  {/* Contact Info */}

  <div className="mt-8 space-y-5">

    {contactInfo.map((item) => {
      const Icon = item.icon;

      return (
        <a
          key={item.label}
          href={item.link}
          className="flex items-center gap-4 hover:text-violet-500 transition"
        >
          <Icon className="text-2xl text-violet-500" />

          <div>
            <p className="text-gray-400 text-sm">
              {item.label}
            </p>

            <p>{item.value}</p>
          </div>
        </a>
      );
    })}

  </div>

  {/* Social Links */}

  <div className="flex gap-5 mt-10">

    {socialLinks.map((item) => {
      const Icon = item.icon;

      return (
        <a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#0c1327] border border-gray-700 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition"
        >
          <Icon size={20} />
        </a>
      );
    })}

  </div>
</div>

          {/* Right */}

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-[#0c1327] border border-gray-700 outline-none"
            />

            <button className="bg-violet-600 hover:bg-violet-700 px-8 py-4 rounded-lg">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;