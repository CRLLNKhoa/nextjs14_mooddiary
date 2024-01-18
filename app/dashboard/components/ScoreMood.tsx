"use client";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/store/theme";
import { type } from "os";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = [
  "#FF4924",
  "#66C2F1",
  "#28EB69",
  "#A668E3",
  "#FAD314",
  "#87B0FF",
  "#7C62C7",
  "#24C6BB",
  "#55ECB9",
  "#FEB83F",
  "#AAF516",
];

export default function ScoreMood() {
  const [isClient, setIsClient] = useState(false);
  const themeSelected = useThemeStore((state: any) => state.themeSelect);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <h1>Loading...</h1>;
  }

  console.log(themeSelected);

  return (
    <div className="flex flex-col bg-gray-950 p-4 rounded-lg">
      <div>
        <h1 className="font-bold">Điểm tâm trạng</h1>
        <p className="text-xs text-muted-foreground">
          Tâm trạng của bạn có thường xuyên hơn
        </p>
      </div>
      <div className="p-4 flex justify-center items-center select-none relative">
        <PieChart
          width={200}
          height={184}
        >
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div className="flex flex-col absolute text-center">
          <h1>Tổng số</h1>
          <p className="font-bold">12</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col w-ful gap-4">
          <MoodScore
            img={themeSelected[0].emoji}
            title={themeSelected[0].title}
            score={1}
            totalScore={12}
            type={themeSelected[0].type}
          />
          <MoodScore
            img={themeSelected[1].emoji}
            title={themeSelected[1].title}
            score={1}
            totalScore={12}
            type={themeSelected[1].type}
          />
          <MoodScore
            img={themeSelected[2].emoji}
            title={themeSelected[2].title}
            score={1}
            totalScore={12}
            type={themeSelected[2].type}
          />
          <MoodScore
            img={themeSelected[3].emoji}
            title={themeSelected[3].title}
            score={1}
            totalScore={12}
            type={themeSelected[3].type}
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <MoodScore
            img={themeSelected[4].emoji}
            title={themeSelected[4].title}
            score={1}
            totalScore={12}
            type={themeSelected[4].type}
          />
          <MoodScore
            img={themeSelected[5].emoji}
            title={themeSelected[5].title}
            score={1}
            totalScore={12}
            type={themeSelected[5].type}
          />
          <MoodScore
            img={themeSelected[6].emoji}
            title={themeSelected[6].title}
            score={1}
            totalScore={12}
            type={themeSelected[6].type}
          />
          <MoodScore
            img={themeSelected[7].emoji}
            title={themeSelected[7].title}
            score={2}
            totalScore={12}
            type={themeSelected[7].type}
          />
        </div>
        <div className="flex flex-col w-full gap-4">
          <MoodScore
            img={themeSelected[8].emoji}
            title={themeSelected[8].title}
            score={4}
            totalScore={12}
            type={themeSelected[8].type}
          />
          <MoodScore
            img={themeSelected[9].emoji}
            title={themeSelected[9].title}
            score={1}
            totalScore={12}
            type={themeSelected[9].type}
          />
          <MoodScore
            img={themeSelected[10].emoji}
            title={themeSelected[10].title}
            score={1}
            totalScore={12}
            type={themeSelected[10].type}
          />
        </div>
      </div>
    </div>
  );
}

function MoodScore(props: {
  img: string;
  score: number;
  totalScore: number;
  title: string;
  type: number;
}) {
  return (
    <div className="flex gap-2 items-start">
      <img
        src={`/emoji/${props.img}`}
        alt={props.img}
        className="w-8 h-8"
      />
      <div className="flex flex-col flex-1">
        <div className="h-3 bg-slate-600 w-full overflow-hidden rounded-full relative">
          <div
            style={{
              width: `${Math.floor((props.score / props.totalScore) * 100)}%`,
            }}
            className={cn(
              "absolute left-0 h-3 top-0 bottom-0",
              props.type === 1 && `bg-[#FF4924] `,
              props.type === 2 && `bg-[#66C2F1] `,
              props.type === 3 && `bg-[#28EB69] `,
              props.type === 4 && `bg-[#A668E3] `,
              props.type === 5 && `bg-[#FAD314] `,
              props.type === 6 && `bg-[#87B0FF] `,
              props.type === 7 && `bg-[#7C62C7] `,
              props.type === 8 && `bg-[#24C6BB] `,
              props.type === 9 && `bg-[#55ECB9] `,
              props.type === 10 && `bg-[#FEB83F] `,
              props.type === 11 && `bg-[#AAF516] `
            )}
          ></div>
        </div>
        <div className="flex justify-between items-center pr-2 mt-1 text-muted-foreground font-bold">
          <p className="text-xs">{props.title}</p>
          <p className="text-xs">
            {props.score} / {props.totalScore}{" "}
            {`( ${Math.floor((props.score / props.totalScore) * 100)}% )`}
          </p>
        </div>
      </div>
    </div>
  );
}
