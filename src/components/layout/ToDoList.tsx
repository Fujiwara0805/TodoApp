import TASK from "@/types/type";
import React from "react";
import Task from "./Task";

interface TaskProps {
  tasks: TASK[];
}

const ToDoList = ({ tasks }: TaskProps) => {
  return (
    <ul>
      {tasks.map((task: TASK) => {
        return (
          <>
            <Task key={task.id} task={task} />
          </>
        );
      })}
    </ul>
  );
};

export default ToDoList;
