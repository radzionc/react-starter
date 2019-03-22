import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from '../src/components/button'

storiesOf('Buttons', module).add('button', () => (
  <Button text={text('text')} onClick={action('button click')} />
))
