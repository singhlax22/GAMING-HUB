"use client";

import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("GAMES");

  // --- LOCAL STORAGE STATES ---
  const [games, setGames] = useState<any[]>([]);
  const [purchaseItems, setPurchaseItems] = useState<any[]>([]);
  const [shopItems, setShopItems] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [socials, setSocials] = useState<any[]>([]);
  const [payments, setPayments] = useState<any[]>([]);
  
  // --- ADMIN CHECKOUT DATA ---
  const [adminCheckout, setAdminCheckout] = useState({ qrUrl: "", walletName: "", walletNumber: "" });

  // LOAD DATA
  useEffect(() => {
    const savedGames = localStorage.getItem("nexus_games");
    if (savedGames) setGames(JSON.parse(savedGames));

    const savedPurchase = localStorage.getItem("nexus_purchase_items");
    if (savedPurchase) setPurchaseItems(JSON.parse(savedPurchase));

    const savedShop = localStorage.getItem("nexus_shop_items");
    if (savedShop) setShopItems(JSON.parse(savedShop));
    
    const savedOrders = localStorage.getItem("nexus_orders");
    if (savedOrders) setOrders(JSON.parse(savedOrders));

    const savedSocials = localStorage.getItem("nexus_socials");
    if (savedSocials) setSocials(JSON.parse(savedSocials));

    const savedPayments = localStorage.getItem("nexus_payments");
    if (savedPayments) setPayments(JSON.parse(savedPayments));

    const savedCheckout = localStorage.getItem("nexus_admin_checkout");
    if (savedCheckout) setAdminCheckout(JSON.parse(savedCheckout));
  }, []);

  // --- FORM STATES ---
  const [newGame, setNewGame] = useState({ title: "", tag: "", tagColor: "bg-orange-500", icon: "🔥", img: "", link: "#" });
  const [newPurchase, setNewPurchase] = useState({ uc: "", bonus: "", price: "", oldPrice: "", discount: "", bonusPercent: "", isPopular: false });
  const [newShop, setNewShop] = useState({ title: "", price: "", oldPrice: "", imgUrl: "", isObtained: false });
  const [newSocial, setNewSocial] = useState({ name: "", url: "", letter: "", bgColor: "bg-blue-600" });
  const [newPayment, setNewPayment] = useState({ name: "", icon: "" });

  // --- HANDLERS ---
  const handleAddGame = (e: React.FormEvent) => { e.preventDefault(); const updated = [...games, { ...newGame, id: Date.now() }]; setGames(updated); localStorage.setItem("nexus_games", JSON.stringify(updated)); setNewGame({ title: "", tag: "", tagColor: "bg-orange-500", icon: "🔥", img: "", link: "#" }); };
  const handleDeleteGame = (id: number) => { const updated = games.filter(i => i.id !== id); setGames(updated); localStorage.setItem("nexus_games", JSON.stringify(updated)); };

  const handleAddPurchase = (e: React.FormEvent) => { e.preventDefault(); const updated = [...purchaseItems, { ...newPurchase, id: Date.now() }]; setPurchaseItems(updated); localStorage.setItem("nexus_purchase_items", JSON.stringify(updated)); setNewPurchase({ uc: "", bonus: "", price: "", oldPrice: "", discount: "", bonusPercent: "", isPopular: false }); };
  const handleDeletePurchase = (id: number) => { const updated = purchaseItems.filter(i => i.id !== id); setPurchaseItems(updated); localStorage.setItem("nexus_purchase_items", JSON.stringify(updated)); };
  
  const handleAddShop = (e: React.FormEvent) => { e.preventDefault(); const updated = [...shopItems, { ...newShop, id: Date.now() }]; setShopItems(updated); localStorage.setItem("nexus_shop_items", JSON.stringify(updated)); setNewShop({ title: "", price: "", oldPrice: "", imgUrl: "", isObtained: false }); };
  const handleDeleteShop = (id: number) => { const updated = shopItems.filter(i => i.id !== id); setShopItems(updated); localStorage.setItem("nexus_shop_items", JSON.stringify(updated)); };

  const handleConfirmOrder = (orderId: string) => { const updated = orders.map(o => o.id === orderId ? { ...o, status: "Completed" } : o); setOrders(updated); localStorage.setItem("nexus_orders", JSON.stringify(updated)); };

  const handleAddSocial = (e: React.FormEvent) => { e.preventDefault(); const updated = [...socials, { ...newSocial, id: Date.now() }]; setSocials(updated); localStorage.setItem("nexus_socials", JSON.stringify(updated)); setNewSocial({ name: "", url: "", letter: "", bgColor: "bg-blue-600" }); };
  const handleDeleteSocial = (id: number) => { const updated = socials.filter(i => i.id !== id); setSocials(updated); localStorage.setItem("nexus_socials", JSON.stringify(updated)); };

  const handleAddPayment = (e: React.FormEvent) => { e.preventDefault(); const updated = [...payments, { ...newPayment, id: Date.now() }]; setPayments(updated); localStorage.setItem("nexus_payments", JSON.stringify(updated)); setNewPayment({ name: "", icon: "" }); };
  const handleDeletePayment = (id: number) => { const updated = payments.filter(i => i.id !== id); setPayments(updated); localStorage.setItem("nexus_payments", JSON.stringify(updated)); };

  const handleSaveCheckout = (e: React.FormEvent) => { e.preventDefault(); localStorage.setItem("nexus_admin_checkout", JSON.stringify(adminCheckout)); alert("Checkout Details Saved!"); };

  return (
    <div className="min-h-screen flex bg-[#0a0c16] text-white font-sans selection:bg-cyan-500/30">
      
      <aside className="w-64 bg-[#0d1124] border-r border-gray-800 p-6 flex flex-col hidden md:flex">
        <h1 className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-10 flex items-center gap-2">
          <span className="text-cyan-400">⚡</span> ADMIN
        </h1>
        <nav className="space-y-2 flex-1">
          <button onClick={() => setActiveTab("GAMES")} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center gap-3 ${activeTab === "GAMES" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:bg-[#1a2035]"}`}>🎮 Manage Games</button>
          <button onClick={() => setActiveTab("PURCHASE")} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center gap-3 ${activeTab === "PURCHASE" || activeTab === "SHOP" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:bg-[#1a2035]"}`}>💰 Store Items</button>
          <button onClick={() => setActiveTab("ORDERS")} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center justify-between ${activeTab === "ORDERS" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:bg-[#1a2035]"}`}>
            <span className="flex items-center gap-3">👥 Orders</span>
            {orders.filter(o => o.status === "Pending").length > 0 && <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{orders.filter(o => o.status === "Pending").length}</span>}
          </button>
          <button onClick={() => setActiveTab("SETTINGS")} className={`w-full text-left px-4 py-3 rounded-lg font-bold flex items-center gap-3 ${activeTab === "SETTINGS" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:bg-[#1a2035]"}`}>⚙️ Settings</button>
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        <header className="mb-10 border-b border-gray-800 pb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">{activeTab === "ORDERS" ? "Customer Orders" : activeTab === "SETTINGS" ? "Website Settings" : activeTab === "GAMES" ? "Games Grid Manager" : "Store Manager"}</h2>
        </header>

        {(activeTab === "PURCHASE" || activeTab === "SHOP") && (
          <div className="flex gap-4 mb-8 bg-[#0d1124] p-1.5 rounded-xl w-fit border border-gray-800">
            <button onClick={() => setActiveTab("PURCHASE")} className={`px-6 py-2 rounded-lg font-bold transition-all text-sm ${activeTab === "PURCHASE" ? "bg-cyan-500 text-black shadow-md" : "text-gray-400 hover:text-white"}`}>💰 UC Packages</button>
            <button onClick={() => setActiveTab("SHOP")} className={`px-6 py-2 rounded-lg font-bold transition-all text-sm ${activeTab === "SHOP" ? "bg-blue-500 text-white shadow-md" : "text-gray-400 hover:text-white"}`}>🛒 Shop Items</button>
          </div>
        )}

        {/* --- GAMES GRID TAB --- */}
        {activeTab === "GAMES" && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-1 bg-[#13182b] border border-gray-800 p-6 rounded-2xl h-fit shadow-xl">
              <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">🎮 Add New Game</h3>
              <form onSubmit={handleAddGame} className="space-y-4">
                <div><label className="text-xs text-gray-400 block mb-1">Game Title</label><input required type="text" value={newGame.title} onChange={e => setNewGame({...newGame, title: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" placeholder="e.g. CALL OF DUTY" /></div>
                <div><label className="text-xs text-gray-400 block mb-1">Image URL</label><input required type="url" value={newGame.img} onChange={e => setNewGame({...newGame, img: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" placeholder="https://" /></div>
                <div><label className="text-xs text-gray-400 block mb-1">Page Link</label><input required type="text" value={newGame.link} onChange={e => setNewGame({...newGame, link: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" placeholder="/pubg or #" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-xs text-gray-400 block mb-1">Tag Text (Optional)</label><input type="text" value={newGame.tag} onChange={e => setNewGame({...newGame, tag: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" placeholder="NEW" /></div>
                  <div><label className="text-xs text-gray-400 block mb-1">Tag Emoji</label><input type="text" value={newGame.icon} onChange={e => setNewGame({...newGame, icon: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" placeholder="🔥" /></div>
                </div>
                <div>
                  <label className="text-xs text-gray-400 block mb-1">Tag Color</label>
                  <select value={newGame.tagColor} onChange={e => setNewGame({...newGame, tagColor: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none">
                    <option value="bg-orange-500">Orange</option>
                    <option value="bg-red-500">Red</option>
                    <option value="bg-green-500">Green</option>
                    <option value="bg-blue-500">Blue</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition-colors">Add Game to Grid</button>
              </form>
            </div>
            
            <div className="xl:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4 h-fit">
              {games.map(game => (
                <div key={game.id} className="bg-[#13182b] border border-gray-800 rounded-xl overflow-hidden flex flex-col group relative">
                  <div className="h-32 bg-zinc-800 relative">
                    <img src={game.img} alt={game.title} className="w-full h-full object-cover opacity-80" />
                    {game.tag && <div className={`absolute bottom-0 w-full ${game.tagColor} text-white text-[10px] font-bold py-1 flex justify-center`}>{game.icon} {game.tag}</div>}
                  </div>
                  <div className="p-3 bg-[#0d1124] text-center">
                    <h4 className="font-bold text-xs text-gray-200 truncate">{game.title}</h4>
                  </div>
                  <button onClick={() => handleDeleteGame(game.id)} className="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 rounded flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- PURCHASE TAB --- */}
        {activeTab === "PURCHASE" && (
           <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
             <div className="xl:col-span-1 bg-[#13182b] border border-gray-800 p-6 rounded-2xl h-fit shadow-xl">
               <h3 className="text-lg font-bold mb-6 text-cyan-400">Add New UC Pack</h3>
               <form onSubmit={handleAddPurchase} className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div><label className="text-xs text-gray-400 font-bold block mb-1">Base UC</label><input required type="number" value={newPurchase.uc} onChange={e => setNewPurchase({...newPurchase, uc: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                   <div><label className="text-xs text-gray-400 font-bold block mb-1">Bonus UC</label><input required type="number" value={newPurchase.bonus} onChange={e => setNewPurchase({...newPurchase, bonus: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                 </div>
                 <div className="grid grid-cols-2 gap-4">
                   <div><label className="text-xs text-gray-400 font-bold block mb-1">Price (NPR)</label><input required type="text" value={newPurchase.price} onChange={e => setNewPurchase({...newPurchase, price: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                   <div><label className="text-xs text-gray-400 font-bold block mb-1">Old Price</label><input required type="text" value={newPurchase.oldPrice} onChange={e => setNewPurchase({...newPurchase, oldPrice: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                 </div>
                 <button type="submit" className="w-full bg-cyan-600 text-white font-bold py-3 rounded-lg mt-4">Add UC Package</button>
               </form>
             </div>
             <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
               {purchaseItems.map(item => (
                 <div key={item.id} className="bg-[#13182b] border border-gray-800 rounded-xl p-5 flex justify-between items-center">
                   <div className="flex gap-4 items-center">
                     <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center font-bold text-black border border-yellow-300">UC</div>
                     <div><h4 className="font-bold">{item.uc} + {item.bonus}</h4><div className="text-sm text-gray-400">{item.price} NPR</div></div>
                   </div>
                   <button onClick={() => handleDeletePurchase(item.id)} className="text-red-500 hover:text-white">✕</button>
                 </div>
               ))}
             </div>
           </div>
        )}

        {/* --- SHOP TAB --- */}
        {activeTab === "SHOP" && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-1 bg-[#13182b] border border-gray-800 p-6 rounded-2xl h-fit shadow-xl">
              <h3 className="text-lg font-bold mb-6 text-blue-400">Add New Shop Item</h3>
              <form onSubmit={handleAddShop} className="space-y-4">
                <div><label className="text-xs text-gray-400 font-bold block mb-1">Item Title</label><input required type="text" value={newShop.title} onChange={e => setNewShop({...newShop, title: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="text-xs text-gray-400 font-bold block mb-1">Price (NPR)</label><input required type="text" value={newShop.price} onChange={e => setNewShop({...newShop, price: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                  <div><label className="text-xs text-gray-400 font-bold block mb-1">Old Price</label><input required type="text" value={newShop.oldPrice} onChange={e => setNewShop({...newShop, oldPrice: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                </div>
                <div><label className="text-xs text-gray-400 font-bold block mb-1">Image URL</label><input required type="url" value={newShop.imgUrl} onChange={e => setNewShop({...newShop, imgUrl: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none" /></div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg mt-4">Add Item</button>
              </form>
            </div>
            <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
              {shopItems.map(item => (
                <div key={item.id} className="bg-[#13182b] border border-gray-800 rounded-xl overflow-hidden flex flex-col">
                  <div className="h-28 bg-zinc-800 relative"><img src={item.imgUrl} alt={item.title} className="w-full h-full object-cover opacity-80" /></div>
                  <div className="p-4 flex justify-between items-center bg-[#0d1124]">
                    <div><h4 className="font-bold text-sm">{item.title}</h4><div className="text-sm font-bold text-yellow-500 mt-1">{item.price} NPR</div></div>
                    <button onClick={() => handleDeleteShop(item.id)} className="text-red-500 hover:text-white">✕</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- ORDERS TAB --- */}
        {activeTab === "ORDERS" && (
           <div className="bg-[#13182b] border border-gray-800 rounded-2xl overflow-hidden">
             <div className="grid grid-cols-6 gap-4 p-4 border-b border-gray-800 bg-[#0d1124] font-bold text-sm text-gray-400">
               <div className="col-span-1">ID</div><div className="col-span-2">Item</div><div className="col-span-1">Customer Info</div><div className="col-span-1">Status</div><div className="col-span-1 text-right">Action</div>
             </div>
             <div className="divide-y divide-gray-800">
               {orders.map((order) => (
                 <div key={order.id} className="grid grid-cols-6 gap-4 p-5 items-center">
                   <div className="col-span-1 font-mono text-sm text-cyan-400">{order.id}</div>
                   <div className="col-span-2 font-bold">{order.itemName} <br/><span className="text-xs text-gray-400">{order.price} NPR via {order.method}</span></div>
                   <div className="col-span-1 text-xs text-gray-300">
                     {order.manualDetails ? (
                       <>{order.manualDetails.name}<br/>{order.manualDetails.number}</>
                     ) : <span className="text-gray-600">N/A</span>}
                   </div>
                   <div className="col-span-1">{order.status === "Pending" ? <span className="bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded text-xs">Pending</span> : <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Completed</span>}</div>
                   <div className="col-span-1 flex justify-end">
                     {order.status === "Pending" && <button onClick={() => handleConfirmOrder(order.id)} className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm">Confirm</button>}
                   </div>
                 </div>
               ))}
               {orders.length === 0 && <div className="p-10 text-center text-gray-500">No orders yet.</div>}
             </div>
           </div>
        )}

           {/* --- SETTINGS TAB --- */}
        {activeTab === "SETTINGS" && (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            
            <div className="space-y-8">
              {/* Admin Checkout Details */}
              <div className="bg-[#13182b] border border-gray-800 p-6 rounded-2xl shadow-xl">
                <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">🏦 Manual Checkout Details</h3>
                <form onSubmit={handleSaveCheckout} className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Your QR Code Image URL</label>
                    <input required type="url" value={adminCheckout.qrUrl} onChange={e => setAdminCheckout({...adminCheckout, qrUrl: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Wallet/Bank Name</label>
                      <input required type="text" value={adminCheckout.walletName} onChange={e => setAdminCheckout({...adminCheckout, walletName: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Account Number</label>
                      <input required type="text" value={adminCheckout.walletNumber} onChange={e => setAdminCheckout({...adminCheckout, walletNumber: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400" />
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 rounded-lg transition-colors mt-4">Save Checkout Details</button>
                </form>
              </div>

              {/* NEW: Admin Contact Details */}
              <div className="bg-[#13182b] border border-gray-800 p-6 rounded-2xl shadow-xl">
                <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">📞 Customer Support Info</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  // We get the form elements directly for simplicity
                  const phone = (document.getElementById('adminPhone') as HTMLInputElement).value;
                  const email = (document.getElementById('adminEmail') as HTMLInputElement).value;
                  localStorage.setItem("nexus_contact", JSON.stringify({ phone, email }));
                  alert("Contact Info Saved!");
                }} className="space-y-4">
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Support Phone / WhatsApp</label>
                    <input id="adminPhone" required type="text" defaultValue="+1 234 567 8900" className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-400 block mb-1">Support Email</label>
                    <input id="adminEmail" required type="email" defaultValue="support@nexusdrop.com" className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-cyan-400" />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-lg transition-colors mt-4">Save Contact Info</button>
                </form>
              </div>
            </div>

            {/* Socials & Payments Management */}
            <div className="space-y-8">
              <div className="bg-[#13182b] border border-gray-800 p-6 rounded-2xl h-fit shadow-xl">
                <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">📱 Manage Social Links</h3>
                <form onSubmit={handleAddSocial} className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs text-gray-400 block mb-1">Network</label><input required type="text" value={newSocial.name} onChange={e => setNewSocial({...newSocial, name: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" /></div>
                    <div><label className="text-xs text-gray-400 block mb-1">Letter</label><input required type="text" maxLength={1} value={newSocial.letter} onChange={e => setNewSocial({...newSocial, letter: e.target.value.toUpperCase()})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs text-gray-400 block mb-1">URL</label><input required type="url" value={newSocial.url} onChange={e => setNewSocial({...newSocial, url: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" /></div>
                    <div>
                      <label className="text-xs text-gray-400 block mb-1">Color</label>
                      <select value={newSocial.bgColor} onChange={e => setNewSocial({...newSocial, bgColor: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none">
                        <option value="bg-black">Black</option><option value="bg-blue-600">Blue</option><option value="bg-green-500">Green</option><option value="bg-red-600">Red</option><option value="bg-indigo-500">Indigo</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-gray-700 text-white font-bold py-2 rounded-lg">Add</button>
                </form>
                {socials.map(social => (
                  <div key={social.id} className="flex justify-between items-center bg-[#0d1124] p-2 rounded border border-gray-800 mb-2">
                    <span className="text-sm font-bold">{social.name}</span>
                    <button onClick={() => handleDeleteSocial(social.id)} className="text-red-500 text-xs">Delete</button>
                  </div>
                ))}
              </div>

              <div className="bg-[#13182b] border border-gray-800 p-6 rounded-2xl h-fit shadow-xl">
                <h3 className="text-lg font-bold mb-6 text-white flex items-center gap-2">💳 Manage Payment Icons</h3>
                <form onSubmit={handleAddPayment} className="space-y-4 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div><label className="text-xs text-gray-400 block mb-1">Name</label><input required type="text" value={newPayment.name} onChange={e => setNewPayment({...newPayment, name: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" /></div>
                    <div><label className="text-xs text-gray-400 block mb-1">Icon Emoji</label><input required type="text" value={newPayment.icon} onChange={e => setNewPayment({...newPayment, icon: e.target.value})} className="w-full bg-[#0a0c16] border border-gray-700 rounded-lg px-3 py-2 text-sm outline-none" /></div>
                  </div>
                  <button type="submit" className="w-full bg-gray-700 text-white font-bold py-2 rounded-lg">Add</button>
                </form>
                {payments.map(pay => (
                  <div key={pay.id} className="flex justify-between items-center bg-[#0d1124] p-2 rounded border border-gray-800 mb-2">
                    <span className="text-sm font-bold">{pay.icon} {pay.name}</span>
                    <button onClick={() => handleDeletePayment(pay.id)} className="text-red-500 text-xs">Delete</button>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}
      </main>
    </div>
  );
}
