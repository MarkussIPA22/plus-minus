import {useState} from "react"
export default function Hello(props) {
    const [name, setName] = useState(props.text)
    function handleChange(event) {
        setName(event.target.value)
    }
    return (
        <>
            <input type="text" value={name} onChange={handleChange}></input>
            <p>Hello, {name}!</p>
        </>
    )
}