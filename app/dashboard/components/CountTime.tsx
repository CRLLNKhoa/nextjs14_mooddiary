import React from "react";
import { IoTimerOutline } from "react-icons/io5";

export default function CountTime() {
  return (
    <div className="flex flex-col bg-gray-950 p-4 rounded-lg">
      <h1 className="font-bold">Máy đếm thời gian xoa dịu cảm xúc</h1>
      <div className="flex flex-col mt-4">
        <p className="text-xs mb-2">Tổng thời gian sử dụng</p>
        <h1 className="text-center font-bold text-xl flex items-center justify-center">
          <IoTimerOutline className="mr-2 w-6 h-6" /> 0 giờ 8 phút 32 giây
        </h1>
      </div>
    </div>
  );
}
