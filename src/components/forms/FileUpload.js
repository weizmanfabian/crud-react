import React, { useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2";

const UploadAndDisplayImage = ({ loadImage }) => {

  const [file, setFile] = useState();

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("img", file);
    try {
      const res = await axios.post(
        "http://localhost:5000/server/upload",
        formData
      );
      let { err, msg } = res.data;
      alert(err ? err : msg);
      if (!err) {
        document.getElementById("fileinput").value = null;
        setFile(null)
      }
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      {file && (
        <div>
          <img alt="not fount" width={"250px"} src={URL.createObjectURL(file)} />
          <br />
          <button onClick={() => {
            setFile(null);
            document.getElementById("fileinput").value = null;
          }}>Remove</button>
        </div>
      )}
      <br />

      <br />
      <input
        id="fileinput"
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setFile(event.target.files[0]);
        }}
      />
      <button type="submit" className="btn btn-success" onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default UploadAndDisplayImage;