import styled from '@emotion/styled'

const Item = styled.li`
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;

  & + & {
    border-top-width: 0;
  }
`

export default Item
