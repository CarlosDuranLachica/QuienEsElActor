import Routs from "./Routs";

import "./App.css";

import { Provider } from "react-redux";
import generateStore from "./componets/Redux/Store";


function App() {
  const store = generateStore();
  return (
    <div className="App">
      <Provider store={store}>
        <Routs/>
      </Provider>
    </div>
  );
}

export default App;
