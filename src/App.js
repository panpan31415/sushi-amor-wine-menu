import WinePaperMenu from "./WinePaperMenu";
import { useState } from "react";
import "./App.scss";
import WineDigitalMenu from "./WineDgitalMenu";
import TeaDigitalMenu from "./TeaDigitalMenu";
import PriceListOnProjector from "./WinePageSingle/pricelistProjector";
import DesertsAndDrinks from "./DesertsAndDrinks";

function Home({ setRoute }) {
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setRoute("wine_paper_version");
        }}
      >
        Wine Menu Paper Version
      </button>
      <button
        className="btn"
        onClick={() => {
          setRoute("wine_digital_version");
        }}
      >
        Wine Menu Digital Version
      </button>
      <button
        className="btn"
        onClick={() => {
          setRoute("tea_digital_version");
        }}
      >
        Tea Menu Digital Version
      </button>
      <button
        className="btn"
        onClick={() => {
          setRoute("price_list_on_projector");
        }}
      >
        wine on projector
      </button>
      <button
        className="btn"
        onClick={() => {
          setRoute("drinks_deserts");
        }}
      >
        Drinks and Deserts
      </button>
    </div>
  );
}

function App() {
  const [route, setRoute] = useState("home");
  const selectRoute = (route) => {
    const _route = "drinks_deserts";
    switch (_route) {
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
      case "price_list_on_projector": {
        return <PriceListOnProjector setRoute={setRoute} />;
      }
      case "drinks_deserts": {
        return <DesertsAndDrinks setRoute={setRoute} />;
      }
      default: {
        return <DesertsAndDrinks setRoute={setRoute} />;
      }
    }
  };

  return <div className="App">{selectRoute(route)}</div>;
}

export default App;
