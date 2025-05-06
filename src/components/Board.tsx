import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";
import { taskType } from "../dataTypes/taskType";

type Prop = {
  boardStatus: UniqueIdentifier;
  tasks: taskType[];
};

let style: String;

export default function Board({ boardStatus, tasks }: Prop) {
  let design = "bg-stone-600";
  const { isOver, setNodeRef } = useDroppable({
    id: boardStatus,
  });

  if (isOver) {
    design = "bg-stone-500";
  }

  if (boardStatus === "In Progress") {
    style = "bg-blue-300";
  } else if (boardStatus === "Done") {
    style = "bg-green-300";
  } else if (boardStatus === "Backlog") {
    style = "bg-gray-300";
  }

  return (
    <div className={`h-full mt-10 w-62`} ref={setNodeRef}>
      <h3 className={`text-amber-50 ${design} p-6 text-center`}>
        {boardStatus}
      </h3>
      <div className={`${style} p-5`}>
        {tasks.map((task) => {
          if (task.status === boardStatus) {
            return <Task task={task} key={task.id}></Task>;
          }
        })}
      </div>
    </div>
  );
}
