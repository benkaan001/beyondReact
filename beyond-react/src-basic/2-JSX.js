import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always returns JSX - though it looks like an HTML h1 tag
// always return a single element -- > solution use HTML semantics
// wrap it in div --> then section -->then article
// OR wrap it in ----> <React.Fragment>...</React.Fragment> ||| <>...</>  |||
// all html attributes must be used with camelCase
// i.e      class ---> className
// every HTML element must be closed </> including INPUT, IMG, whatsoever
// paranthesis are not required after the return statement, but they save headache

const Greeting = () => {
  return (
    <div className='first-class'>
      <h1> Say Yes to React! </h1>
      <ul>
        <li>
          <a href='/'>YES!!</a>
        </li>
        <li>
          <img src='' alt=''></img>
          <input type='text' name='firstname' id='firstname-id'></input>
        </li>
      </ul>
    </div>
  )
}
ReactDOM.render(<Greeting />, document.getElementById('root'))
