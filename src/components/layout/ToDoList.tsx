import TASK from "@/types/type";
import React from "react";

interface TaskProps {
  tasks: TASK[];
}

const ToDoList = ({ tasks }: TaskProps) => {
  return (
    <ul>
      {tasks.map((task: TASK) => {
        return (
          <>
            <li
              id={task.id}
              className="flex justify-between p-4 mt-2 bg-white border-l-4 border-blue-500 rounded-md shadow"
            >
              <span>{task.content}</span>
              <div>
                <button className=" text-green-500 mr-4">編集</button>
                <button className=" text-red-500">削除</button>
              </div>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default ToDoList;
