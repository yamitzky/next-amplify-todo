import styled from '@emotion/styled'
import Item from './Item'

type Children = { Item?: typeof Item }

const List: React.FC & Children = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

List.Item = Item

export default List as typeof List & Required<Children>
