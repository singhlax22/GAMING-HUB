export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#060B1F] text-white p-10">

      <h1 className="text-4xl font-bold mb-10">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <a href="/admin/games" className="bg-zinc-900 p-6 rounded-2xl">
          Manage Games
        </a>

        <a href="/admin/products" className="bg-zinc-900 p-6 rounded-2xl">
          Manage Products
        </a>

        <a href="/admin/payments" className="bg-zinc-900 p-6 rounded-2xl">
          Payment Methods
        </a>

        <a href="/admin/socials" className="bg-zinc-900 p-6 rounded-2xl">
          Social Links
        </a>

      </div>
    </div>
  );
}
