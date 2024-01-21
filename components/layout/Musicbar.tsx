"use client"
import React from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import useSound from 'use-sound';

export default function Musicbar() {
  const [play] = useSound("/sounds/pop.mp3");
  return (
    <aside className="flex flex-col p-4 h-full bg-black gap-4 overflow-y-auto border-l border-slate-800">
      <h1 className="font-bold">XOA DỊU CẢM XÚC</h1>
      <button onClick={play}>Boop!</button>
      <div className="flex flex-col justify-center items-center">
        <img
          className="animate-spin-slow w-20"
          src="/icons/cd_icon.svg"
          alt="cd_icon"
        />
        <p className="text-center mt-2 text-xs">Bài hát chữa lành tâm hồn</p>
        <div className="flex mt-2">
          <button className="p-1">
            <TbPlayerTrackPrevFilled />
          </button>
          <button className="p-1">
            <FaPlay />
          </button>
          <button className="p-1">
            <FaPause />
          </button>
          <button className="p-1">
            <TbPlayerTrackNextFilled />
          </button>
        </div>
      </div>
    </aside>
  );
}
