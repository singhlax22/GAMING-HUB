export default function GamesPage() {
  return (
    <>
      <h1 className="text-6xl font-bold mb-10">
        Games Grid Manager
      </h1>

      <div className="bg-[#0E1735] p-10 rounded-3xl max-w-4xl">

        <h2 className="text-3xl font-bold mb-8">
          🎮 Add New Game
        </h2>

        <input
          placeholder="e.g. CALL OF DUTY"
          className="w-full p-4 rounded-xl bg-black mb-5"
        />

        <input
          placeholder="https://image-url.com"
          className="w-full p-4 rounded-xl bg-black mb-5"
        />

        <input
          placeholder="/pubg"
          className="w-full p-4 rounded-xl bg-black mb-5"
        />

        <div className="grid grid-cols-2 gap-4 mb-5">
          <input
            placeholder="NEW"
            className="p-4 rounded-xl bg-black"
          />

          <input
            placeholder="🔥"
            className="p-4 rounded-xl bg-black"
          />
        </div>

        <select className="w-full p-4 rounded-xl bg-black mb-8">
          <option>Orange</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Red</option>
        </select>

        <button className="w-full bg-blue-600 p-5 rounded-xl text-2xl font-bold">
          Add Game to Grid
        </button>

      </div>
    </>
  );
}
