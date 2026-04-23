import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchBasic = () => {

  // 2. เอาของที่ได้มาจาก useEffect มาเก็บในนี้
  const [users, setUsers] = useState([])

  // 1. เอาของมาแบบไม่ต้องกดปุ่ม จะเขียน function ในนี้เลยก็ได้
  useEffect(() => {
    hdlFetch()
  }, [])

  const hdlFetch = async () => {
    // fn body
    // alert("Test Fetch")
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)
      // เอาของมา set ที่นี่
      setUsers(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      {/* <button onClick={hdlFetch}>Fetch Data</button> */}
      <h1>Hello Fetch</h1>
      {
        users.map((item) => {
          // console.log(item.id)
          return <div>
            <img src={item.avatar_url} />
            <p>{item.login}</p>
          </div>
        })
      }
    </div>
  )
}
export default FetchBasic