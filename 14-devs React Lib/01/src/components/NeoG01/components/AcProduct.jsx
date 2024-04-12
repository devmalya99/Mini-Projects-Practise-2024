

import Data from '../Data'

function AirConditioner(){

    function isCostly(price)
    {
        return  price >=1500 ? 'aqua' : 'lime';
    }
    
    return (
        <div className="air-container">
            {
                Data.map((each)=>{
                    return (
                        <div key={each.id}
                        style={{color: 'black' , backgroundColor: isCostly(each.price)}}
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