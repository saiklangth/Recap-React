import { useReducer, useState } from "react"

const data = [
  { id: 1, name: 'Gao' },
  { id: 2, name: 'Dev' },
]

const defaultState = {
  people: data,
  user: "Gao",
  login: true,
}

const reducer = (state, action) => {
  // fn body
  // console.log(action.type, action.payload.id)
  if (action.type === "CLEAR") {
    // console.log({ ...state })
    return { ...state, people: [] }
  }
  if (action.type === "RESET") {
    return { ...state, people: data }
  }
  if (action.type === "REMOVE_ITEM") {
    let { id } = action.payload
    // console.log(id)
    let newData = state.people.filter((el) => el.id !== id)
    // console.log(newData)
    return { ...state, people: newData }
  }
  return state
}

const BasicUseReducer2 = () => {
  // JS
  // Local State : ถ้า state ไม่ซับซ้อน
  // const [data, setData] = useState(people)

  const [state, disPatch] = useReducer(reducer, defaultState)

  const hdlRemove = (id) => {
    disPatch({ type: "REMOVE_ITEM", payload: { id: id } })
  }
  const hdlReset = () => {
    disPatch({ type: "RESET" })
  }
  const hdlClear = () => {
    disPatch({ type: "CLEAR" })
  }

  // JSX
  return (
    <div>
      {state.people.map((el) => {
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
export default BasicUseReducer2