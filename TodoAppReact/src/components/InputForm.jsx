import React, { useState } from "react";

export const InputForm = ({ taskList, setTaskList }) => {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      return;
    }
    // inputに打ち込んだ文字を出力したい
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
      setInputText(""),
    ]);
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button onClick={handleSubmit}>+</button>
      </form>
    </div>
  );
};
