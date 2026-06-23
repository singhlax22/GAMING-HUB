"use client";

import { useState, useEffect } from "react";
import GameSlider from "../components/GameSlider";
import GamesGrid from "../components/GamesGrid";
import TiltCard from "../components/TiltCard";
import AboutSection from "../components/AboutSection";
import SiteFooter from "../components/SiteFooter";
import AuthModal from "../components/AuthModal";
import PaymentModal from "../components/PaymentModal";

export default function Home() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("nexus_user");
    if (savedUser) setUser(JSON.parse(savedUser));

    const saved = localStorage.getItem("nexus_purchase_items");
    if (saved) {
      const allItems = JSON.parse(saved);
      const popularItems = allItems.filter((item: any) => item.isPopular);
      setFeaturedProducts(popularItems);
    } else {
      setFeaturedProducts([
        { uc: "600", bonus: "102", price: "8.99" },
        { uc: "1500", bonus: "405", price: "22.49" },
        { uc: "3000", bonus: "1060", price: "44.99" },
      ]);
    }
  }, []);

  const handleBuyClick = (product: any) => {
    setSelectedItem(product);
    setIsPaymentModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("nexus_user");
    setUser(null);
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-[#0a0c16] text-white overflow-hidden">
      <nav className="sticky top-0 z-50 bg-[#0d1124]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            GAMING HUB
          </h1>
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-400">
            {user && (
              <a href="/customer" className="hover:text-white transition flex items-center gap-2 text-cyan-400">
                <span className="bg-cyan-500/20 text-cyan-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">👤</span>
                DASHBOARD
              </a>
            )}
            {user ? (
              <button onClick={handleLogout} className="text-gray-400 hover:text-red-400 transition-colors font-bold">
                Log Out
              </button>
            ) : (
              <button onClick={() => setIsAuthModalOpen(true)} className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white px-5 py-2 rounded-lg font-bold transition-all shadow-lg hover:scale-105">
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      <GameSlider />
      <GamesGrid />

      <section className="max-w-7xl mx-auto px-6 py-12 border-t border-gray-800/50">
        <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-gray-200">
          <span className="w-1.5 h-6 bg-cyan-400 rounded-full"></span> HOT OFFERS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 perspective-[1000px]">
          {featuredProducts.map((product, index) => (
            <TiltCard key={index} title={`${product.uc} + ${product.bonus} UC`} price={product.price} image={product.image || ""} onClick={() => handleBuyClick(product)} />
          ))}
          {featuredProducts.length === 0 && <div className="col-span-4 text-center py-10 text-gray-500">No popular items available right now.</div>}
        </div>
      </section>

      <AboutSection />
      <SiteFooter />

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} selectedItem={selectedItem} />
    </main>
  );
}

