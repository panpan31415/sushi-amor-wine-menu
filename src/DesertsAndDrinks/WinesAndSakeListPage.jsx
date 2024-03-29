import { AiOutlineFire } from "react-icons/ai";
import wines from "../wines";
import ContentPage from "./ContentPage";
import "./WinesAndSakeList.scss";
import { IoSnowOutline } from "react-icons/io5";

const VItem = ({
  imageUrl,
  price,
  name,
  systemLabel,
  canBeHeated,
  canBeChilled,
  volume,
}) => {
  return (
    <div className="vItem">
      <div className="systemLabel">{systemLabel}</div>
      <img src={imageUrl} alt={name} />
      <p>{volume}</p>
      <p>{price}</p>
      {canBeHeated && (
        <div className="wineAttribute" style={{ bottom: "20mm" }}>
          <AiOutlineFire size={"10mm"} color="currentColor" />
        </div>
      )}
      {canBeChilled && (
        <div className="wineAttribute" style={{ bottom: "30mm" }}>
          <IoSnowOutline size={"10mm"} color="currentColor" />
        </div>
      )}
    </div>
  );
};

const WinesAndSakeList = () => {
  return (
    <ContentPage>
      <div className="listContainer">
        <h2 className="wineListTitle">vine og sake</h2>
        <div className="itemContainer">
          {wines.map((wine) => {
            return (
              <VItem
                key={wine.systemLabel}
                imageUrl={wine.imageUrl}
                price={wine.price}
                name={wine.name}
                systemLabel={"V" + wine.systemLabel}
                canBeHeated={wine.canBeHeated}
                canBeChilled={wine.canBeChilled}
                volume={wine.volume}
              />
            );
          })}
        </div>
      </div>
    </ContentPage>
  );
};

export default WinesAndSakeList;
