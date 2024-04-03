import { useState } from "react"
import "./style.css"

const index = ()=>{

    const [firstNumber,setFirstNumber]=useState(0)
    const [secondNumber,setSecondNumber] = useState(0)

    const [sum,setSum] = useState(0)

    const handleSubmit = (e)=>{
    e.preventDefault();
    let total = Number(firstNumber) + Number(secondNumber)
    setSum(Number(total))
    }



    return (
        <div className="container">
            <header>
                <h1 className="title">Day 1 NeoG</h1>
            </header>

            <main>

                <form 
                className="form"
                onSubmit={handleSubmit}>

                <div className="first-number">
                    <label htmlFor='firstNumber' className="first-Number">
                        First Number : 
                    </label>
                    <input 
                     type="number"
                     placeholder="Enter First Number"
                     id="firstNumber"
                     onChange={(e)=>setFirstNumber(e.target.value)}

                    />
 
                </div>

                <div className="second-number">
                    <label htmlFor='secondNumber' className="first-Number">
                        Second Number :
                    </label>
                    <input 
                     type="number"
                     placeholder="Enter second Number"
                     id="secondNumber"
                     onChange={(e)=>setSecondNumber(e.target.value)}
                    />
                </div>
                <span>
                    <button className="btn" type="submit">Add</button>
                </span>

                

                </form>


                <div className="result">
                   <p>Total is {sum}</p>

                </div>
                
            </main>
            

        </div>
    )
}

export default index