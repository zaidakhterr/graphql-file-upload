import React from "react";

import { gql, useMutation } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    singleUpload(file: $file) {
      filename
    }
  }
`;

function App() {
  const [uploadFile, { data, error }] = useMutation(UPLOAD_FILE);

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
      {data && <p>File Uploaded Susscefully ✅</p>}
      {error && <p>File Upload Failed 💔</p>}
    </div>
  );
}

export default App;
