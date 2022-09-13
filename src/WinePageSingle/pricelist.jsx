import "./index.scss";
import WaterMark from "./waterMark";
const PriceList = () => (
  <div className="wine-page-single">
    <WaterMark />
    <div className="price-list">
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/1.png")` }}
        />
        <label>1</label>
        <p>75 cl: 199kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/2.png")` }}
        />

        <label>2</label>
        <p>75 cl: 189kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/3.png")` }}
        />
        <label>3</label>
        <p>75 cl: 259kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/4.png")` }}
        />
        <label>4</label>
        <p>75 cl: 219kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/5.png")` }}
        />
        <label>5</label>
        <p>75 cl: 389</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/6.png")` }}
        />
        <label>6</label>
        <p>75 cl: 179kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/7.png")` }}
        />
        <label>7</label>
        <p>75 cl: 219kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/8.png")` }}
        />
        <label>8</label>
        <p>180 ml: 138kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/9.png")` }}
        />
        <label>9</label>
        <p>180 ml: 138kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/10.png")` }}
        />
        <label>10</label>
        <p>180 ml: 228kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/mini_white.png")` }}
        />
        <label>11</label>
        <p>18.75 cl: 58kr</p>
      </div>
      <div className="price-list-item">
        <div
          className="price-list-item__img"
          style={{ backgroundImage: `url("images/wines/mini_red.png")` }}
        />
        <label>12</label>
        <p>18.75 cl: 58kr</p>
      </div>
    </div>
  </div>
);

export default PriceList;
