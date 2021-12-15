import React from 'react'
import ReactDOM from 'react-dom'

// Nested Components

const Greeting = () => {
  return (
    <div>
      {/* <h2>Mystery Person</h2> */}
      {/* <Person></Person> */}
      <Person />
      {/* <p> His mysterious message : "Say yes to React!"</p> */}
      <Message />
    </div>
  )
}

const Person = () => <h2>Mystery Person</h2>

const Message = () => {
  return <p>His mysterious message : "Say yes to React!"</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'))
