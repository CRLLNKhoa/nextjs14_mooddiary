"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <aside className="flex flex-col h-full p-4 bg-black gap-4 overflow-y-auto border-r border-slate-800">
      <Banner />
      <Menu />
    </aside>
  );
}

function Banner() {
  return (
    <div className="h-16 overflow-hidden rounded-md group relative cursor-pointer">
      <div className="flex items-center rounded-s-md gap-4 bg-orange-500/80 py-1 px-2 ml-auto absolute z-50 font-bold text-black text-sm right-0 top-1/2 -translate-y-1/2">
        <h1>Nâng cấp lên Premium</h1>
        <FaChevronRight />
      </div>
      <img
        src="/imgs/banner_sidebar.jpg"
        alt="banner"
        className="h-full w-full object-cover rounded-md transition-all 
          duration-1000 group-hover:scale-110"
      />
    </div>
  );
}

const menu = {
  main: [
    { icon: "diary_icon.svg", title: "Nhật kí của bạn", link: "/" },
    {
      icon: "dashboard_icon.svg",
      title: "Thống kê cảm xúc",
      link: "/dashboard",
    },
    { icon: "explore_icon.svg", title: "Khám phá", link: "/explore" },
  ],
  setting: [
    { icon: "theme_icon.svg", title: "Chủ đề Emoji", link: "/setting/theme" },
    {
      icon: "widget_icon.svg",
      title: "Widget",
      link: "/setting/widget",
    },
    {
      icon: "event_icon.svg",
      title: "Quản lí các hoạt động",
      link: "/setting/event",
    },
  ],
  setting_more: [
    { icon: "export_icon.svg", title: "Xuất nhật kí", link: "/setting/export" },
    {
      icon: "share_icon.svg",
      title: "Chia sẻ với bạn bè",
      link: "/setting/widget",
    },
    {
      icon: "pay_icon.svg",
      title: "Thông tin mua hàng",
      link: "/setting/event",
    },
    {
      icon: "help_icon.svg",
      title: "Trung tâm trợ giúp",
      link: "/setting/event",
    },
    {
      icon: "contact_icon.svg",
      title: "Liên hệ chúng tôi",
      link: "/setting/event",
    },
  ],
};

function Menu() {

  const pathname = usePathname()

  return (
    <div
      id="scrollableDiv"
      className="relative flex flex-col flex-1 rounded-md overflow-y-auto gap-4 py-2 menuSide"
    >
      <div className="flex flex-col gap-4">
        {menu.main.map((item) => (
          <Link href={item.link}
            key={item.link}
            className="flex gap-2 items-center group cursor-pointer duration-500"
          >
            <div className={cn("border bg-black border-white/40 duration-500 p-1 rounded-lg",pathname === item.link && "bg-white")}>
              <img
                src={`/icons/${item.icon}`}
                alt="icon"
                className="w-5 h-5"
              />
            </div>
            <h1 className={cn("group-hover:text-orange-500 text-sm font-bold",pathname === item.link && "text-orange-500")}>{item.title}</h1>
          </Link>
        ))}
        <div className="flex flex-col">
          <h1 className="mb-1 font-bold">Cài đặt</h1>
          <div className="flex ml-2 text-sm relative">
            <div className="border-r border-slate-800 absolute top-0 bottom-0 translate-x-[1px]"></div>
            <div className="flex flex-col z-50">
              {menu.setting.map((item) => (
                <h1
                  key={item.link}
                  className="border-l hover:border-l-[3px] flex items-center gap-2 border-transparent pl-4 py-1 hover:text-orange-500 hover:font-bold hover:border-orange-500 cursor-pointer"
                >
                  <img
                    src={`/icons/${item.icon}`}
                    alt="icon"
                    className="w-4 h-4"
                  />
                  {item.title}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-1 font-bold">Cài đặt thêm</h1>
          <div className="flex ml-2 text-sm relative">
            <div className="border-r border-slate-800 absolute top-0 bottom-0 translate-x-[1px]"></div>
            <div className="flex flex-col z-50">
              {menu.setting_more.map((item) => (
                <h1
                  key={item.link}
                  className="border-l hover:border-l-[3px] flex items-center gap-2 border-transparent pl-4 py-1 hover:text-orange-500 hover:font-bold hover:border-orange-500 cursor-pointer"
                >
                  <img
                    src={`/icons/${item.icon}`}
                    alt="icon"
                    className="w-4 h-4"
                  />
                  {item.title}
                </h1>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
