export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex bg-[#050B1F] text-white">

      <aside className="w-80 border-r border-blue-950 p-6">
        <h1 className="text-4xl font-bold text-blue-400 mb-12">
          ⚡ ADMIN
        </h1>

        <div className="space-y-4">

          <a
            href="/admin/games"
            className="block bg-blue-600 p-4 rounded-xl text-xl font-semibold"
          >
            🎮 Manage Games
          </a>

          <a
            href="/admin/products"
            className="block p-4 rounded-xl text-xl font-semibold hover:bg-blue-950"
          >
            💰 Store Items
          </a>

          <a
            href="/admin/orders"
            className="block p-4 rounded-xl text-xl font-semibold hover:bg-blue-950"
          >
            👥 Orders
          </a>

          <a
            href="/admin/settings"
            className="block p-4 rounded-xl text-xl font-semibold hover:bg-blue-950"
          >
            ⚙️ Settings
          </a>

        </div>
      </aside>

      <main className="flex-1 p-12">
        {children}
      </main>

    </div>
  );
}
