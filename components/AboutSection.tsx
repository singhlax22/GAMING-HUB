"use client";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 border-t border-gray-800/50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose GAMING HUB?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Your trusted global platform for instant gaming top-ups, secure payments, and exclusive offers. Available worldwide.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#12162b] p-8 rounded-2xl border border-zinc-800 text-center hover:border-cyan-500/50 transition-colors shadow-lg">
          <div className="text-5xl mb-6">⚡</div>
          <h3 className="text-xl font-bold mb-3 text-white">Instant Global Delivery</h3>
          <p className="text-sm text-gray-400 leading-relaxed">Receive your UC and game items instantly after successful payment, no matter where you are in the world.</p>
        </div>
        <div className="bg-[#12162b] p-8 rounded-2xl border border-zinc-800 text-center hover:border-cyan-500/50 transition-colors shadow-lg">
          <div className="text-5xl mb-6">🔒</div>
          <h3 className="text-xl font-bold mb-3 text-white">Secure Transactions</h3>
          <p className="text-sm text-gray-400 leading-relaxed">Your payments are fully encrypted and protected. We support major global payment methods and manual transfers.</p>
        </div>
        <div className="bg-[#12162b] p-8 rounded-2xl border border-zinc-800 text-center hover:border-cyan-500/50 transition-colors shadow-lg">
          <div className="text-5xl mb-6">🌍</div>
          <h3 className="text-xl font-bold mb-3 text-white">24/7 Global Support</h3>
          <p className="text-sm text-gray-400 leading-relaxed">Our dedicated customer service team is available around the clock to assist you with any questions or order inquiries.</p>
        </div>
      </div>
    </section>
  );
}
