//rafce
const Book = (props) => {
  console.log(props)

  const {name, author} = props
  console.log(name)
  console.log(author)

  return (
    <div>
      Book...{name} <br />
      Author...{author}
    </div>
  )
}
export default Book