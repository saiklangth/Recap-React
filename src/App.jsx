import BasicUseReducer from "./components/BasicUseReducer"
import BasicUseReducer2 from "./components/BasicUseReducer2"
import ConditionBasic from "./components/ConditionBasic"
import FetchBasic from "./components/FetchBasic"
import FormInput from "./components/FormInput"
import ListBasic from "./components/ListBasic"
import UseEffectBasic from "./components/UseEffectBasic"

const App = () => {
  // JS
  const users = [
    { id: 1, name: 'Gao' },
    { id: 2, name: 'Dev' },
  ]
  // JSX
  return (
    <>
      {/* <FormInput />
      <ListBasic users={users} />
      <UseEffectBasic />
      <FetchBasic />
      <ConditionBasic />
      <BasicUseReducer /> */}
      <BasicUseReducer2 />
    </>
  )
}
export default App