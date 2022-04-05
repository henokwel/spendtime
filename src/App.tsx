import "./styles/App.css";
import { useAppSelector } from "./app/hooks";
import { authStatus } from "./app/auth";
import Landing from "./features/landing/Landing";
import Dash from "./features/dash/Dash";


function App() {
  const auth = useAppSelector(authStatus).isSubmited;

  return (
    <div className="App">
      {!auth && <Landing />}
      {auth && <Dash />}
    </div>
  );
}

export default App;
