import React, { useEffect } from "react";
import { request, gql } from "graphql-request";

function App() {
  const query = gql`
    {
      _
    }
  `;

  useEffect(() => {
    request("http://localhost:4000", query).then((data) => console.log(data));
  }, [query]);

  return (
    <div className="app">
      <h1>Upload File</h1>
    </div>
  );
}

export default App;
