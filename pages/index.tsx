import React, { useState, useCallback } from 'react'
import AddTodo from '../components/organisms/AddTodo'
import TodoItems from '../components/organisms/TodoList'
import styled from '@emotion/styled'

type Todo = { id: string; title: string }

const Content = styled.div`
  width: 80%;
  max-width: 640px;
  margin: 2rem auto;
`

const StyledTodos = styled(TodoItems)`
  margin-top: 2rem;
`

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleDelete = useCallback(
    (id: string) => {
      setTodos(todos.filter((todo) => todo.id !== id))
    },
    [todos]
  )
  const handleAdd = useCallback(
    ({ title }: { title: string }) => {
      const id = Date.now().toString() // TODO: uuid
      setTodos([...todos, { id, title }])
    },
    [todos]
  )

  return (
    <Content>
      <h1>Todo ({todos.length})</h1>
      <AddTodo onAdd={handleAdd} />
      <StyledTodos todos={todos} onDelete={handleDelete} />
    </Content>
  )
}

export default Home
