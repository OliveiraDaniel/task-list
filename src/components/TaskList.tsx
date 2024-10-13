import TaskItem from './TaskItem';

const taskMock = {
    id: 0,
    title: 'Teste 1',
    description: 'Task de teste',
    status: 'Pendente',
}


const TaskList = () => {
  return (
    <div>
      <ul>
        <TaskItem key={0} task={taskMock} />
      </ul>
    </div>
  );
};

export default TaskList;
