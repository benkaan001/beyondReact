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

// each file can only have one default export value

export default Book
