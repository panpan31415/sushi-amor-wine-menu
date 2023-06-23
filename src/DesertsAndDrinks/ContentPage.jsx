import "./ContentPage.scss";
import Logo from "./img/logo.svg";

const ContentPage = ({ children }) => {
  return (
    <div className="a4 contentPage">
      <div className="waterMark">
        <img src={Logo} alt="logo" />
      </div>
      <div className="listContainer">{children}</div>
    </div>
  );
};

export default ContentPage;
