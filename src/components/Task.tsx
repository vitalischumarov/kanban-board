import { useDraggable } from "@dnd-kit/core";
import { taskType } from "../dataTypes/taskType";
import { CSS } from "@dnd-kit/utilities";

type Prop = {
  task: taskType;
};

export default function Task({ task }: Prop) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className="bg-stone-200 p-3 mb-4 hover:cursor-pointer"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <h4 className="pb-3.5 font-bold">{task.title}</h4>
      <p>{task.desctiption}</p>
    </div>
  );
}
