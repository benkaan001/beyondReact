// type -- rafce -- for the ES7 react boilerplate extension --remember to Capitalize!

// import React from 'react'

// const index = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default index

// ******************************************

import React from 'react'
import ReactDOM from 'react-dom'

// stateless functional component
// always returns JSX - though it looks like an HTML h1 tag

// const Greeting1 = () => {
//   return <h1>SAY YES TO REACT!!!</h1>
// }

// const Greeting2 = () => {
//   return React.createElement('h3', {}, 'SAY YES TO REACT!!!')
// }

// const Greeting3 = () => {
//   return <div>
//     <h1> SAY YES TO REACT!!!</h1>
//   </div>
// }

// this is what is happening under the hood. That's why the HTML syntax is
// more readable and preferable.

const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h1', {}, 'SAY YES TO REACT')
  )
}
// alternatively <Greeting> </Greeting>
// ReactDOM.render(<Greeting1 />, document.getElementById('root'))
// ReactDOM.render(<Greeting2 />, document.getElementById('root'))
// ReactDOM.render(<Greeting3 />, document.getElementById('root'))
ReactDOM.render(<Greeting />, document.getElementById('root'))

// ****************************************************
