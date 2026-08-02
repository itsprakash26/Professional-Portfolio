import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import HireModal from "../hire/HireModal";
import MobileMenu from "./MobileMenu";

// import ThemeToggle from "../ui/ThemeToggle";

const links = [
  {
    name: "Home",
    path: "#home",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Skills",
    path: "#skills",
  },
  {
    name: "Projects",
    path: "#projects",
  },
  {
    name: "Blog",
    path: "#blog",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

function Navbar() {
  const [showHireModal, setShowHireModal] = useState(false);

  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#060816]/80 backdrop-blur-lg border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
          {/* Logo */}
          <h1 className="text-2xl font-bold text-violet-500">
            &lt;/&gt; Prakash
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((item) => (
              <li key={item.name}>
                <a
                  href={item.path}
                  className="hover:text-violet-500 transition duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Button */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setShowHireModal(true)}
              className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-lg"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Button */}
          <button className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          open={open}
          links={links}
          setOpen={setOpen}
          setShowHireModal={setShowHireModal}
        />
      </nav>

      <HireModal
        open={showHireModal}
        closeModal={() => setShowHireModal(false)}
      />
    </>
  );
}

export default Navbar;
