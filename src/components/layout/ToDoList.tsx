import React from "react";
import TASK from "@/types/type";
import prisma from "@/lib/db";

/* Task全取得 */
const getTaskAll = async () => {
  const res = await fetch("http://localhost:3000/api/task", {
    cache: "no-store",
  });
  const TaskAllData: TASK[] = await res.json();
  return TaskAllData;
};

const ToDoList = () => {
  return (
    <ul>
      <li className="flex justify-between p-4 mt-2 bg-white border-l-4 border-blue-500 rounded-md shadow">
        <span>散歩</span>
        <div>
          <button className=" text-green-500 mr-4">編集</button>
          <button className=" text-red-500">削除</button>
        </div>
      </li>
      <li className="flex justify-between p-4 mt-2 bg-white border-l-4 border-blue-500 rounded-md shadow">
        <span>散歩</span>
        <div>
          <button className=" text-green-500 mr-4">編集</button>
          <button className=" text-red-500">削除</button>
        </div>
      </li>
    </ul>
  );
};

export default ToDoList;
