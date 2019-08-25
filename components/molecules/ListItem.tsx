import React from 'react'
import styled from '@emotion/styled'
import List from '../atoms/List'

type Props = {
  title: string
  action?: React.ReactNode
}

const StyledItem = styled(List.Item)`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  :hover {
    background: #f4fbfc;
  }
`

const Content = styled.div`
  flex: 1;
`

const Action = styled.div``

const ListItem: React.FC<Props> = ({ title, action, ...rest }) => {
  return (
    <StyledItem {...rest}>
      <Content>{title}</Content>
      {action && <Action>{action}</Action>}
    </StyledItem>
  )
}

export default ListItem
