export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#060B1F] text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        ⚡ Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        <a
          href="/admin/games"
          className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800"
        >
          🎮 Manage Games
        </a>

        <a
          href="/admin/products"
          className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800"
        >
          💰 Store Items
        </a>

        <a
          href="/admin/orders"
          className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800"
        >
          👥 Orders
        </a>

        <a
          href="/admin/settings"
          className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800"
        >
          ⚙️ Website Settings
        </a>

      </div>
    </div>
  );
}
