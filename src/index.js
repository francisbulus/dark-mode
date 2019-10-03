import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Form from "./components/Form";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";

import "./styles.scss";

const App = () => {
  const [coinData, setCoinData] = useState([]);
  const [currentID, setCurrentID] = useState("bitcoin");
  const [currentCoin, setCurrentCoin] = useState();

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/"+currentID+"?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true&vs_currency=usd")
      .then(res => {
        setCurrentCoin(res.data);
      })
      .catch(error => console.log(error));
  }, [currentID]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => {
        setCoinData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  },[]);


  return (
    <div className="App">
      <Navbar />
      <Form
        coinData={coinData}
        setCurrentCoin={setCurrentCoin}
        currentID={currentID}
        setCurrentID={setCurrentID}
      />
      <Charts currentCoin={currentCoin} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
