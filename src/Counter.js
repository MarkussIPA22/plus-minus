import { useState } from "react"
function Counter () {
    const [result, setResult] =useState(0)
const [Multiplier, setMultiplier] = useState(1);


    function addOne() {
        
        console.log("Funkcija Izsaukta")
 setResult( result + 1);
 console.log("x vertiba ir" + result)

    }

    function takeOne() {
        
        console.log("Funkcija Izsaukta")
 setResult (result -1);
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
return (
    <div>
        <button onClick={addOne}> +1</button>
        <button onClick={takeOne}> -1</button>
       <input type ="number" value={Multiplier} onChange ={handleChange} /> 
       <button onClick={multiply}> Multiply</button>
        <h1>{result}</h1>
    </div>
);
}

export default Counter;