import Counter from "./Counter.js";
import Hello from "./Hello.js";
import Check from './Check.js';
function App() {
  const allNames = [  
    "Janis",
    "Tava mamma",
    "Bača" ]

    function App() {
      return (
        <div>
          <h1>LOOOL</h1>
          <Check />
        </div>
      );
    }
    const result = [7 , 43 , 101]
    const namesJSX = allNames.map((name, index) => {
      return <Hello  name={name} key={index} />
    })
    const resultJSX = result.map((value, index) => {
      return <Counter  value={value} key={index} />
    })
    const JSX = .map((value, index) => {
      return <Check value={value} key={index} />
    })
  return (
    <div className="App">
      <Counter></Counter>
      {namesJSX}
      {resultJSX}
     </div>
  );
}
  

export default App;

