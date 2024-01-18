import React from "react";
import { FaShare } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TfiCup } from "react-icons/tfi";

export default function Continuous() {
  return (
    <div className="flex flex-col bg-gray-950 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Chuỗi nhật ký</h1>
        <FaShare />
      </div>
      <div className="flex justify-between items-center text-xs">
        <p>Hiện tại: 1</p>
        <p>Dài nhất: 1</p>
      </div>
      <div className="lg:px-4 py-8 flex justify-between relative">
        <div className="p-[4px] left-5 right-5 top-1/2 -translate-y-1/2 absolute bg-slate-800 z-10"></div>
        <div className=" w-[42px] h-[42px] lg:h-[52px] lg:w-[52px]  rounded-full z-20 bg-green-600 flex justify-center items-center">
        <TfiCup className="text-2xl font-bold"/>
        </div>
        <div className="w-[42px] h-[42px] lg:h-[52px] lg:w-[52px] rounded-full z-20 bg-slate-800 flex justify-center items-center">
          <IoMdClose className="text-3xl text-muted-foreground" />
        </div>
        <div className="w-[42px] h-[42px] lg:h-[52px] lg:w-[52px] rounded-full z-20 bg-slate-800 flex justify-center items-center">
          <IoMdClose className="text-3xl text-muted-foreground" />
        </div>
        <div className="w-[42px] h-[42px] lg:h-[52px] lg:w-[52px] rounded-full z-20 bg-slate-800 flex justify-center items-center">
          <IoMdClose className="text-3xl text-muted-foreground" />
        </div>
        <div className="w-[42px] h-[42px] lg:h-[52px] lg:w-[52px] rounded-full z-20 bg-slate-800 flex justify-center items-center">
          <IoMdClose className="text-3xl text-muted-foreground" />
        </div>
        <div className="w-[42px] h-[42px] lg:h-[52px] lg:w-[52px] rounded-full z-20 bg-slate-800 flex justify-center items-center">
          <IoMdClose className="text-3xl text-muted-foreground" />
        </div>
        <div className="w-[42px] h-[42px] lg:h-[52px] lg:w-[52px] border-2 border-green-600  rounded-full z-20 bg-slate-800 flex justify-center items-center"></div>
      </div>
      <p className="text-xs">Tổng số nhật ký đã nhập: 4</p>
    </div>
  );
}
