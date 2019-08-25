import React from 'react'
import { storiesOf } from '@storybook/react'
import Link from './Link'

storiesOf('atoms/Link', module).add('default', () => (
  <Link href="https://yamitzky.com" target="_blank">
    link
  </Link>
))
