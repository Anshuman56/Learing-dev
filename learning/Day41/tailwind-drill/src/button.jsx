export default function Button() {
  return (
    <div className="bg-amber-500/20 py-8 flex justify-center gap-2">
      <button className="bg-blue-400 text-white hover:bg-fuchsia-500 rounded font-light transition md:font-extrabold px-8 py-2">
        Button A
      </button>
      <button className="bg-white border-2 border-gray-200 hover:bg-gray-400 transition hover:text-white px-8 py-2 rounded">
        Button B
      </button>
      <button className="bg-red-500 text-white hover:bg-lime-300 px-8 py-2 transition-all rounded">
        {" "}
        Button C
      </button>

      <button className="bg-transparent text-blue-400 hover:bg-white px-8 py-2 transition rounded">
        {" "}
        Button C
      </button>
    </div>
  );
}
