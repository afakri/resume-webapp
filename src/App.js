import "./App.css";
import Console from "./components/Console";
import NavBar from "./components/NavBar";
import ProjectSections from "./components/ProjectSections";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <About />

      <NavBar />

      <Console />

      <ProjectSections />
      <Gallery />
      <div className="footer">
        <p>Built {"&"} Designed by Ayman Fakri</p>
        <p>React.js</p>
      </div>
    </>
  );
}

export default App;
