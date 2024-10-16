import { Select, Option, ContainerFilter } from '../styles/TaskForm'

interface TaskFilterProps {
  filter: string
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const TaskFilter = ({ filter, onChange }: TaskFilterProps) => {
  return (
    <ContainerFilter>
      <span style={{ marginRight: '10px' }}>Filtros:</span>
      <Select value={filter} onChange={onChange}>
        <Option value="">Todas</Option>
        <Option value="Pendente">Pendente</Option>
        <Option value="Concluída">Concluída</Option>
        <Option value="Em Progresso">Em Progresso</Option>
      </Select>
    </ContainerFilter>
  )
}
