import React from "react";

type TPost = {
  user_name: string;
  like: string[];
  content: string;
  create_at: Date;
};

export default function Post({ user_name, like, content, create_at }: TPost) {
  return <div className="flex flex-col bg-slate-950 p-4">
    <div>
        <h1 className="text-xs font-bold">{user_name}</h1>
    </div>
    <p>Đang cảm thấy Vui vẻ</p>
  </div>;
}
