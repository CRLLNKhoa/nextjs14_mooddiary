import React from "react";
import Post from "./components/Post";

export default function page() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="flex flex-col">
        <h1 className="font-bold">Cảm xúc của mọi người</h1>
        <p className="text-xs text-muted-foreground">
          Chia sẻ với mọi cảm xúc của bản thân.
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Post
          user_name="Lương Nguyễn Khoa"
          like={["1","2","3"]}
          content="<p>vui vẻ</p>"
          create_at={new Date()}
        />
      </div>
    </div>
  );
}
