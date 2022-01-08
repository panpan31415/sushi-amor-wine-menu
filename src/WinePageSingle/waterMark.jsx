const WaterMark = ({ styles }) => (
  <div
    className="water-mark"
    style={{ backgroundImage: `url(images/logo.png)`, ...styles }}
  />
);

export default WaterMark;
