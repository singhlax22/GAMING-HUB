export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-[#060B1F] text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        ⚙️ Website Settings
      </h1>

      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
        <h2 className="text-2xl mb-4">
          🏦 Manual Checkout Details
        </h2>

        <input
          placeholder="QR Code Image URL"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <input
          placeholder="Wallet / Bank Name"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <input
          placeholder="Account Number"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <button className="bg-blue-600 px-5 py-2 rounded">
          Save Checkout Details
        </button>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
        <h2 className="text-2xl mb-4">
          📞 Customer Support Info
        </h2>

        <input
          placeholder="Support Phone / WhatsApp"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <input
          placeholder="Support Email"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <button className="bg-green-600 px-5 py-2 rounded">
          Save Contact Info
        </button>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl mb-6">
        <h2 className="text-2xl mb-4">
          📱 Manage Social Links
        </h2>

        <input
          placeholder="Facebook URL"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <input
          placeholder="Instagram URL"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <input
          placeholder="Discord URL"
          className="w-full p-3 rounded bg-zinc-800 mb-3"
        />

        <button className="bg-purple-600 px-5 py-2 rounded">
          Save Social Links
        </button>
      </div>

      <div className="bg-zinc-900 p-6 rounded-xl">
        <h2 className="text-2xl mb-4">
          💳 Payment Methods
        </h2>

        <div className="space-y-2">
          <label className="block">
            <input type="checkbox" className="mr-2" />
            eSewa
          </label>

          <label className="block">
            <input type="checkbox" className="mr-2" />
            Khalti
          </label>

          <label className="block">
            <input type="checkbox" className="mr-2" />
            PayPal
          </label>

          <label className="block">
            <input type="checkbox" className="mr-2" />
            UPI
          </label>
        </div>

        <button className="bg-yellow-600 px-5 py-2 rounded mt-4">
          Save Payment Methods
        </button>
      </div>

    </div>
  );
}
