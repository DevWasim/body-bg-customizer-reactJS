import { useState } from "react";

function Body() {
    
    let [color, setColor] = useState("#ffff");

    let changeColor = (evt) => {
        setColor(evt.target.value)
    }



    return(
        <div className="main-div">
            <div className="container" style={{backgroundColor: color}}></div>
            
            <h4>You Pick <span style={{color: color}}>{color}</span> Color</h4>

            <input type="color" onChange={changeColor} value={color}/>
        </div>
    )
}
    


export default Body;


