const ListBasic = (props) => {
  // JS
  // .map(fn(el, index, arr))
  // console.log(props)
  const {users} = props
  console.log(users)

  // JSX
  return (
    <div>ListBasic
      {
        users.map((el, i) => {
          return <h1 key={i}>{el.name}</h1>
        })
      }
    </div>
  )
}
export default ListBasic