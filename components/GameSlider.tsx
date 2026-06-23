"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const games = [
  {
    title: "PUBG Mobile",
    subtitle: "Instant UC Top-Up",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600",
  },
  {
    title: "Free Fire",
    subtitle: "Buy Diamonds Instantly",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600",
  },
  {
    title: "Valorant",
    subtitle: "Get Valorant Points",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=1600",
  },
  {
    title: "Call of Duty Mobile",
    subtitle: "Purchase CP Securely",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?w=1600",
  },
];

export default function GameSlider() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="rounded-3xl overflow-hidden"
      >
        {games.map((game) => (
          <SwiperSlide key={game.title}>
            <div className="relative h-[500px]">
              <img
                src={game.image}
                alt={game.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/50" />

              <div className="absolute inset-0 flex items-center px-16">
                <div>
                  <h1 className="text-6xl font-bold text-white">
                    {game.title}
                  </h1>

                  <p className="text-xl mt-4 text-gray-200">
                    {game.subtitle}
                  </p>

                  <button className="mt-8 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
