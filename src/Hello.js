import { useState } from "react";

function Hello(props) {
  const [name, setName] = useState(props.name);

  function handleNameChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input  onChange={handleNameChange}></input>
      <h1>Hello, {name}!</h1>
    </div>
  );
}
export default Hello;