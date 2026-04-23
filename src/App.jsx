// import Book from "./components/Book"
// import TestProps from "./components/TestProps"
// import Title from "./components/Title"


// //rafce
// const App = () => {

//   const user = [
//     { id: 1, name: "Gao" },
//     { id: 2, name: "Buta" }
//   ]

//   return (
//     <div>

//       {/* การส่ง props ต้องส่งจากแม่มาหาลูก */}
//       <Title test="Easy React" price={500} />
//       <Book name="Basic Javascript" author="Gao" />

//       {/* การส่ง props แบบ children + props แบบปกติ */}
//       <TestProps data={user}>
//         <p>
//           Para.........
//           <span>price......</span>
//         </p>
//         <button>Submit</button>
//       </TestProps>

//     </div>
//   )
// }
// export default App

import { useState } from "react"

const App = () => {
  // JS
  const [msg, setMsg] = useState(0)
  console.log(msg)

  const hdlShow = () => {
    setMsg(msg + 1)
  }
  // hdlShow()

  // HSML(JSX)
  return (
    <div>
      App--{msg}
      <button onClick={hdlShow}>Jukkru!</button>
    </div>
  )
}
export default App