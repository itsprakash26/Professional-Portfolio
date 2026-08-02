function Button({ children }) {
  return (
    <button className="bg-violet-600 px-6 py-3 rounded-lg text-white hover:bg-violet-700 transition">
      {children}
    </button>
  );
}

export default Button;