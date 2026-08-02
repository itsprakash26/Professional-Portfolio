import { FaTimes } from "react-icons/fa";
import HireForm from "./HireForm";

function HireModal({ open, closeModal }) {

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4">

      <div className="bg-[#050816] w-full max-w-2xl rounded-2xl border border-gray-700">

        {/* Header */}

        <div className="flex justify-between items-center p-6 border-b border-gray-700">

          <h2 className="text-3xl font-bold">
            Hire Me
          </h2>

          <button
            onClick={closeModal}
            className="text-2xl hover:text-violet-500"
          >
            <FaTimes />
          </button>

        </div>

        {/* Body */}

        <div className="p-6">

          <HireForm closeModal={closeModal} />

        </div>

      </div>

    </div>
  );
}

export default HireModal;