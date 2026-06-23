export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-3xl w-[400px]">
        <h1 className="text-4xl text-white font-bold mb-8">
          Register
        </h1>

        <input
          placeholder="Full Name"
          className="w-full p-4 mb-4 rounded-xl bg-zinc-800 text-white"
        />

        <input
          placeholder="Email"
          className="w-full p-4 mb-4 rounded-xl bg-zinc-800 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 rounded-xl bg-zinc-800 text-white"
        />

        <button className="w-full bg-green-600 py-4 rounded-xl text-white font-semibold">
          Create Account
        </button>
      </div>
    </div>
  );
}
