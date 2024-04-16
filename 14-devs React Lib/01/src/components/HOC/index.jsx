import Hoc from './Assets/Hoc'
import CounterComponent from './Assets/CounterComponent'
const CounterHOC =()=>{
  const MyComp = Hoc(CounterComponent)
 
  return (
    <div>
        <h1>Higher order Component </h1>
        <MyComp />

    </div>
  )
}

export default CounterHOC