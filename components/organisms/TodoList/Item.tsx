import React, { useCallback } from 'react'
import ListItem from '../../molecules/ListItem'
import Button from '../../atoms/Button'
import styled from '@emotion/styled'

type Todo = {
  id: string
  title: string
}

type Props = Todo & {
  onDelete: (id: string) => void
}

const StyledListItem = styled(ListItem)`
  /* TODO: babel-plugin-emotion */
  button {
    transition: visibility 0s linear 0s;
    visibility: hidden;
  }

  :hover button {
    visibility: visible;
  }
`

const TodoItem: React.FC<Props> = ({ onDelete, id, title }) => {
  const handleDelete = useCallback(() => {
    onDelete(id)
  }, [onDelete, id])

  return (
    <StyledListItem
      title={title}
      action={
        <Button type="danger" onClick={handleDelete}>
          del
        </Button>
      }
    />
  )
}

export default TodoItem
