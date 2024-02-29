import AddTask from "../components/layout/AddTask";
import ToDoList from "../components/layout/ToDoList";

export default function Home() {
  return (
    <main className=" flex flex-col items-center justify-center min-h-screen py-4 bg-gray-200">
      <h1 className=" text-4xl text-gray-700 font-bold -mt-32">TODOアプリ</h1>
      <div className=" w-full max-w-xl mt-5 text-gray-700">
        <div className=" w-full px-8 py-6 bg-white shadow-lg rounded-md">
          <AddTask />
          <ToDoList />
        </div>
      </div>
    </main>
  );
}
