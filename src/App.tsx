
import "./styles/App.css";
import Landing from "./views/Landing";
import Dash from "./views/Dash";
import { useAppSelector } from "./app/hooks";
import { selectCount } from "./features/counter/counterSlice";

const marks = [
  { value: 20, label: "20%" },
  { value: 50, label: "50%" },
  { value: 80, label: "80%" },
];

function App() {
  const count = useAppSelector(selectCount)
  
  
  return (
    <div className="App">
       <Landing />
      <Dash />
    </div>
  );
}

export default App;
