import React from 'react'
import { storiesOf } from '@storybook/react'
import ListItem from './ListItem'
import List from '../atoms/List'
import Button from '../atoms/Button'

storiesOf('molecules/ListItem', module).add('default', () => (
  <List>
    <ListItem title="Buy milk" />
    <ListItem title="With action" action={<Button type="danger">x</Button>} />
  </List>
))
