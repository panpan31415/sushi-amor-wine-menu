import WinePaperMenu from "./WinePaperMenu";
import { useState } from "react";
import "./App.scss";
import WineDigitalMenu from "./WineDgitalMenu";
import TeaDigitalMenu from "./TeaDigitalMenu";

function Home({ setRoute }) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setRoute("wine_paper_version");
        }}>
        Wine Menu Paper Version
      </button>
      <button
        className="btn"
        onClick={() => {
          setRoute("wine_digital_version");
        }}>
        Wine Menu Digital Version
      </button>
      <button
        className="btn"
        onClick={() => {
          setRoute("tea_digital_version");
        }}>
        Tea Menu Digital Version
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
      case "wine_paper_version": {
        return <WinePaperMenu setRoute={setRoute} />;
      }
      case "wine_digital_version": {
        return <WineDigitalMenu setRoute={setRoute} />;
      }
      case "tea_digital_version": {
        return <TeaDigitalMenu setRoute={setRoute} />;
      }
      default: {
        return <TeaDigitalMenu setRoute={setRoute} />;
      }
    }
  };

  return <div className="App">{selectRoute()}</div>;
}

export default App;
