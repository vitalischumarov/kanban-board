import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";
import { taskType } from "../dataTypes/taskType";

type Prop = {
  boardStatus: UniqueIdentifier;
  tasks: taskType[];
};

export default function Board({ boardStatus, tasks }: Prop) {
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
