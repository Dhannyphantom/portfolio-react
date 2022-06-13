import "./App.css";
import Cards from "./components/Card/Cards";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Title from "./components/Title/Title";

function App() {
  return (
    <div className="App">
      <NavBar />
      <h2 className="title">
        Olojo Daniel <br /> Software Developer & UI/UX Designer <br /> Based in
        Nigeria
      </h2>
      <Profile />
      <Title title="Skills and Usage" />
      <Cards />
    </div>
  );
}

export default App;
