"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CgNotes } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";

export default function Calendar({
  handlePrevMonth,
  currentMonth,
  handleNextMonth,
  calander,
  currentDay,
}: {
  handlePrevMonth: any;
  currentMonth: any;
  handleNextMonth: any;
  calander: any;
  currentDay: any;
}) {
  const [toMonth, setToMonth] = useState<number>();
  function getMonth() {
    var currentDate = new Date();
    // Lấy tháng từ đối tượng Date
    var currentMonth = currentDate.getMonth() + 1;
    setToMonth(currentMonth);
  }

  useEffect(() => {
    getMonth();
  }, []);

  return (
    <div className="calendar-container pb-4">
      
      <div className="calendar-grid grid grid-cols-5 lg:grid-cols-7">
        {calander.map((item: any) => (
          <div
            key={item.day}
            className="calendar-day flex justify-center p-2 flex-col items-center select-none"
          >
            {item.list_emoji.length === 0 ? (
              <div
                className={cn(
                  "w-12 h-12 border border-slate-800 rounded-full flex justify-center items-center",
                  item.time_at === format(currentDay, "dd/MM/yyyy") &&
                    "bg-white",
                  item.time_at > format(currentDay, "dd/MM/yyyy") &&
                    "bg-transparent border border-slate-800"
                )}
              >
                <div
                  className={cn(
                    "w-2/3 h-2/3 rounded-full flex justify-center items-center",
                    item.time_at === format(currentDay, "dd/MM/yyyy") &&
                      "bg-white",
                    item.time_at > format(currentDay, "dd/MM/yyyy") &&
                      "bg-transparent"
                  )}
                >
                  {item.time_at >= format(currentDay, "dd/MM/yyyy") &&
                  Number(format(currentMonth, "M")) === toMonth ? (
                    <p className="font-bold">{item.day}</p>
                  ) : (
                    <div>
                      <IoMdClose className="text-3xl text-slate-800" />
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <img
                    src={`/emoji/${item.list_emoji[0].emoji}`}
                    alt="emoji"
                    className="w-12 h-12 cursor-pointer"
                  />
                </PopoverTrigger>
                <PopoverContent className="flex gap-2 bg-black border-slate-800 flex-wrap max-w-[200px] justify-around">
                  {item.list_emoji.map((item: any, index: number) => (
                    <img
                      key={index}
                      src={`/emoji/${item.emoji}`}
                      alt="emoji"
                      className="w-8 h-8"
                    />
                  ))}
                </PopoverContent>
              </Popover>
            )}
            <p className="font-bold">
              {item.time_at <= format(currentDay, "dd/MM/yyyy") &&
                Number(format(currentMonth, "M")) === toMonth && (
                  <p className="font-bold text-sm text-slate-400">{item.day}</p>
                )}
            </p>
            <p className="font-bold">
              {item.time_at > format(currentDay, "dd/MM/yyyy") &&
                Number(format(currentMonth, "M")) === toMonth && (
                  <p className="opacity-0">###</p>
                )}
            </p>
            {Number(format(currentMonth, "M")) !== toMonth && (
              <p className="font-bold text-sm text-slate-400">{item.day}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
