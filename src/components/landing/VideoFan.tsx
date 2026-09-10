import React, { useRef, useEffect } from "react";

interface FanCard {
  id: string;
  src: string;
  title: string;
  x: number;
  y: number;
  rot: number;
  scale: number;
  z: number;
  mobile?: { x: number; y: number; rot: number; scale: number };
}

const CARDS: FanCard[] = [
  {
    id: "card-1",
    src: "/video/VIDEO_PROVA_01.mp4",
    title: "Display Lucrativo 1",
    x: -390,
    y: 44,
    rot: -15,
    scale: 0.88,
    z: 1,
    mobile: { x: -110, y: 32, rot: -14, scale: 0.78 },
  },
  {
    id: "card-2",
    src: "/video/VIDEO_PROVA_02.mp4",
    title: "Display Lucrativo 2",
    x: -235,
    y: 12,
    rot: -9,
    scale: 0.94,
    z: 2,
    mobile: { x: -56, y: 10, rot: -7, scale: 0.88 },
  },
  {
    id: "card-3",
    src: "/video/VIDEO_PROVA_03.mp4",
    title: "Display Lucrativo 3",
    x: -78,
    y: -8,
    rot: -3,
    scale: 0.98,
    z: 3,
    mobile: { x: -18, y: -2, rot: -2, scale: 0.94 },
  },
  {
    id: "card-4",
    src: "/video/VIDEO_PROVA_04.mp4",
    title: "Display Lucrativo 4",
    x: 78,
    y: -8,
    rot: 3,
    scale: 0.98,
    z: 3,
    mobile: { x: 18, y: -2, rot: 2, scale: 0.94 },
  },
  {
    id: "card-5",
    src: "/video/VIDEO_PROVA_05.mp4",
    title: "Display Lucrativo 5",
    x: 235,
    y: 12,
    rot: 9,
    scale: 0.94,
    z: 2,
    mobile: { x: 56, y: 10, rot: 7, scale: 0.88 },
  },
  {
    id: "card-6",
    src: "/video/VIDEO_PROVA_06.mp4",
    title: "Display Lucrativo 6",
    x: 390,
    y: 44,
    rot: 15,
    scale: 0.88,
    z: 1,
    mobile: { x: 110, y: 32, rot: 14, scale: 0.78 },
  },
];

export const VideoFan: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[380px] sm:h-[460px] flex items-center justify-center overflow-visible select-none my-6">
      {CARDS.map((card) => (
        <div
          key={card.id}
          className="absolute transition-transform duration-500 ease-out hover:scale-105 hover:z-30 cursor-pointer"
          style={{
            zIndex: card.z,
            transform: `translate(${card.x}px, ${card.y}px) rotate(${card.rot}deg) scale(${card.scale})`,
          }}
        >
          <div className="w-[170px] sm:w-[210px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-sm relative">
            <video
              src={card.src}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoFan;