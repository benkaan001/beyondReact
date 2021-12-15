import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

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

const Booklist = () => {
  return (
    <section className='booklist'>
      {books.map((potato) => {
        return <Book key={potato.id} {...potato}></Book>
      })}
    </section>
  )
}

const Book = (props) => {
  const { img, title, author } = props

  const simpleClickHandler = () => {
    alert('That is a great book to read!')
  }

  const complexExample = (author) => {
    alert('Pheww! That was some complex stuff!')
  }

  return (
    <article>
      <img src={img} alt='best book'></img>
      <h1
        onClick={() => {
          alert(`Written By : ${author}`)
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type='button' onClick={simpleClickHandler}>
        Reference Example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
