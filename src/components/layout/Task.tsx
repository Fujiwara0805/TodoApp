"use client";
import TASK from "@/types/type";
import React, { useState } from "react";

interface TaskProps {
  task: TASK;
}

/* Task編集 */
const updateTask = async (id: string, newContent: string) => {
  const res = await fetch(`http://localhost:3000/api/task/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      content: newContent,
    }),
  });
  return await res.json();
};

const Task = ({ task }: TaskProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(task.content);

  const handleEdit = async () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    await updateTask(task.id, editContent);
  };

  return (
    <>
      <li
        key={task.id}
        className="flex justify-between p-4 mt-2 bg-white border-l-4 border-blue-500 rounded-md shadow"
      >
        {isEditing ? (
          <input
            type="text"
            className=" mr-2 py-1 px-2 rounded border-gray-400 border"
            value={editContent}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEditContent(e.target.value);
            }}
          />
        ) : (
          <span>{editContent}</span>
        )}

        <div>
          {isEditing ? (
            <button className=" text-blue-500 mr-4" onClick={handleSave}>
              保存
            </button>
          ) : (
            <button className=" text-green-500 mr-4" onClick={handleEdit}>
              編集
            </button>
          )}

          <button className=" text-red-500">削除</button>
        </div>
      </li>
    </>
  );
};

export default Task;
