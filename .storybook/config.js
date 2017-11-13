import * as storybook from '@storybook/react'
import infoAddon from '@storybook/addon-info'
import { setOptions } from '@storybook/addon-options'

// All options: https://git.io/vHpmO
setOptions({
  name: 'Leozera UI Storybook',
  url: '/',
})

const req = require.context('../lib/components', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

storybook.setAddon(infoAddon)

storybook.configure(loadStories, module)
