import WinePaperMenu from "./WinePaperMenu";
import { useState } from "react";
import "./App.scss";
import WineDigitalMenu from "./WineDgitalMenu";

function Home({ setRoute }) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setRoute("paper_version");
        }}>
        Paper Version
      </button>
      <button
        className="btn"
        onClick={() => {
          setRoute("digital_version");
        }}>
        Digital Version
      </button>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState("home");
  const selectRoute = () => {
    switch (route) {
      case "home": {
        return <Home setRoute={setRoute} />;
      }
      case "paper_version": {
        return <WinePaperMenu setRoute={setRoute} />;
      }
      case "digital_version": {
        return <WineDigitalMenu setRoute={setRoute} />;
      }
      default: {
        return <WineDigitalMenu setRoute={setRoute} />;
      }
    }
  };

  return <div className="App">{selectRoute()}</div>;
}

export default App;
