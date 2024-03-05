"use client";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

/* Task追加 */
const PostTask = async (content: string | undefined) => {
  try {
    const res = await fetch("http://localhost:3000/api/task", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });
    return res.json();
  } catch (error) {
    console.log("エラーが発生しました🔥", error);
  }
};

const AddTask = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  /* ボタン押下でタスクを追加 */
  const handleClick = async () => {
    await PostTask(inputRef.current?.value);
    router.refresh();
  };

  return (
    <form className=" mb-4 space-y-3">
      <input
        ref={inputRef}
        type="text"
        className=" w-full border px-4 py-2 rounded-lg focus:outline-none"
      />
      <button
        className=" w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:bg-blue-400  hover:scale-95 duration-200"
        onClick={handleClick}
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
