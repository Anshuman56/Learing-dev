export default function Pokemon() {
  return (
    <div className="bg-white border-[0.5px] my-4 max-w-100 mx-auto py-8 px-7 rounded-lg border-gray-300">
      <h2 className="text-sx text-center text-gray-600 tracking-widest uppercase font-semibold">
        Pokédex
      </h2>
      <h1 className="text-2xl text-center font-medium">Find a pokémon</h1>
      <div className="flex gap-4 my-3">
        <input
          type="text"
          className="border-[0.5px] border-gray-200 flex-1 rounded px-3"
          placeholder="Pickactu"
        />
        <button className=" border-gray-400 border-[0.5px] py-1 px-5 rounded">
          Search
        </button>
      </div>
      <button className=" border-gray-400 border-[0.5px] py-1 px-5 w-full rounded">
        Random
      </button>
      <div className="bg-gray-100 rounded-lg my-3 py-5 px-4 ">
        <div className="w-20 h-20 bg-white rounded-full mx-auto border-[0.5px] border-gray-300"></div>
        <small className="block text-gray-400 text-center">#006</small>
        <h2 className="text-2xl text-center font-medium">Charizard</h2>
        <div class="mt-2 flex gap-2 justify-center">
          <span class="rounded-full px-3 py-1 text-xs font-semibold capitalize bg-red-100 text-red-800">
            Fire
          </span>
          <span class="rounded-full px-3 py-1 text-xs font-semibold capitalize bg-indigo-100 text-indigo-800">
            Flying
          </span>
        </div>
        <hr className="my-4 border-gray-300" />
        <div class="flex justify-around text-center">
          <div>
            <p class="font-bold text-gray-800">1.7 m</p>
            <p class="text-xs text-gray-400">Height</p>
          </div>
          <div>
            <p class="font-bold text-gray-800">90.0 kg</p>
            <p class="text-xs text-gray-400">Weight</p>
          </div>
        </div>
      </div>
    </div>
  );
}
