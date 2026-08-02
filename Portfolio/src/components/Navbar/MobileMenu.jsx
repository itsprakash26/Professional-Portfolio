function MobileMenu({
  open,
  links,
  setOpen,
  setShowHireModal,
}) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-[#111827]">
      {links.map((item) => (
        <a
          key={item.name}
          href={item.path}
          onClick={() => setOpen(false)}
          className="block py-4 px-6 border-b border-gray-700 hover:bg-violet-600 transition"
        >
          {item.name}
        </a>
      ))}

      <div className="p-4">
        <button
          onClick={() => {
            setOpen(false);
            setShowHireModal(true);
          }}
          className="w-full bg-violet-600 hover:bg-violet-700 py-3 rounded-lg"
        >
          Hire Me
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;