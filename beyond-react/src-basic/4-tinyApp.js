import React from 'react'
import ReactDOM from 'react-dom'

// Nested Components

const Booklist = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}
const Book = () => {
  return (
    <article>
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

const Author = () => {
  return <h4>Thomas Thompson</h4>
}
ReactDOM.render(<Booklist />, document.getElementById('root'))
