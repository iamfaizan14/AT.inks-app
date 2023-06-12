// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Searchbar from './components/Headers/searchbar'
import {SideNav} from './components/Sidebar/SideNav'
import MainCart from "./components/MainCart/MainCart";
function App() {
  return (
    <div className="App">
      <Searchbar />
      <div style={{height:"80vh"}} className="d-flex">
        <SideNav />
        <MainCart />
      </div>
    </div>
  );
}

export default App;
