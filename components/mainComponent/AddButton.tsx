"use client";
import React, { useMemo, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { MdOutlineAccessTime } from "react-icons/md";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import viLocale from "date-fns/locale/vi";
import { useThemeStore } from "@/store/theme";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.bubble.css";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RiDeleteBack2Line } from "react-icons/ri";
import { IoPricetagsOutline } from "react-icons/io5";

export default function AddButton({ handleAddDiary }: any) {
  const [date, setDate] = useState<any>();
  const [emojiSelected, setEmojiSelected] = useState<any>();
  const [tags, setTags] = useState<any[]>([]);
  const [value, setValue] = useState("Ghi chú...");
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );
  const emojis = useThemeStore((state: any) => state.themeSelect);

  function handleAddTime() {
    // Tạo một đối tượng Date hiện tại
    var currentDate = new Date();
    // Lấy giờ, phút và giây từ đối tượng Date
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    setValue(
      value.concat(
        `--- ${currentHour}:${
          currentMinute < 10 ? "0" + currentMinute : currentMinute
        } ---`
      )
    );
  }

  return (
    <Dialog>
      <DialogTrigger>
        <div className="p-2 bg-white rounded-full text-black text-3xl cursor-pointer animate-bounce">
          <IoMdAdd />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Thêm nhật ký</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-1/2 justify-start text-left font-normal",
                    !emojiSelected && "text-muted-foreground"
                  )}
                >
                  <BsEmojiSmile className="mr-2 h-4 w-4" />
                  {emojiSelected ? (
                    <div className="flex gap-2 items-center">
                      <img
                        src={`/emoji/${emojiSelected.emoji}`}
                        alt="emoji"
                        className="w-6 h-6"
                      />
                      <p>{emojiSelected.title}</p>
                    </div>
                  ) : (
                    <span>Chọn Cảm xúc</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto flex flex-col flex-wrap max-h-[200px]"
                align="start"
              >
                {emojis.map((item: any) => (
                  <div
                    key={item.type}
                    onClick={() => setEmojiSelected(item)}
                    className="flex gap-2 items-center text-sm hover:bg-slate-700 p-2 cursor-pointer rounded-md"
                  >
                    <img
                      src={`/emoji/${item.emoji}`}
                      alt="emoji"
                      className="w-6 h-6"
                    />
                    <p>{item.title}</p>
                  </div>
                ))}
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    " justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Chọn ngày</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className="w-auto p-0"
                align="start"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex flex-col gap-2 max-w-[482px] overflow-y-auto content-scroll pr-2">
            <div className="flex gap-2">
              <Button
                onClick={handleAddTime}
                size="icon"
                variant="ghost"
              >
                <MdOutlineAccessTime className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Button
                onClick={() => setValue("Ghi chú...")}
                size="icon"
                variant="ghost"
              >
                <RiDeleteBack2Line className="h-5 w-5 text-muted-foreground" />
              </Button>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-1/3 justify-start text-left font-normal",
                      !emojiSelected && "text-muted-foreground"
                    )}
                  >
                    <IoPricetagsOutline className="mr-2 h-4 w-4" />
                    {tags.length > 0 ? (
                      <div className="flex gap-2 items-center">
                        <p>Đã chọn {tags.length}</p>
                      </div>
                    ) : (
                      <span>Chọn việc</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto flex flex-col flex-wrap max-h-[200px]"
                  align="start"
                >
                  {emojis.map((item: any) => (
                    <div
                      key={item.type}
                      onClick={() => setTags([...tags, item])}
                      className="flex gap-2 items-center text-sm hover:bg-slate-700 p-2 cursor-pointer rounded-md"
                    >
                      <img
                        src={`/emoji/${item.emoji}`}
                        alt="emoji"
                        className="w-6 h-6"
                      />
                      <p>{item.title}</p>
                    </div>
                  ))}
                </PopoverContent>
              </Popover>
            </div>
            <div className="border border-slate-800 rounded-md">
              <ReactQuill
                theme="bubble"
                value={value}
                onChange={setValue}
                className="max-h-[40vh] min-h-[20vh] text-muted-foreground"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>Trở lại</DialogClose>
          <Button
            onClick={() =>
              handleAddDiary({
                id: "@313",
                user_id: "qưeasd",
                emoji: "1_4.png",
                time_at: "04/01/2024",
                notes: "conetnt",
              })
            }
          >
            Xác nhận
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
