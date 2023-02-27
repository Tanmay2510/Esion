import { BrowserRouter as Router , Route, Routes} from "react-router-dom";
import Dash from "./component/Dashboard/Dash";
import UserStore from "./context/userContext";
import Front from "./pages/Front";
import PrivateRoute from "./util/PrivateRoute";


function App() {
  return (
    <div >
    <UserStore>
    <Routes>
      <Route element={<PrivateRoute/>} >
      {/* Protect all those route that are in here  */}
        <Route element={<Dash />} path="/Dash"></Route>
      </Route>
      <Route  exact path="/" element={<Front />}></Route>
    </Routes>

    </UserStore>
    </div>


  );
}

export default App;
