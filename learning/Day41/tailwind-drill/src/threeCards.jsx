export default function ThreeCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:max-w-7xl mx-auto mt-6">
      <div className="bg-gray-200/30 rounded py-5 px-3 gap-2 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold">Users</h1>
        <h2 className="text-2xl font-bold"> 1,240</h2>
      </div>
      <div className="bg-gray-200/30 rounded py-5 px-3 gap-2 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold">Revenue</h1>
        <h2 className="text-2xl font-bold">$8,410</h2>
      </div>
      <div className="bg-gray-200/30 rounded py-5 px-3 gap-2 flex flex-col items-center">
        <h1 className="text-3xl font-extrabold">Growth</h1>
        <h2 className="text-green-400 text-2xl font-bold">+12%</h2>
      </div>
    </div>
  );
}
