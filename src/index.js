import React from 'react'
import ReactDOM from 'react-dom'

import s from './style.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className={s.title}>Title</h1>
        <a className={s.button}>Push</a>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
