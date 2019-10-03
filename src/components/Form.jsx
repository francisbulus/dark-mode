import React, { useEffect} from "react";
import axios from 'axios';

const Form = ({ coinData, setCurrentID, currentId }) => {

  const onChange = e => {
    e.preventDefault()
    e.target.value !== "Select a coin!"
      ? setCurrentID(e.target.value)
      : setCurrentID("bitcoin");
  };

  
  return (
    <form>
      <select value = {currentId} onChange={onChange}>
        {coinData.map(coin => (
          <option key={coin.id} value={coin.id}>{coin.name}</option>
        ))}
      </select>
    </form>
  );
};

export default Form;
