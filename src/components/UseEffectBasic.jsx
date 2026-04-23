import { useEffect, useState } from "react"

const UseEffectBasic = () => {
  const [value, setValue] = useState(0)

  // Render No.3
  useEffect(() => {
    // fn body
    console.log('Hello UseEffect')
  }, [value])

  // Render No.1 เมื่อ onClick button ไม่ควร run
  const sayHi = () => {
    console.log("SayHi")
  }
  sayHi()

  // Render No.2
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Count</button>
      {console.log("Hello Render")}
    </div>
  )
}
export default UseEffectBasic