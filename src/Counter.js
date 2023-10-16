import { useState } from "react"
function Counter () {
    const [result, setResult] =useState(0)

    function addOne() {
        console.log("Funkcija Izsaukta")
 setResult( result + 1);
 setResult (result -1)
 console.log("x vertiba ir" + result)
 console.log("x vertiba ir" - result)
    }

return (
    <div>
        <button onClick={addOne}> +1</button>
        <button onClick={addOne}> -1</button>
        <h1>{result}</h1>
    </div>
);
}

export default Counter;