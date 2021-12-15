import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

//prop that stands for properties is basically an argument that we pass into our
//function as a parameter. We can name it however we like, but the convention is prop

// in order to pass the props (object) into the book function, we need to go to
// where we render the Book in " prop-name =' prop-value'" pairs

// when we console log we see two objects and now we can pass whatever value
// that we would like to pass for each individual book object

// we can access any specific prop as shown in the <p></p> element
// notice how the first book has only pagecount while the second one only has price

//set up variables
const author = 'Thomas Thompson'
const title = 'Blood and Money: A True Story of Murder, Passion, and Power'
const img =
  'https://images-na.ssl-images-amazon.com/images/I/51zPWUu4pAL._SY291_BO1,204,203,200_QL40_ML2_.jpg'

const Booklist = () => {
  return (
    <section className='booklist'>
      <Book title='random title' pageCount={300 + 55} />
      <Book price='$15.05' value='high' supply='limited' />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className='book'>
      <img src={img} alt='best book'></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p> {props.pageCount}</p>
      <p> {props.price}</p>
    </article>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
