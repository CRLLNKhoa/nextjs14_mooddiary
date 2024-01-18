import { Button } from "@/components/ui/button";
import React from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { MdEvent } from "react-icons/md";

export default function MoodAndEvent() {
  return (
    <div className="flex flex-col bg-gray-950 p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="font-bold">Tâm trạng và hoạt động</h1>
          <p className="text-xs text-muted-foreground">
            Hoạt động nào ảnh hưởng đến tâm trạng của bạn
          </p>
        </div>
        <MdEvent className="w-6 h-6 text-green-600" />
      </div>
      <div className="flex flex-col gap-4 mt-8">
        <div className="grid grid-cols-6 gap-y-8">
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
          <ItemEvent />
        </div>
      </div>
    </div>
  );
}

function ItemEvent() {
  return (
    <div className="flex flex-col items-center justify-center select-none">
      <div className="bg-slate-800 p-2 rounded-full relative">
        <img
          src="/icons/help_icon.svg"
          alt="icon"
          className="w-8 h-8"
        />
        <span className="w-4 h-4 p-1 rounded-full bg-green-600 absolute text-xs
         flex justify-center items-center -right-1 font-bold top-0">
          2
        </span>
      </div>
      <p className="font-bold text-xs mt-1 text-muted-foreground truncate">
        Công việc
      </p>
    </div>
  );
}
