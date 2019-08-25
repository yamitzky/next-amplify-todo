import styled from '@emotion/styled'

const Input = styled.input`
  appearance: none;
  border-radius: 4px;
  transition: all linear 0.2s;
  background: #fff;
  border: 1px solid #d4dadc;
  padding: 4px 6px;

  :hover {
    border: 1px solid #89d2dd;
    background: #f4fbfc;
  }

  :focus {
    outline: none;
  }
`

export default Input
