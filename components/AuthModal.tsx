"use client";

import { useState } from "react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [authStep, setAuthStep] = useState<"INPUT" | "OTP">("INPUT");
  const [contactMethod, setContactMethod] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMethod) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep("OTP");
    }, 1500);
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      const mockUser = { 
        name: contactMethod.split("@")[0] || "Gamer", 
        email: contactMethod, 
        uid: Math.floor(Math.random() * 1000000000).toString() 
      };
      localStorage.setItem("nexus_user", JSON.stringify(mockUser));
      window.location.reload(); 
    }, 1500);
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      const mockUser = { name: "Google User", email: "user@gmail.com", uid: "G-" + Math.floor(Math.random() * 1000000) };
      localStorage.setItem("nexus_user", JSON.stringify(mockUser));
      window.location.reload();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#0f1326] border border-gray-800 rounded-2xl w-full max-w-md relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 blur-[60px] pointer-events-none"></div>
        <div className="p-8 relative z-10">
          <button onClick={onClose} className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors text-xl font-bold">✕</button>
          <div className="flex items-center gap-2 mb-8"><span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">GAMING HUB</span></div>
          <h2 className="text-lg font-bold text-white mb-6 tracking-wide uppercase">{authStep === "INPUT" ? "SIGN IN OR SIGN UP" : "VERIFY OTP"}</h2>

          {authStep === "INPUT" ? (
            <>
              <button onClick={handleGoogleLogin} className="w-full bg-white hover:bg-gray-100 text-black font-bold py-3 rounded-lg transition-all shadow-md flex items-center justify-center gap-3 mb-6">
                <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                Continue with Google
              </button>
              <div className="flex items-center gap-3 mb-6"><div className="h-px bg-gray-800 flex-1"></div><span className="text-gray-500 text-sm">or use Email / Phone</span><div className="h-px bg-gray-800 flex-1"></div></div>
              <form onSubmit={handleSendOtp} className="space-y-4">
                <input required type="text" placeholder="Email or Phone Number" value={contactMethod} onChange={e => setContactMethod(e.target.value)} className="w-full bg-[#131833] border border-blue-600/30 focus:border-cyan-400 rounded-lg px-4 py-3 text-white outline-none" />
                <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-lg flex justify-center items-center">{isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Send OTP"}</button>
              </form>
            </>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <p className="text-sm text-gray-400 mb-4">Code sent to <strong className="text-white">{contactMethod}</strong>.</p>
              <input required type="text" maxLength={6} placeholder="6-digit OTP" value={otp} onChange={e => setOtp(e.target.value)} className="w-full bg-[#131833] border border-blue-600/30 rounded-lg px-4 py-3 text-white outline-none text-center text-xl tracking-widest font-mono" />
              <button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold py-3 rounded-lg flex justify-center items-center">{isLoading ? <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> : "Verify & Login"}</button>
              <button type="button" onClick={() => setAuthStep("INPUT")} className="w-full text-gray-400 text-sm py-2">← Back</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
