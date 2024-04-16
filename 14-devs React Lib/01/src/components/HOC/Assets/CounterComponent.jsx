import Button from '../../../custom/Buttons/radiating-button'
const CounterComponent =({count,increment})=>{

    return (
        <div>
            <p>Count is {count}</p>
        <Button  onClick={increment} 
        value={"Increment"}/>
        </div>

    )
}
export default CounterComponent;