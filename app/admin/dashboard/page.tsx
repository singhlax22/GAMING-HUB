export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-zinc-900 p-8 rounded-3xl">
          Revenue
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          Orders
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          Products
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          Users
        </div>
      </div>
    </div>
  );
}
