import React, { ButtonHTMLAttributes } from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

type ButtonType = null | 'danger'

type OwnProps = {
  type?: ButtonType
}

type WrapperProps = {
  buttonType?: ButtonType
}

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & OwnProps

const StyledButton = styled('button')<WrapperProps>`
  appearance: none;
  border: 1px solid #89d2dd;
  background: #f4fbfc;
  color: #00a6bc;
  border-radius: 5px;
  transition: all linear 0.2s;
  cursor: pointer;
  font-size: 1.06rem;
  padding: 0.8rem;

  :hover {
    background: #00a6bc;
    color: #f4fbfc;
  }

  :focus {
    outline: none;
  }

  :disabled {
    border-color: #b3b3b3;
    background: #f7f7f7;
    color: #b3b3b3;
  }

  ${({ buttonType }) =>
    buttonType === 'danger' &&
    css`
      color: #bc0000;
      border-color: #dd8989;
      background: #fcf4f4;

      :hover {
        background: #bc0000;
        color: #fcf4f4;
      }
    `}
`

const Button: React.FC<Props> = ({ type, ...rest }) => {
  return <StyledButton {...rest} buttonType={type} />
}

export default Button
