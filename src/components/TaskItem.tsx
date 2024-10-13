import { Task } from './../types/TaskItem'

function TaskItem({ task }: { task: Task }) {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>{task.status}</span>
    </li>
  );
}

export default TaskItem;
