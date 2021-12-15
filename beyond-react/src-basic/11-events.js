import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

// like other events, we can go with either implicit return or explicit return
// for setting up our event listener callback function

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

// we don't have to create a button for onClick event

const Book = (props) => {
  const { img, title, author } = props

  // we can also access events

  // const simpleClickHandler = (e) => {
  //   console.log(e);
  //   console.log(e.target);

  // }

  const simpleClickHandler = () => {
    alert('That is a great book to read!')
  }

  // notice the difference between simple and complex

  // when we are passing an argument into the callback function
  // of an event handler, we need to invoke it as a call back, otherwise,
  // it will self-invoke and iterate through our books array three times
  // when we launch our application.

  const complexExample = (author) => {
    alert('Pheww! That was some complex stuff!')
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
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
