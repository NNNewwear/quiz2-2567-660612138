"use client"
import Image from "next/image";
import styles from "./page.module.css";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import { useState , useEffect } from "react";
import { CommentProps } from "@/libs/types";
import { comments } from "@/libs/comments";
import { PostOwnerProps } from "@/libs/types";
export default function Home() {
  const [commentss, setcomment] = useState<CommentProps[]>([]);
  useEffect(()=>{
    setcomment(comments);
  }, []);
  
  return (  
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwnner
            userImagePath="/profileImages/IMG_4395.jpg"
            username="kantapong temeesak 660612138"
            commentText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"
            likeNum="100"
          />
    
        {/* Comment Example */}
        
        {commentss.map((comment)=>(
          <Comment 
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
            key={comment.username}
          />
        ))}

        {/* Reply Example */}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
