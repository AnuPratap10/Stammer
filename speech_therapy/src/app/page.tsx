import Image from "next/image";
import {AddTask} from "./components/AddTask";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";

export default function Home() {
  return (
    <main className="">
     
      <AddTask />
      <TaskList/>
    </main>
  );
}
