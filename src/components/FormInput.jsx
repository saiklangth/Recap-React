import { useState } from "react"

const FormInput = () => {
  // JS
  const [value, setValue] = useState({
    title: "",
    address: "",
  })
  // console.log("value =", value)

  const hdlOnChange = (e) => {
    // console.log(e)
    // console.log(e.target.name)
    // console.log(e.target.value)
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  const hdlSubmit = (e) => {
    e.preventDefault()
    // console.log("Submit")
    console.log(value)
  }

  // JSX
  return (
    <div>
      <button onClick={() => alert("Hello")}>Hello</button>
      
      <h1>{value.title}</h1>
      <form onSubmit={hdlSubmit}>
        <label>Title:</label>
        <input name="title" onChange={hdlOnChange} />

        <label>Address:</label>
        <input name="address" onChange={hdlOnChange} />

        <button>Submit</button>
      </form>
    </div>
  )
}
export default FormInput