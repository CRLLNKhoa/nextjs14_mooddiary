import React from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import { IoMdCard } from "react-icons/io";

export default function Bank() {
  return (
    <div className="flex flex-col bg-gray-950 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-bold">Ngân hàng sức khỏe</h1>
          <p className="text-xs text-muted-foreground">
            Tiết kiệm sức khỏe của bạn
          </p>
        </div>
        <IoMdCard className="w-6 h-6 text-green-600" />
      </div>
      <div className="flex justify-center mt-4">
        <div className="bg-gradient-to-r from-sky-400 to-blue-500 flex select-none relative
         flex-col justify-between max-w-lg min-w-[320px] h-[180px] rounded-lg bg-black p-4">
          <div className="flex items-center justify-between">
            <h1 className="font-bold">Health bank</h1>
            <div className="bg-white cursor-pointer text-black px-2 py-1 rounded-lg text-xs font-bold justify-center flex gap-2 items-center">
              Xem chi tiết <FaAngleRight />
            </div>
          </div>
          <img src="/icons/coin.svg" alt="cion" className="lg:w-24 lg:h-24 opacity-75 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <div className="flex justify-between items-end">
            <h1 className="flex items-center text-xs gap-2"><BsFillCreditCard2BackFill /> @mooddiary</h1>
            <div className="flex flex-col justify-center text-black font-bold z-50">
                <h1 className="text-md font-bold">Điểm cân bằng</h1>
                <p className="text-center text-xl">3,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
