import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
// import ThemeToggle from "../ui/ThemeToggle";

const links = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Blog",
  "Contact",
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#060816]/80 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-violet-500">
          &lt;/&gt; Prakash
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:text-violet-400 duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
        

        {/* Hire Button */}
        <div className="hidden md:flex items-center gap-8">

  <button className="bg-violet-600 px-6 py-3 rounded-lg hover:bg-violet-700">
    Hire Me
  </button>
</div>

        {/* Mobile Button */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#111827]">
          {links.map((item) => (
            <div
              key={item}
              className="py-4 px-6 border-b border-gray-700"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;