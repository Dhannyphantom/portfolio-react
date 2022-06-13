import "./App.css";
import Cards from "./components/Card/Cards";
import History from "./components/History/History";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Separator from "./components/Separator/Separator";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="title">
        Olojo Daniel <br /> Software Developer & UI/UX Designer <br /> Based in
        Nigeria
      </h2>
      <Profile />
      <Cards />
      <Separator />
      <History />
    </div>
  );
}

export default App;
