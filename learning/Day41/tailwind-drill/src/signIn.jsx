export default function SignIn() {
  return (
    <div className="flex items-center h-screen">
      <div className="bg-gray-200 max-w-xs mx-auto py-5 px-4 rounded-2xl">
        <h1 className="text-center my-3 text-2xl font-bold    ">Sign-In</h1>
        <label className="">Enter the email</label>{" "}
        <input
          className="border w-full py-1 px-3 focus:ring-2 focus:ring-blue-400 rounded-sm my-3"
          type="text"
        />
        <label className="">Enter the Password</label>{" "}
        <input
          className="border w-full py-1 px-3 focus:ring-2 focus:ring-blue-400 rounded mt-3"
          type="text"
        />
        <small>Must be at least 8 characters</small>
        <button className="bg-blue-400 mt-3 text-white hover:bg-fuchsia-500 rounded font-light transition block mx-auto px-8 py-2">
          Button A
        </button>
      </div>
    </div>
  );
}
