"use client";

import { useState, useEffect } from "react";
import PaymentModal from "../../components/PaymentModal";
import AuthModal from "../../components/AuthModal";

export default function PubgPage() {
  const [activeTab, setActiveTab] = useState("PURCHASE");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [purchaseItems, setPurchaseItems] = useState<any[]>([]);
  const [shopItems, setShopItems] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("nexus_user");
    if (savedUser) setUser(JSON.parse(savedUser));

    const savedPurchase = localStorage.getItem("nexus_purchase_items");
    if (savedPurchase) {
      setPurchaseItems(JSON.parse(savedPurchase));
    } else {
      setPurchaseItems([{ id: 1, uc: "600", bonus: "102", price: "8.99", oldPrice: "9.99", discount: "-10%", isPopular: true, bonusPercent: "17%" }]);
    }

    const savedShop = localStorage.getItem("nexus_shop_items");
    if (savedShop) setShopItems(JSON.parse(savedShop));
  }, []);

  const handleBuyClick = (item: any) => {
    setSelectedItem(item);
    setIsPaymentModalOpen(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("nexus_user");
    setUser(null);
    window.location.reload();
  };

  return (
    <main className="min-h-screen bg-[#0a0c16] text-white font-sans pb-20">
      <nav className="sticky top-0 z-50 bg-[#0d1124]/90 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            GAMING HUB
          </a>
          <div className="flex items-center gap-6 text-sm font-semibold text-gray-400">
            {user && (
              <a href="/customer" className="hover:text-white transition flex items-center gap-2 text-cyan-400">
                <span className="bg-cyan-500/20 text-cyan-400 w-6 h-6 rounded-full flex items-center justify-center text-xs">👤</span>
                DASHBOARD
              </a>
            )}
            {user ? (
              <button onClick={handleLogout} className="text-gray-400 hover:text-red-400 transition-colors font-bold">Log Out</button>
            ) : (
              <button onClick={() => setIsAuthModalOpen(true)} className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-cyan-500 hover:to-blue-600 text-white px-5 py-2 rounded-lg font-bold transition-all shadow-lg hover:scale-105">
                Sign In
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="relative pt-12 pb-6 px-6 md:px-12 overflow-hidden bg-gradient-to-r from-blue-900/80 to-[#0a0c16]">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-500/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center mt-8">
          <div className="w-24 h-24 bg-zinc-800 rounded-2xl border-2 border-white/10 overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=200" alt="PUBG" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold">PUBG MOBILE</h1>
              <span className="bg-white text-black text-xs font-bold px-2 py-1 rounded flex items-center gap-1"><span className="text-blue-500">✔</span> Official</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-800 bg-[#0d1124]">
        <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto hide-scrollbar">
          {["PURCHASE", "SHOP"].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-5 text-sm font-bold tracking-wider whitespace-nowrap border-b-2 transition-colors ${activeTab === tab ? "border-cyan-400 text-cyan-400" : "border-transparent text-gray-400 hover:text-white"}`}>
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {activeTab === "PURCHASE" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {purchaseItems.map((item) => (
              <div key={item.id} onClick={() => handleBuyClick(item)} className="bg-[#13182b] border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-colors group cursor-pointer relative flex flex-col">
                {item.isPopular && <div className="absolute top-0 left-0 bg-green-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-br-lg z-10">Popular</div>}
                <div className="h-32 bg-[#1a2038] flex items-center justify-center relative p-4">
                   <div className="absolute bottom-2 right-2 bg-gradient-to-r from-orange-400 to-yellow-500 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg z-10">{item.bonusPercent}</div>
                  <div className="w-24 h-16 bg-gradient-to-br from-yellow-600 to-yellow-400 rounded-lg transform -rotate-6 group-hover:scale-110 transition-transform shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex items-center justify-center border-2 border-yellow-300">
                     <span className="font-bold text-xl text-yellow-900 tracking-tighter">UC</span>
                  </div>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between items-center text-center space-y-4">
                  <h3 className="text-xl font-bold text-white flex items-center gap-1">
                    <span className="text-xs border border-gray-500 text-gray-400 px-1 rounded mr-1">UC</span>{item.uc} <span className="text-yellow-500">+ {item.bonus}</span>
                  </h3>
                  <div><div className="text-xs text-gray-500 line-through mb-1">{item.oldPrice} NPR</div><div className="text-lg font-bold text-yellow-500">From {item.price} NPR</div></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "SHOP" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopItems.map((item) => (
              <div key={item.id} onClick={() => !item.isObtained && handleBuyClick(item)} className={`bg-[#13182b] border border-gray-800 rounded-xl overflow-hidden transition-colors relative flex flex-col ${item.isObtained ? 'opacity-70 cursor-not-allowed' : 'hover:border-blue-500/50 cursor-pointer group'}`}>
                <div className="h-40 bg-zinc-800 relative">
                  <img src={item.imgUrl} className="w-full h-full object-cover opacity-60" alt={item.title} />
                  {item.isObtained && <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center z-10"><div className="border-2 border-white/40 transform -rotate-12 px-6 py-2 rounded text-white/60 font-bold tracking-widest uppercase text-xl backdrop-blur-md">obtained</div></div>}
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  <h3 className="text-sm font-bold text-gray-300 h-10">{item.title}</h3>
                  <div className="flex justify-between items-end border-t border-gray-800 pt-3">
                    <div><div className="text-xs text-gray-600 line-through">{item.oldPrice} NPR</div><div className="text-base font-bold text-yellow-600">From {item.price} NPR</div></div>
                    {!item.isObtained && <button className="w-8 h-8 rounded-full bg-[#1a2035] group-hover:bg-blue-600 text-blue-400 group-hover:text-white flex items-center justify-center transition-colors">🛒</button>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} selectedItem={selectedItem} />
    </main>
  );
}
