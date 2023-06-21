import Logo from "./img/logo.svg";
import "./CoverPage.scss";
const CoverPage = () => {
  return (
    <div className="a4 coverPage">
      <img className="logo" src={Logo} alt="logo" />
      <div className="titleContainer">
        <p>Sushi Amor Taastrup</p>
        <p>drikkevarer og desserter</p>
      </div>
    </div>
  );
};

export default CoverPage;
