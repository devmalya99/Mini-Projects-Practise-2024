
import { useState } from "react"
function SumCard ({first ,second}){
 

    const headerStyle = {
        color:"orange"
    }

    const fontSize = {
        fontSize: 20

    }

    const [firstNumber,setFirstNumber]=useState(0)
    const [secondNumber,setSecondNumber] = useState(0)

    const [sum,setSum] = useState(0)

    const handleSubmit = (e)=>{
    e.preventDefault();
    let total = Number(firstNumber) + Number(secondNumber)
    setSum(Number(total))
    }

    return(
        <div className="container">
            <header>
                <h1 className="title" style={headerStyle}>Day 1 NeoG</h1>
            </header>

            <main>

                <form 
                className="form"
                onSubmit={handleSubmit}>

                <div className="first-number">
                    <label htmlFor='firstNumber' className="first-Number" style={fontSize}>
                        First Number : 
                    </label>
                    <input 
                     type="number"
                     placeholder={first}
                     id="firstNumber"
                     onChange={(e)=>setFirstNumber(e.target.value)}

                    />
 
                </div>

                <div className="second-number">
                    <label htmlFor='secondNumber' className="second-Number" style={fontSize}>
                        Second Number :
                    </label>
                    <input 
                     type="number"
                     placeholder={second}
                     id="secondNumber"
                     onChange={(e)=>setSecondNumber(e.target.value)}
                    />
                </div>
                <span>
                    <button className="btn" type="submit">Add</button>
                </span>

                

                </form>


                <div className="result">
                   <p>Total <span style={{color:"white"}}>is</span> {sum}</p>

                </div>
                
            </main>
            

        </div>

    )
}


export default SumCard