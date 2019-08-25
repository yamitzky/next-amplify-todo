import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Input from './Input'

storiesOf('atoms/Input', module).add('default', () => (
  <>
    value:
    <Input value="test" onChange={action('changed')} />
    <br />
    defaultValue:
    <Input defaultValue="test" />
    <br />
    placeholder:
    <Input placeholder="type your name" />
  </>
))
