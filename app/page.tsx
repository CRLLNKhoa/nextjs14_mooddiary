/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import "dayjs/locale/vi";
import { fakeListEmoji } from "@/unit_tests/calendar_test";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  addMonths,
  subMonths,
} from "date-fns";
import Calendar from "@/components/mainComponent/Calendar";
import { Skeleton } from "@/components/ui/skeleton";
import AddButton from "@/components/mainComponent/AddButton";
import { toast } from "sonner";

export default function Home() {
  dayjs.locale("vi");
  const [event, setEvent] = useState<any[]>(fakeListEmoji);
  const [calander, setCalander] = useState<any>(undefined);
  const [currentMonth, setCurrentMonth] = useState<any>(new Date());
  const [currentDate, setCurrentDate] = useState<any>(new Date());
  const [daysInMonth, setDaysInMonth] = useState<any>();

  useEffect(() => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: startDate, end: endDate }).map(
      (day) => {
        const formattedDay = format(day, "d");
        const formattedTime = format(day, "dd/MM/yyyy");
        const emojiList = event.filter(
          (emoji: any) => emoji.time_at === formattedTime
        );
        return {
          day: formattedDay,
          time_at: formattedTime,
          list_emoji: emojiList,
        };
      }
    );
    setDaysInMonth(days);
  }, [currentMonth, event]);

  const goToPreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  function handleAddDiary(data: any) {
    const addAction = [...event, data];
    setEvent(addAction);
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }

  if (!daysInMonth) {
    return (
      <div className="h-full flex justify-start flex-col p-4 gap-8">
        <div className="flex gap-4 w-full">
          <Skeleton className="h-12 w-[64px]" />
          <Skeleton className="h-12 flex-1" />
          <Skeleton className="h-12 w-[64px]" />
        </div>
        <div className="flex flex-col gap-4 flex-1 justify-between">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 flex flex-col relative h-full">
      <Calendar
        calander={daysInMonth}
        handleNextMonth={goToNextMonth}
        handlePrevMonth={goToPreviousMonth}
        currentMonth={currentMonth}
        currentDay={currentDate}
      />
      <div className="absolute bottom-4 right-8">
        <AddButton handleAddDiary={handleAddDiary} />
      </div>
    </div>
  );
}
