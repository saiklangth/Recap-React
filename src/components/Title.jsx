// rafce
const Title = (props) => {
  // JS

  // console.log props ออกมาดูว่าของที่ส่งมาจาก Title เข้ามาไหม
  console.log(props)
  console.log(props.test)
  console.log(props.price)

  // JSX
  return (
    <div>
      Title...{props.test} <br />
      Price = {props.price}
    </div>
  )
}
export default Title