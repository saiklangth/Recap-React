const TestProps = ({ children, data }) => {
  //JS
  console.log(data)

  return (
    <div>
      {children}
      {/* {data} ทำแบบนี้ไม่ได้เพราะข้อมูลถูกส่งมาเป็น Array ต้อง loop ออกมาก่อน */}
      {
        data.map((value, index, arr)=>{
          // fn body
          // console.log(value)
          // console.log(index)
          // console.log(arr)
          return <li key={index}>{value.name}</li>
        })
      }
    </div>
  )
}
export default TestProps