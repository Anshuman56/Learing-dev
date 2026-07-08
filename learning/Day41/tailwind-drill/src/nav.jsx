export default function Nav() {
  return (
    <div className="bg-amber-200/23 py-3 px-6 border-b-2">
      <div className="md:max-w-7xl flex justify-around items-center mx-auto">
        <h1 className="font-bold cursor-pointer">My App</h1>
        <ul className="md:flex space-x-8 ">
          <li className="hover:underline cursor-pointer rounded transition py-1 px-3">
            Home
          </li>
          <li className="hover:underline cursor-pointer rounded py-1 px-3">
            Features
          </li>
          <li className="hover:underline cursor-pointer rounded py-1 px-3">
            Pricing
          </li>
          <li className="hover:underline cursor-pointer rounded py-1 px-3">
            About
          </li>
        </ul>
        <button className="bg-blue-400 cursor-pointer text-white hover:bg-blue-200 rounded font-bold transition px-8 py-2">
          Sign Up
        </button>
      </div>
    </div>
  );
}
