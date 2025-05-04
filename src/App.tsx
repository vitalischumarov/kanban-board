import "./App.css";
import Board from "./components/Board";

const boards: String[] = ["Backlog", "In Progress", "Done"];

function App() {
  return (
    <div className="bg-stone-900 h-screen flex justify-center gap-80">
      {boards.map((board) => {
        return <Board boardStatus={board}></Board>;
      })}
    </div>
  );
}

export default App;
