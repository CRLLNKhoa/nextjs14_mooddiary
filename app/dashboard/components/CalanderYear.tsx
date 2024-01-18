import React from "react";
const dates = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
];

export default function CalanderYear() {
  return (
    <div className="flex flex-col bg-gray-950 p-4 rounded-lg">
      <div className="flex flex-col">
        <h1 className="font-bold">Lịch cảm xúc cả năm</h1>
        <p className="text-xs text-muted-foreground">
          Theo dỗi cảm xúc của bao trong năm nay
        </p>
      </div>
      <div className="grid grid-cols-12 mt-4 gap-y-4">
        {
             Array.from({ length: 365 }).map((item,index) => (
                <div key={index} className="flex justify-center items-center">
                <p className="w-4 h-4 bg-slate-800 rounded-md"></p>
              </div>
             ))
        }
       
      </div>
    </div>
  );
}
