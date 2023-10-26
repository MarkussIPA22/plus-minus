
import Counter from "./Counter"
import Hello from "./Hello"
function App() {
  const names = ["Janis", "Jazeps", "Ozols"]
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Counter ></Counter>
      {names.map((item, i)=>{
        return <Hello key={i} text={item}></Hello>
      })}
    </div>
  );
}

export default App;
