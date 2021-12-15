import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

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
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51KfZtg6l9L._SX335_BO1,204,203,200_.jpg',
    title: 'The Snowball: Warren Buffett and the Business of Life',
    author: 'Alice Schroeder',
  },
]

const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((potato) => {
        return <Book book={potato}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props.book

  return (
    <article className='book'>
      <img src={img} alt='best book'></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
