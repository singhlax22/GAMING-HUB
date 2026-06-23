"use client";
import { useRef } from "react";

interface TiltCardProps {
  title: string;
  price: string;
  image: string;
  onClick: () => void;
}

export default function TiltCard({ title, price, image, onClick }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const rotateX = ((y / rect.height) - 0.5) * -25;
    const rotateY = ((x / rect.width) - 0.5) * 25;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div ref={cardRef} onClick={onClick} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ transition: "transform 0.1s ease-out" }} className="bg-[#12162b] rounded-2xl p-5 border border-zinc-800 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,242,254,0.3)] cursor-pointer flex flex-col justify-between group">
      <div className="absolute top-3 left-3 bg-green-500 text-black font-bold text-xs px-2 py-0.5 rounded">POPULAR</div>
      <div className="my-6 flex justify-center transform translate-z-10">
        <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
           <span className="font-bold text-2xl text-black">UC</span>
        </div>
      </div>
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-cyan-400 text-sm font-bold">Instant Top-Up</p>
      </div>
      <div className="border-t border-zinc-800 mt-4 pt-4 flex items-center justify-between">
        <span className="text-lg font-bold text-white">{price} NPR</span>
        <button className="bg-blue-600 group-hover:bg-cyan-500 text-white w-10 h-10 rounded-lg flex items-center justify-center transition-all shadow-md">🛒</button>
      </div>
    </div>
  );
}
