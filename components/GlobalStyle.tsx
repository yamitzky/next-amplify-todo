import React from 'react'
import { Global, css } from '@emotion/core'

const GlobalStyle: React.FC = () => {
  return (
    <Global
      styles={css`
        html {
          color: #262f30;
          font: 400 14px / 20px 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 15px;
          line-height: 1.8;
        }
      `}
    />
  )
}

export default GlobalStyle
