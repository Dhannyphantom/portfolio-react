import "./App.css";
import Cards from "./components/Card/Cards";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="title">
        Olojo Daniel <br /> Software Developer & UI/UX Designer <br /> Based in
        Nigeria
      </h2>
      <Profile />
      <h2 className="title">My Skills and Tech</h2>
      <Cards />
    </div>
  );
}

export default App;
