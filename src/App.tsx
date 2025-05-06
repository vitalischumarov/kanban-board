import "./App.css";
import Board from "./components/Board";
import NewTask from "./components/NewTask";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";
import { useState } from "react";
import { taskType } from "./dataTypes/taskType";
import { supabase } from "./supabase-client";

const boards: UniqueIdentifier[] = ["Backlog", "In Progress", "Done"];

const allTasks: taskType[] = [];

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

  async function addNewTask(item: taskType) {
    const { error, data } = await supabase.from("kanbanTasks").insert(item);

    if (error) {
      console.log(`error: ${error}`);
    }
    console.table(item);
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
