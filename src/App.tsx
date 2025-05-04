import "./App.css";
import Board from "./components/Board";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { UniqueIdentifier } from "@dnd-kit/core";

const boards: UniqueIdentifier[] = ["Backlog", "In Progress", "Done"];

function App() {
  function handleDragEnd(event: DragEndEvent) {
    const { over, active } = event;
    //Diese Aktion wird ausgefuehrt, wenn losgelassen wird!!!
    if (over && over.id === "Backlog") {
      const newArray = 
    } else if (over && over.id === "Done") {
      console.log("du bist bei Done");
    } else console.log("du bist beim Im Progress");
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="bg-stone-900 h-screen flex justify-center gap-50">
        {boards.map((board) => {
          return <Board boardStatus={board}></Board>;
        })}
      </div>
    </DndContext>
  );
}

export default App;
