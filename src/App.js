import "./App.css";
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
    </div>
  );
}

export default App;
