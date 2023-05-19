// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Searchbar from "./components/Headers/searchbar";
import { SideNav } from "./components/Sidebar/SideNav";

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <SideNav/>
    </div>
  );
}

export default App;
