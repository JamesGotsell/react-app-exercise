import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './components/Root'
import './index.css'

// within here in need to import configureStore so i can pass store into root

injectTapEventPlugin()

ReactDOM.render(<Root />, document.getElementById('root'))
