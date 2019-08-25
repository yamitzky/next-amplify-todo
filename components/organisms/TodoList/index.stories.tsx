import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TodoList from './'

const todos = [
  { id: '0000', title: 'buy milk' },
  { id: '0001', title: 'go to the gym' },
  { id: '0002', title: 'say hello to James Gordon' }
]
storiesOf('organisms/TodoList', module).add('default', () => (
  <TodoList todos={todos} onDelete={action('delete')} />
))
