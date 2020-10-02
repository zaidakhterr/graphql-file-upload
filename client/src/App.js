import React, { useEffect } from "react";

import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

function App() {
  const [uploadFile] = useMutation(UPLOAD_FILE);

  function onChange({
    target: {
      validity,
      files: [file],
    },
  }) {
    if (validity.valid)
      uploadFile({ variables: { file } })
        .then((res) => console.log(res))
        .catch((err) => console.log({ err }, err.type, err.message));
  }

  return (
    <div className="app">
      <h1>Upload File</h1>
      <input type="file" required onChange={onChange} />
    </div>
  );
}

export default App;
