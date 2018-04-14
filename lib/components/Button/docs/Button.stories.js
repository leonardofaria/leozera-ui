import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import centered from '@storybook/addon-centered'

import Button from '../Button'

const stories = storiesOf('Button', module)
stories.addDecorator(withKnobs)
stories.addDecorator(centered)

stories.add('default',
  withInfo(`
    This button was created following our design guidelines.
  `)(() =>
    <Button disabled={boolean('disabled', false)}>
      {text('children', 'Hello Stranger')}
    </Button>
  )
)
