import React from 'react'
import App from 'next/app'
import GlobalStyle from '../components/globalStyle'

class MyApp extends App {
  public render(): React.ReactElement {
    const { Component, pageProps } = this.props
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    )
  }
}

export default MyApp
