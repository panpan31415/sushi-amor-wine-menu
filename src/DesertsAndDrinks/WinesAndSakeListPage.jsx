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
}) => {
  return (
    <div className="vItem">
      <div className="systemLabel">{systemLabel}</div>
      <img src={imageUrl} alt={name} />
      <p>{price}</p>
      {canBeHeated && (
        <div className="wineAttribute" style={{ bottom: "20mm" }}>
          <AiOutlineFire size={"10mm"} color="white" />
        </div>
      )}
      {canBeChilled && (
        <div className="wineAttribute" style={{ bottom: "30mm" }}>
          <IoSnowOutline size={"10mm"} color="white" />
        </div>
      )}
    </div>
  );
};

const WinesAndSakeList = () => {
  return (
    <ContentPage>
      <div className="listContainer">
        <h2 className="listTitle">vine og sake</h2>
        <div className="itemContainer">
          {wines.map((wine) => {
            return (
              <VItem
                key={wine.systemLabel}
                imageUrl={wine.imageUrl}
                price={wine.price}
                name={wine.name}
                systemLabel={wine.systemLabel}
                canBeHeated={wine.canBeHeated}
                canBeChilled={wine.canBeChilled}
              />
            );
          })}
        </div>
      </div>
    </ContentPage>
  );
};

export default WinesAndSakeList;
