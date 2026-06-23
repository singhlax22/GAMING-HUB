"use client";

import { useState, useEffect } from "react";

export default function CustomerDashboard() {
  const [orders, setOrders] = useState<any[]>([]);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // 1. Fetch User Login Status
    const savedUser = localStorage.getItem("nexus_user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      // If not logged in, boot them to the homepage
      window.location.href = "/"; 
    }

    // 2. Fetch User Orders
    const savedOrders = JSON.parse(localStorage.getItem("nexus_orders") || "[]");
    setOrders(savedOrders);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("nexus_user");
    window.location.href = "/";
  };

  if (!user) return <div className="min-h-screen bg-[#0a0c16]"></div>;

  return (
    <main className="min-h-screen bg-[#0a0c16] text-white font-sans">
      {/* Navbar */}
      <nav className="border-b border-gray-800 bg-[#0d1124]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">NEXUSDROP</a>
          <a href="/" className="text-cyan-400 hover:text-white text-sm font-bold flex items-center gap-2">
            <span>←</span> Back to Store
          </a>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* PROFILE SIDEBAR */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-[#13182b] border border-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {user.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{user.name}</h3>
                  <p className="text-xs text-cyan-400">UID: {user.uid}</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 mb-6">{user.email}</p>
              
              <hr className="border-gray-800 my-4" />
              
              <ul className="space-y-4 font-semibold text-sm">
                <li className="text-cyan-400 cursor-pointer flex items-center gap-3">
                  <span className="bg-cyan-500/20 p-1.5 rounded text-lg">📦</span> My Orders
                </li>
                <li className="text-gray-500 hover:text-white cursor-pointer flex items-center gap-3 transition-colors">
                  <span className="bg-gray-800 p-1.5 rounded text-lg">🎟️</span> Saved Vouchers
                </li>
                <li className="text-gray-500 hover:text-white cursor-pointer flex items-center gap-3 transition-colors">
                  <span className="bg-gray-800 p-1.5 rounded text-lg">🎧</span> Support Tickets
                </li>
                <li className="text-gray-500 hover:text-white cursor-pointer flex items-center gap-3 transition-colors">
                  <span className="bg-gray-800 p-1.5 rounded text-lg">⚙️</span> Account Settings
                </li>
              </ul>

              <button onClick={handleLogout} className="w-full mt-8 bg-red-600/20 hover:bg-red-600 text-red-500 hover:text-white border border-red-600/50 py-2.5 rounded-lg text-sm font-bold transition-colors">
                Sign Out
              </button>
            </div>
          </div>

          {/* MAIN ORDERS SECTION */}
          <div className="lg:col-span-3">
            <h1 className="text-3xl font-bold mb-2">My Orders</h1>
            <p className="text-gray-400 mb-8">Track your purchases and top-up status here.</p>

            <div className="bg-[#13182b] border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
              <div className="grid grid-cols-5 gap-4 p-4 border-b border-gray-800 bg-[#0d1124] font-bold text-sm text-gray-400 hidden md:grid">
                <div className="col-span-1">Order ID</div>
                <div className="col-span-2">Item Details</div>
                <div className="col-span-1">Date</div>
                <div className="col-span-1 text-right">Status</div>
              </div>

              <div className="divide-y divide-gray-800">
                {orders.map((order) => (
                  <div key={order.id} className="grid grid-cols-1 md:grid-cols-5 gap-4 p-5 items-center hover:bg-[#1a2038] transition-colors">
                    <div className="col-span-1 text-cyan-400 font-mono text-sm">{order.id}</div>
                    <div className="col-span-2 font-bold text-gray-200">
                      {order.itemName} <br/> 
                      <span className="text-xs text-gray-500">Paid via {order.method}</span>
                      {order.manualDetails && (
                        <div className="text-[10px] text-gray-600 mt-1">Sender: {order.manualDetails.name} ({order.manualDetails.number})</div>
                      )}
                    </div>
                    <div className="col-span-1 text-sm text-gray-400">{order.date}</div>
                    <div className="col-span-1 flex justify-start md:justify-end">
                      {order.status === "Pending" ? (
                        <div className="bg-yellow-500/20 text-yellow-500 border border-yellow-500/50 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span> Processing
                        </div>
                      ) : (
                        <div className="bg-green-500/20 text-green-400 border border-green-500/50 px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span> Completed
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {orders.length === 0 && (
                  <div className="p-16 text-center">
                    <div className="text-4xl mb-4">🛒</div>
                    <div className="text-gray-400">You haven't made any purchases yet.</div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
