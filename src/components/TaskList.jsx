import TaskCard from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0)
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        There are no tasks yet
      </h1>
    );

  const taskData = tasks.map((task) => <TaskCard key={task.id} task={task} />);

  return <div className="grid grid-cols-4 gap-4">{taskData}</div>;
}

export default TaskList;
