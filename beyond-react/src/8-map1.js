import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

// REACT will not iterate through the books object
// will give `Objects are not valid as a React child` error

// So let's run a simple array with strings to map through first and
// then render it wrapped in h1 tags

const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51zPWUu4pAL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    title: 'Blood and Money: A True Story of Murder, Passion, and Power',
    author: 'Thomas Thompson',
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
  },
]

// simple example

const names = ['ben', 'veda', 'bilkem']
const newNames = names.map((name) => {
  return <h1>{name}</h1>
})

console.log(newNames)

const Booklist = () => {
  return <section className='booklist'>{newNames}</section>
}

const Book = (props) => {
  const { img, title, author } = (
    <article className='book'>
      <img src={img} alt='best book'></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
