import Button from "../../custom/Buttons/radiating-button"
import useCounter from "../../hooks/useCounter"
import GlassyButton from "../../custom/Buttons/glassyButton"
const CounterApp = () => {
    const {count,increment,decrement} = useCounter({initialValue:0})
  return (
    <div>
        <p>{count}</p>
        <Button 
        onClick={increment}
        value={"Increment"}
        />
        
        <Button onClick={decrement}
        value={"Decrement"}
        />
        
        <GlassyButton/>


    </div>
  )
}

export default CounterApp