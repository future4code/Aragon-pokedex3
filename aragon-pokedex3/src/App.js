import Router from "./Router/Router";
import GlobalState from "./global/GlobalState"



function App() {
  return (
    <GlobalState>
      <Router/>
    </GlobalState>
      
  );
}

export default App;
