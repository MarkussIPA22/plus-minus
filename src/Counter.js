import { useState } from "react"
function Counter (props) {
    const [result, setResult] =useState(props.value)
const [Multiplier, setMultiplier] = useState(1);
const [delta, setDelta] = useState(1);

    function addDelta() {
        
        console.log("Funkcija Izsaukta")
 setResult( result + delta);
 console.log("x vertiba ir" + result)

    }

    function takeDelta() {
        
        console.log("Funkcija Izsaukta")
 setResult (result - delta);
 console.log("x vertiba ir" - result)
    }

    function multiply () {
        setResult (result * Multiplier)
    }
   
    function handleChange  (event) {
        setMultiplier(event.target.value);
    }


    function multiply() {
        
        console.log("reiz")
 setResult( result * Multiplier);
 console.log("x vertiba ir" * result)

    }



   function handlDelta(event) {
setDelta(parseInt(event.target.value));
   }


return (
    <div>
        <input type='number' value={delta} onChange={handlDelta}></input>
<button onClick={addDelta}> {delta}</button>
<button onClick={takeDelta}> {delta}</button>
       <input type ="number" value={Multiplier} onChange ={handleChange} /> 
       <button onClick={multiply}> Multiply</button>
        <h1>{result}</h1>
    </div>
);
}

export default Counter;