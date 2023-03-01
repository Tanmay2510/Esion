import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Dash from "./component/Dashboard/Dash";
import Front from "./pages/Front";
import PrivateRoute from "./util/PrivateRoute";


function App() {
  
  return (
    <div >
    <Routes>
      <Route element={<PrivateRoute />} >
      {/* Protect all those route that are in here  */}
        <Route element={<Dash />} path="/Dash"></Route>
      </Route>
      <Route  exact path="/" element={<Front />}></Route>
    </Routes>

    </div>


  );
}

export default App;
