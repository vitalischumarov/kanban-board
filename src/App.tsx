import "./App.css";
import Board from "./components/Board";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import { taskType } from "./dataTypes/taskType";

const boards: UniqueIdentifier[] = ["Backlog", "In Progress", "Done"];

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

function App() {
  const [tasks, setTasks] = useState<taskType[]>(allTasks);

  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    //Diese Aktion wird ausgefuehrt, wenn losgelassen wird!!!
    if (over && over.id === "Backlog") {
      let newArray = tasks.map((task) => {
        if (task.id === active.id) {
          task.status = "Backlog";
        }
        return;
      });
      setTasks([...tasks, newArray]);
    } else if (over && over.id === "Done") {
      let newArray = tasks.map((task) => {
        if (task.id === active.id) {
          task.status = "Done";
        }
        return;
      });
      setTasks([...tasks, newArray]);
    } else {
      let newArray = tasks.map((task) => {
        if (task.id === active.id) {
          task.status = "In Progress";
        }
        return;
      });
      setTasks([...tasks, newArray]);
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="bg-stone-900 h-screen flex justify-center gap-50">
        {boards.map((board) => {
          return <Board boardStatus={board} tasks={tasks}></Board>;
        })}
      </div>
    </DndContext>
  );
}

export default App;
