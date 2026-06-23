"use client";

import { useState, useEffect } from "react";

export default function GamesGrid() {
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    const savedGames = localStorage.getItem("nexus_games");
    if (savedGames) {
      setGames(JSON.parse(savedGames));
    } else {
      setGames([
        { id: 1, title: "PUBG MOBILE", tag: "EXTRA DISCOUNT", tagColor: "bg-orange-500", icon: "👍", img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500", link: "/pubg" },
        { id: 2, title: "WUTHERING WAVES", tag: "PAYMENT OFFER", tagColor: "bg-green-500", icon: "⭐", img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500", link: "#" },
        { id: 3, title: "DELTA FORCE", tag: "EXTRA BONUS", tagColor: "bg-orange-500", icon: "👍", img: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500", link: "#" },
        { id: 4, title: "HONOR OF KINGS", tag: "EXTRA BONUS", tagColor: "bg-red-500", icon: "🔥", img: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=500", link: "#" },
      ]);
    }
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8">
        {games.map((game) => (
          <a href={game.link || "#"} key={game.id} className="flex flex-col items-center group cursor-pointer w-full">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-3 bg-zinc-800 transform transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2 shadow-lg">
              <img src={game.img} alt={game.title} className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              {game.tag && <div className={`absolute bottom-0 w-full ${game.tagColor} text-white text-[10px] sm:text-xs font-bold py-1.5 flex justify-center items-center gap-1 z-10`}><span>{game.icon}</span> {game.tag}</div>}
            </div>
            <h3 className="text-xs sm:text-sm font-bold text-center text-gray-200 group-hover:text-cyan-400 transition-colors uppercase px-1 leading-tight">{game.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
