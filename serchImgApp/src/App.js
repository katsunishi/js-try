import React, { useState, useRef } from "react";
import "./App.css";
import ImageGarally from "./ImageGarally";

function App() {
  const [fetchDate, setFetchDate] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    // APIURL
    const endpointURL = `https://pixabay.com/api/?key=35153110-db8d4c5d33b1c681637d6020a&q=${ref.current.value}&image_type=photo`;
    // APIを叩く
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchDate(data.hits);
      });
  };

  return (
    <div className="container">
      <h2>My Pixabay</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder="画像を検索する" ref={ref} />
      </form>
      <ImageGarally fetchDate={fetchDate} />
    </div>
  );
}

export default App;
