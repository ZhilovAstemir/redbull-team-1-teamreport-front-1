import './App.css';
import AsideBar from "./components/AsideBar/AsideBar";
import HeaderForGuide from "./components/HeaderForGuide/HeaderForGuide";
import LaunchGuide from "./components/LaunchGuide/LaunchGuide";

function App() {
  return (
    <div className="App">
      <AsideBar/>
      <HeaderForGuide/>
      <LaunchGuide />
    </div>
  );
}

export default App;
