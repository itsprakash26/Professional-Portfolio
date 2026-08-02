import { socialLinks } from "../../data/socialLinks";

function Footer() {
  return (
    <footer className="py-10 bg-[#040510] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">

        {/* Logo */}
        <h2 className="text-2xl font-bold text-violet-500">
          {"</>"} Prakash
        </h2>

        {/* Copyright */}
        <p className="text-gray-400 text-center">
          © 2026 Prakash. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-5">
          {socialLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="w-10 h-10 rounded-full bg-[#0c1327] border border-gray-700 flex items-center justify-center hover:bg-violet-600 hover:border-violet-600 transition duration-300"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

      </div>
    </footer>
  );
}

export default Footer;