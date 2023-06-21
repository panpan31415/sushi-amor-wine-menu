import "./ContentPage.scss";
import Logo from "./img/logo.svg";

const ContentPage = ({ children }) => {
  return (
    <div className="a4 contentPage">
      <div className="waterMark">
        <img src={Logo} alt="logo" />
      </div>
      {children}
    </div>
  );
};

export default ContentPage;
