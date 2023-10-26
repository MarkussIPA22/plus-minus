import styles from "./Counter.module.css"
import {useState} from "react"
import { CounterButton, CounterInput } from "./Components" 
export default function Counter() {
    const [number, setNumber] = useState(0)
    const [multiplier, setMultiplier] = useState(1)
    const [calcNumber, setCalcNumber] = useState(1)
    function plus() {
        setNumber(number + parseInt(calcNumber))
    }
    function minus() {
        setNumber(number - parseInt(calcNumber))
    }
    function multiply() {
        setNumber(number * multiplier)
    }
    function handleChangeNumber(event) {
        setCalcNumber(event.target.value)
    }
    function handleChangeMultiplier(event) {
        setMultiplier(event.target.value)
    }
    return (
        <div className={styles.main}>
            <CounterInput value={calcNumber} onChange={handleChangeNumber}></CounterInput>
            <CounterButton onClick={plus} text={"+ " + calcNumber}></CounterButton>
            <CounterButton onClick={minus} text={"- " + calcNumber}></CounterButton>
            <CounterInput value={multiplier} onChange={handleChangeMultiplier}></CounterInput>
            <CounterButton onClick={multiply} text={"* " + multiplier}></CounterButton>
            <h2 className={styles.h2}>{number}</h2>
        </div>
    );
}