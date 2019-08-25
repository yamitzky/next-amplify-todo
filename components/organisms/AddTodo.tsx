import React, { useCallback, useState, ChangeEvent, KeyboardEvent } from 'react'
import styled from '@emotion/styled'
import Input from '../atoms/Input'
import Button from '../atoms/Button'

// TODO: DRY
type Todo = {
  title: string
}

type Props = {
  onAdd: (todo: Todo) => void
}

const StyledInput = styled(Input)`
  flex: 1;
  margin-right: 1rem;
`

const Wrapper = styled.div`
  display: flex;
`

const AddTodo: React.FC<Props> = ({ onAdd }) => {
  const [title, setTitle] = useState('')

  const handleAdd = useCallback(() => {
    if (title) {
      onAdd({ title })
    }
    setTitle('')
  }, [onAdd, title])
  const handleEnter = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !(e.nativeEvent as any).isComposing) {
        handleAdd()
      }
    },
    [handleAdd]
  )
  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }, [])

  return (
    <Wrapper>
      <StyledInput value={title} onChange={handleChangeInput} onKeyDown={handleEnter} />
      <Button onClick={handleAdd} disabled={!title.length}>
        +
      </Button>
    </Wrapper>
  )
}

export default AddTodo
