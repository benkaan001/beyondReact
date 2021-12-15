import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

// we can destructure props object to avoid repetations like props.img, props.title, etc

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

// CHILDREN PROP is everything that we render inside the component. We need to make
// sure that the component is not self-closing.
// the children props content need to go between opening and closing brackets of the component

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

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props  --> option#1

  // option#2 we can destructure the props object like this and
  // even destructure furter if there are any nested objets inside the props

  // we can place the children object anywhere we like like to render
  return (
    <article className='book'>
      <img src={img} alt='best book'></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
