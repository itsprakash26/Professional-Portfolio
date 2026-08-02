import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    show && (
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-6 right-6 bg-violet-600 p-4 rounded-full shadow-lg hover:bg-violet-700"
      >
        <FaArrowUp />
      </button>
    )
  );
}

export default ScrollTop;