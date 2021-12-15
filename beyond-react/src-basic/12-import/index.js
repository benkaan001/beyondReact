import React from 'react'
import ReactDOM from 'react-dom'

// add CSS
import './index.css'

// since it is a js file we don't need to add the js extension to our file path
import { books } from './books'
// though we exported as Book we can manipulate the name in the import as long as
// we update the corresponding component names in the Booklist
import Book from './Book'

import { greeting } from './test/testing'

const Booklist = () => {
  console.log(greeting)
  return (
    <section className='booklist'>
      {books.map((potato) => {
        return <Book key={potato.id} {...potato}></Book>
      })}
    </section>
  )
}

ReactDOM.render(<Booklist />, document.getElementById('root'))
