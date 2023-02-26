import Nav from "./component/nav/Nav";
import UserStore from "./context/userContext";
import Front from "./pages/Front";

function App() {
  return (
    <div className="App">
    <UserStore>
      <Front />
    </UserStore>

    </div>
  );
}

export default App;
