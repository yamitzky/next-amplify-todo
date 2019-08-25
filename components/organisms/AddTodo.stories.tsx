import React from 'react'
import { storiesOf } from '@storybook/react'
import AddTodo from './AddTodo'
import { action } from '@storybook/addon-actions'

storiesOf('organisms/AddTodo', module).add('default', () => <AddTodo onAdd={action('add')} />)
