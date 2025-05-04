import Task from "./Task";
import { useState } from "react";
import { taskType } from "../dataTypes/taskType";
import { useDroppable } from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";

type Prop = {
  boardStatus: UniqueIdentifier;
};

export default function Board({ boardStatus }: Prop) {
  const allTasks = [
    {
      id: "1",
      title: "Titel 1",
      desctiption: "Description of task One",
      status: "Backlog",
    },
    {
      id: "2",
      title: "Titel 2",
      desctiption: "Description of task Two",
      status: "In Progress",
    },
    {
      id: "3",
      title: "Titel 3",
      desctiption: "Description of task Three",
      status: "Done",
    },
    {
      id: "4",
      title: "Titel 4",
      desctiption: "Description of task Four",
      status: "In Progress",
    },
  ];

  const [tasks, setTasks] = useState<taskType[]>(allTasks);

  const { isOver, setNodeRef } = useDroppable({
    id: boardStatus,
  });

  if (isOver) {
    console.log(boardStatus);
  }

  return (
    <div className="h-full mt-10 w-62" ref={setNodeRef}>
      <h3 className="text-amber-50 bg-stone-600 p-6 text-center">
        {boardStatus}
      </h3>
      <div className="bg-stone-400 p-5">
        {tasks.map((task) => {
          if (task.status === boardStatus) {
            return <Task task={task}></Task>;
          }
        })}
      </div>
    </div>
  );
}
