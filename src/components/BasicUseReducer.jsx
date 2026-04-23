import { useState } from "react"

const people = [
  { id: 1, name: 'Gao' },
  { id: 2, name: 'Dev' },
]

const BasicUseReducer = () => {
  // JS
  // Local State
  const [data, setData] = useState(people)

  const hdlRemove = (id) => {
    // console.log(id)
    // alert("Remove " + id)
    let newData = data.filter((el) => el.id !== id)
    // console.log(newData)
    setData(newData)
  }

  const hdlReset = () => {
    // alert("Reset")
    setData(people)
  }

  const hdlClear = () => {
    // alert("Clear")
    setData([])
  }

  // JSX
  return (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <h1>{el.name}</h1>
            <button onClick={() => hdlRemove(el.id)}>Remove User</button>
          </div>
        )
      })}
      <hr />
      <button onClick={hdlReset}>Reset</button>
      <button onClick={hdlClear}>Clear</button>
    </div>
  )
}
export default BasicUseReducer