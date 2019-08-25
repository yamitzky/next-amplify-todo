import React from 'react'
import List from '../../atoms/List'
import TodoItem from './Item'

type Todo = {
  id: string
  title: string
}

type Props = {
  todos: Todo[]
  onDelete: (id: string) => void
}

const TodoItems: React.FC<Props> = ({ onDelete, todos, ...rest }) => {
  return (
    <List {...rest}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} onDelete={onDelete} />
      ))}
    </List>
  )
}

export default TodoItems
