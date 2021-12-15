import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

//set up variables

const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51zPWUu4pAL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
  title: 'Blood and Money: A True Story of Murder, Passion, and Power',
  author: 'Thomas Thompson',
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51j8IiHZUtL._SY291_BO1,204,203,200_QL40_ML2_.jpg',
  title:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
  author: 'James Clear',
}

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sit
          expedita ab impedit error eligendi ea ullam. Laudantium quam magnam
          distinctio molestias voluptatem ab autem?
        </p>
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  // const { img, title, author } = props  // option 2

  const { img, title, author, children } = props

  return (
    <article className='book'>
      <img src={img} alt='best book'></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {props.children}  option 2 */}
      {children}
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
