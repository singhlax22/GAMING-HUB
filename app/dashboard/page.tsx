export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Customer Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">Orders</h2>
          <p className="text-zinc-400 mt-2">
            View all your orders.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">Wallet</h2>
          <p className="text-zinc-400 mt-2">
            Check wallet balance.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold">Profile</h2>
          <p className="text-zinc-400 mt-2">
            Manage account settings.
          </p>
        </div>
      </div>
    </div>
  );
}
