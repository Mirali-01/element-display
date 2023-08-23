import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    async function fetchElements() {
      try {
        const response = await axios.get("http://localhost:5000/api/elements");
        setElements(response.data);
      } catch (error) {
        console.error("Error fetching elements:", error);
      }
    }

    fetchElements();
  }, []);

  return (
    <div>
      <h1>Backend Element</h1>
      {elements ? (
        <pre>{JSON.stringify(elements, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}{" "}
    </div>
  );
}

export default App;
