import React from 'react'
import ReactDOM from 'react-dom'

// add CSS

import './index.css'

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img
      src='https://images-na.ssl-images-amazon.com/images/I/51zPWUu4pAL._SY291_BO1,204,203,200_QL40_ML2_.jpg'
      alt='best book award winner'
    ></img>
  )
}

const Title = () => {
  return <h1>Blood and Money: A True Story of Murder, Passion, and Power</h1>
}
// first set of curly braces {} takes us from JSX world to pure JS word
// second set of curly braces {{}} just denotes that we are creating/expressing
// an object in javascript.

// {name:'peter', email:'peter@test.com'} ---> don't forget the {key:'value'} rule
// color:'purple' applies to all of our <h4> elements

// this inline css rule overrides the one defined in index.css
const Author = () => {
  return (
    <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
      Thomas Thompson
    </h4>
  )
}
ReactDOM.render(<Booklist />, document.getElementById('root'))
