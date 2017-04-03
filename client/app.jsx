import React from 'react'
import { render } from 'react-dom'

import MainContainer from './src/containers/MainContainer.jsx'

window.onload = () => {
  render(
    <MainContainer />,
    document.getElementById('app')
  )
}
