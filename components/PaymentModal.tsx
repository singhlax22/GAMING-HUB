"use client";

import { useState, useEffect } from "react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItem: any;
}

export default function PaymentModal({ isOpen, onClose, selectedItem }: PaymentModalProps) {
  const [selectedMethod, setSelectedMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [manualDetails, setManualDetails] = useState({ name: "", number: "" });
  const [adminCheckout, setAdminCheckout] = useState({ qrUrl: "", walletName: "", walletNumber: "" });

  useEffect(() => {
    const savedCheckout = localStorage.getItem("nexus_admin_checkout");
    if (savedCheckout) {
      setAdminCheckout(JSON.parse(savedCheckout));
    } else {
      setAdminCheckout({ qrUrl: "", walletName: "Admin Wallet", walletNumber: "0000000000" });
    }
  }, [isOpen]);

  if (!isOpen || !selectedItem) return null;

  const paymentMethods = [
    { id: "card", name: "Credit/Debit Card", icon: "💳" },
    { id: "apple", name: "Apple Pay", icon: "🍏" },
    { id: "manual", name: "QR / Manual Transfer", icon: "📱" },
  ];

  const handlePayment = () => {
    if (selectedMethod === "manual" && (!manualDetails.name || !manualDetails.number)) {
      alert("Please enter your name and number to confirm the manual transfer.");
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      const newOrder = {
        id: "ORD-" + Math.floor(Math.random() * 1000000),
        itemName: selectedItem.uc ? `${selectedItem.uc} + ${selectedItem.bonus} UC` : selectedItem.title,
        price: selectedItem.price,
        method: selectedMethod === "manual" ? "Manual Transfer" : selectedMethod,
        manualDetails: selectedMethod === "manual" ? manualDetails : null,
        status: "Pending",
        date: new Date().toLocaleString()
      };

      const existingOrders = JSON.parse(localStorage.getItem("nexus_orders") || "[]");
      localStorage.setItem("nexus_orders", JSON.stringify([newOrder, ...existingOrders]));

      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        window.location.href = "/customer";
      }, 3000);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0f1326] border border-gray-800 rounded-2xl w-full max-w-md relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        {isSuccess ? (
          <div className="p-10 flex flex-col items-center text-center space-y-4">
            <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center animate-pulse"><span className="text-4xl">⏳</span></div>
            <h2 className="text-2xl font-bold text-white">Order Submitted!</h2>
            <p className="text-gray-400">Your order is <strong className="text-yellow-500">Processing</strong>.</p>
            <p className="text-xs text-cyan-400 mt-2 animate-pulse">Redirecting to Dashboard...</p>
          </div>
        ) : (
          <div className="p-6 md:p-8 relative z-10 flex flex-col h-full max-h-[85vh]">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 text-xl font-bold">✕</button>
            <h2 className="text-xl font-bold text-white mb-6 uppercase tracking-wide">Checkout</h2>
            <div className="bg-[#131833] border border-gray-800 rounded-xl p-4 mb-6 flex justify-between items-center">
              <div><div className="text-xs text-gray-400 mb-1">Order Summary</div><div className="font-bold text-white">{selectedItem.uc ? `PUBG: ${selectedItem.uc} + ${selectedItem.bonus} UC` : selectedItem.title}</div></div>
              <div className="text-xl font-bold text-cyan-400">{selectedItem.price} NPR</div>
            </div>

            <div className="flex-1 overflow-y-auto pr-2 mb-6 hide-scrollbar">
              <div className="text-sm font-bold text-gray-300 mb-3">Select Payment Method</div>
              <div className="space-y-3">
                {paymentMethods.map((method) => (
                  <div key={method.id}>
                    <button onClick={() => setSelectedMethod(method.id)} className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all ${selectedMethod === method.id ? "bg-cyan-500/10 border-cyan-400" : "bg-[#1a2038] border-gray-800"}`}>
                      <div className="flex items-center gap-3"><span className="text-2xl">{method.icon}</span><span className="font-bold text-sm text-gray-200">{method.name}</span></div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedMethod === method.id ? "border-cyan-400" : "border-gray-600"}`}>{selectedMethod === method.id && <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full"></div>}</div>
                    </button>
                    {selectedMethod === "manual" && method.id === "manual" && (
                      <div className="mt-3 bg-[#0a0c16] border border-gray-700 rounded-xl p-4 space-y-4 animate-in slide-in-from-top-2">
                        <div className="text-center">
                          <p className="text-xs text-gray-400 mb-2">Scan the QR below to send payment</p>
                          {adminCheckout.qrUrl ? (
                            <img src={adminCheckout.qrUrl} alt="Admin QR Code" className="w-32 h-32 mx-auto rounded-lg shadow-lg border-2 border-cyan-400 object-cover bg-white" />
                          ) : (
                            <div className="w-32 h-32 bg-white rounded-lg mx-auto flex items-center justify-center shadow-lg border-2 border-cyan-400"><span className="text-black font-bold text-xs">NO QR SET</span></div>
                          )}
                          <div className="mt-3 text-sm text-gray-300">
                            Or send to: <strong className="text-white">{adminCheckout.walletName}</strong><br/>
                            Acc/No: <strong className="text-cyan-400 tracking-wider">{adminCheckout.walletNumber}</strong>
                          </div>
                        </div>
                        <div className="space-y-3 border-t border-gray-800 pt-4">
                          <input type="text" placeholder="Sender Name" value={manualDetails.name} onChange={e => setManualDetails({...manualDetails, name: e.target.value})} className="w-full bg-[#13182b] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none" />
                          <input type="text" placeholder="Sender Account Number" value={manualDetails.number} onChange={e => setManualDetails({...manualDetails, number: e.target.value})} className="w-full bg-[#13182b] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white outline-none" />
                          <div>
                            <label className="text-xs text-gray-400 mb-1 block">Upload Screenshot (Optional)</label>
                            <input type="file" className="text-xs text-gray-300 w-full file:bg-gray-800 file:text-white file:border-0 file:px-3 file:py-1 file:rounded file:mr-3 cursor-pointer" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handlePayment} disabled={isProcessing} className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg disabled:opacity-70 flex justify-center items-center gap-2">
              {isProcessing ? <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>Processing...</> : `Confirm & Pay ${selectedItem.price} NPR`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
