import { useState } from "react"

function Hello () {
    const [name, setName] =useState(0)

    function getName () {
        setName(name)
    }

    function handleChange(event){ 
    setName(event.target.value)
    }

    return (
<div>
<input

type="string"



></input>
</div>

    )
 

}


export default Hello;


