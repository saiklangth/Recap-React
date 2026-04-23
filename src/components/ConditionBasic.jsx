const ConditionBasic = () => {
  // JS
  // ทั้งหมดนี่คือ false ที่เหลือ true
  console.log(Boolean(""))
  console.log(Boolean(0))
  console.log(Boolean(null))
  console.log(Boolean(NaN))
  console.log(Boolean(undefined))

  // const user = null || undefined || 'Gao'
  const user = prompt('Enter your name')

  // JSX
  return (
    <div>
      {
        user === "Admin"
          ? <h1>Hello Admin</h1>
          : user === "User"
            ? <h1>Hello User</h1>
            : <h1>Hello Guest</h1>
      }
    </div>
  )
}
export default ConditionBasic