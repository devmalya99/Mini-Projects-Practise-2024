
import AirConditioner from "./components/AcProduct"
import SumCard from "./components/SumCard"
import "./style.css"


const index = ()=>{
    return (
        <>
        <SumCard first={10} second={20}/>
        <AirConditioner/>
        </>
        
    )
}

export default index