"use client";
import { CommentProps, ReplyProps } from "@/libs/types";
import Reply from "./Reply";
import { useState , useEffect } from "react";
export default function Comment({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}: CommentProps) {
  const [replyss, setreply] = useState<ReplyProps[]>([]);
  useEffect(()=>{
    setreply(replies);
  }, []);
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{likeNum} คน</span>
          </div>
        </div>
      </div>
        {replyss.map((replys)=>(
          <Reply
            userImagePath={replys.userImagePath}
            username={replys.username}
            replyText={replys.replyText}
            likeNum={replys.likeNum}
            key={replys.username}
          />
        ))}
    </div>    
  );
}
{/* You can use map-loop to render Reply component here */}

