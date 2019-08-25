import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

storiesOf('atoms/Button', module).add('default', () => (
  <>
    <Button onClick={action('click')}>Hello Button</Button>
    <Button type="danger">danger</Button>
    <Button disabled>disabled</Button>
  </>
))
