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

// our variables can be outside the function or inside the function

// our variable must always return a VALUE!!!
// for example <h4>{let x =6}</h4> would return an error

// however, we can pass an expression
// <p> Number{4/4} book of the year </p>  would return
// <p> Number 1 book of the year </p>

// we can use any JS methods on our objest ie {author.toUpeerCase()} would
// return THOMAS THOMPSON

const author = 'Thomas Thompson'
const Book = () => {
  const title = 'Blood and Money: A True Story of Murder, Passion, and Power'
  return (
    <article className='book'>
      <img
        src='https://images-na.ssl-images-amazon.com/images/I/51zPWUu4pAL._SY291_BO1,204,203,200_QL40_ML2_.jpg'
        alt='best book award winner'
      ></img>
      <h1>{title.toLocaleUpperCase()}</h1>
      <h4>{author}</h4>
      {/* <p>{let x = 6}</p> */}
      {/* <p>Number {4 / 4} book of the year!</p> */}
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
