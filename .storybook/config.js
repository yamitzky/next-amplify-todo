import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import GlobalStyle from '../components/GlobalStyle'

const req = require.context('../components', true, /.stories.tsx$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

const withGlobal = (cb) => (
  <>
    <GlobalStyle />
    {cb()}
  </>
)

addDecorator(withGlobal)
configure(loadStories, module)
