import { useState } from 'react';
import { Task } from '../types/TaskItem';

const TaskForm = ({ task }: { task?: Task }) => {
  const [title, setTitle] = useState(task?.title || '');
  const [description, setDescription] = useState(task?.description || '');

  return (
    <form>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Título" />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Descrição" />
      <button type="submit">{task ? 'Editar' : 'Adicionar'}</button>
    </form>
  );
};

export default TaskForm;
