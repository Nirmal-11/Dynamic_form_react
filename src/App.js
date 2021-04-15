import React, { useState } from "react";

import "./App.css";

function App() {
  const [initailData, setInitialData] = useState([
    { firstName: "", lastName: "" },
  ]);
  const handleChange = (e, index) => {
    const values = [...initailData];
    values[index][e.target.name] = e.target.value;
    setInitialData(values);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(initailData);
  };
  const handleAddField = () => {
    setInitialData([...initailData, { firstName: "", lastName: "" }]);
  };
  const handleRemoveField = (index) => {
    const values = [...initailData];
    values.splice(index, 1);
    setInitialData(values);
  };
  return (
    <div className="App">
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {initailData.map((item, index) => {
          return (
            <div key={index}>
              <input
                style={{
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  padding: "6px",
                }}
                type="text"
                name="firstName"
                value={item.firstName}
                onChange={(e) => handleChange(e, index)}
                placeholder="Enter Your First name"
              />
              <input
                style={{
                  marginRight: "1rem",
                  marginBottom: "1rem",
                  padding: "6px",
                }}
                type="text"
                name="lastName"
                value={item.lastName}
                onChange={(e) => handleChange(e, index)}
                placeholder="Enter Your Last name"
              />
              <span
                style={{
                  padding: "6px",
                  marginRight: "1rem",
                  cursor: "pointer",
                }}
                onClick={() => handleRemoveField(index)}
              >
                Delete
              </span>
              <span
                style={{ padding: "6px", cursor: "pointer" }}
                onClick={() => handleAddField()}
              >
                Add
              </span>
            </div>
          );
        })}
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  );
}

export default App;
