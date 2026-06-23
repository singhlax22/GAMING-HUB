export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-zinc-900 p-8 rounded-2xl w-[400px]">
        <h1 className="text-3xl font-bold text-white mb-6">
          Admin Login
        </h1>

        <input
          placeholder="Email"
          className="w-full p-3 rounded-lg mb-4 bg-zinc-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg mb-4 bg-zinc-800 text-white"
        />

        <button className="w-full bg-blue-600 p-3 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
