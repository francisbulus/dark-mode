import React from "react";
import Chart from "./Chart";

const Charts = ({ currentCoin, darkMode }) => {
  if (currentCoin) {
    return (
      <div className="charts">
        <div className="chart__container" key={currentCoin.name}>
          <h2 className="coin__title">{currentCoin.name}</h2>
          <h4 className="coin__symbol">{currentCoin.symbol}</h4>
          <div className="coin__logo">
            <img src={currentCoin.image.small} height="40" alt={currentCoin.name} />
          </div>
          <Chart sparklineData={currentCoin.market_data.sparkline_7d.price} darkMode={darkMode} />
        </div>
        )}
      </div>
    );
  }
  else return (
    <div>Nothing</div>
  )
};
export default Charts;
