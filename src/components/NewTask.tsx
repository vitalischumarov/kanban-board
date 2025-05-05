import { useState, useContext } from "react";
import { taskType } from "../dataTypes/taskType";
import { UniqueIdentifier } from "@dnd-kit/core";

var newTask: taskType = {
  title: "",
  desctiption: "",
  id: Math.random(),
  status: "Backlog",
};

export default function NewTask() {
  return (
    <div className="pt-10 flex gap-1 justify-center">
      <input
        type="text"
        className="bg-white"
        name="title"
        value={String(newTask.title)}
      />
      <input
        type="text"
        className="bg-white w-90"
        name="description"
        value={String(newTask.desctiption)}
      />
      <button className="bg-amber-400 p-2">add</button>
    </div>
  );
}
