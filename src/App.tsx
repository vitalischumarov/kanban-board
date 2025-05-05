import "./App.css";
import Board from "./components/Board";
import NewTask from "./components/NewTask";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import { taskType } from "./dataTypes/taskType";

const boards: UniqueIdentifier[] = ["Backlog", "In Progress", "Done"];

const allTasks = [
  {
    id: "1",
    title: "Titel 1",
    desctiption:
      "Description of task One Description of task One Description of task One Description of task One",
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
          return { ...task };
        }
        return task;
      });
      setTasks(newArray);
    } else if (over && over.id === "Done") {
      let newArray = tasks.map((task) => {
        if (task.id === active.id) {
          task.status = "Done";
          return { ...task };
        }
        return task;
      });
      setTasks(newArray);
    } else {
      let newArray = tasks.map((task) => {
        if (task.id === active.id) {
          task.status = "In Progress";
          return { ...task };
        }
        return task;
      });
      setTasks(newArray);
    }
  }

  function addNewTask(item: taskType) {
    setTasks((prev) => [...prev, item]);
  }

  return (
    <div className="bg-stone-900 h-screen">
      <NewTask addFunction={addNewTask}></NewTask>
      <DndContext onDragEnd={handleDragEnd}>
        <div className=" flex justify-center gap-50">
          {boards.map((board) => {
            return (
              <Board boardStatus={board} tasks={tasks} key={board}></Board>
            );
          })}
        </div>
      </DndContext>
    </div>
  );
}

export default App;
