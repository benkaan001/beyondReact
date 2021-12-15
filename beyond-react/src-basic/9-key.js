import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

// in order to keep track, React requires us to use some sort of unique id key.
// this typically comes from DB liek _id, but in this case we will set it up manually

const books = [
  {
    id: 0,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51zPWUu4pAL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    title: 'Blood and Money: A True Story of Murder, Passion, and Power',
    author: 'Thomas Thompson',
  },
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
    title:
      'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51KfZtg6l9L._SX335_BO1,204,203,200_.jpg',
    title: 'The Snowball: Warren Buffett and the Business of Life',
    author: 'Alice Schroeder',
  },
]

// notice how we can also pass in the index and just use that index value for our
// key value. However, indexing is more appropriate if our data is not changing frequently

const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((potato, index) => {
        return <Book key={potato.id} book={potato}></Book>
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
