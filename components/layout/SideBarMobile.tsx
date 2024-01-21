"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoHomeSharp, IoSettingsSharp } from "react-icons/io5";
import { TbChartDonutFilled, TbWorld } from "react-icons/tb";

export default function SideBarMobile() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950 px-4 py-2 flex justify-between items-center text-white">
      <Link href={"/"} className={cn("text-xl cursor-pointer duration-500 hover:text-orange-500 flex flex-col justify-center items-center", pathname === "/" && "text-orange-500")}>
        <FaHeart />
        <h1 className="text-xs">Cảm xúc</h1>
      </Link>
      <div className={cn("text-2xl cursor-pointer duration-500 hover:text-orange-500 flex flex-col justify-center items-center", pathname === "/explore" && "text-orange-500")}>
        <TbWorld />
        <h1 className="text-xs">Khám phá</h1>
      </div>
      <div className="bg-white -translate-y-1/3 text-xl p-3 hover:text-orange-500 cursor-pointer duration-500 text-black rounded-full border-4 border-black ">
        <IoHomeSharp />
      </div>
      <Link href={"/dashboard"} className={cn("text-2xl cursor-pointer duration-500 hover:text-orange-500 flex flex-col justify-center items-center", pathname === "/dashboard" && "text-orange-500")}>
        <TbChartDonutFilled />
        <h1 className="text-xs">Thống kê</h1>
      </Link>
      <div className={cn("text-2xl cursor-pointer duration-500 hover:text-orange-500 flex flex-col justify-center items-center", pathname === "/setting" && "text-orange-500")}>
        <IoSettingsSharp />
        <h1 className="text-xs">Cài đặt</h1>
      </div>
    </div>
  );
}
