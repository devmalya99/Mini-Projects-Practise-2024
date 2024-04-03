

import Data from '../Data'

function AirConditioner(){
    return (
        <div className="air-container">
            {
                Data.map((each)=>{
                    return (
                        <div key={each.id}
                        className='cardLayout'
                        >
                            <h1>{each.name}</h1>
                            <h3>Price : {each.price}</h3>
                            <h3>Brand: {each.brand}</h3>
                            
                            <h3>Specification: {each.specification}</h3>

                        </div>
                    )
                })
 
            }
        </div>
    )
}
export default AirConditioner;