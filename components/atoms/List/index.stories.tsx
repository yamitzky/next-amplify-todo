import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './'

storiesOf('atoms/List', module).add('default', () => (
  <List>
    <List.Item>hello</List.Item>
    <List.Item>こんにちは</List.Item>
    <List.Item>你好</List.Item>
  </List>
))
