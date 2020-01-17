import React, { useState } from 'react'

import { Upload, Button, Progress } from 'antd';
import api from '../../services/api';
import axios from 'axios'

const SubmitFile = () => {
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const uploadFile = async options => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: {
      "content-type": "multipart/form-data",
      'authtoken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGY1NzA4ZGU4MDhhZDJiMjNmNjhjNWYiLCJpYXQiOjE1NzkyODcwOTQsImV4cCI6MTU3OTMwNTA5NH0.-ZepgApnWJEmCD-G-osWw9rcoxFq7ilerpNJJat6fGo"
    },
      onUploadProgress: event => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      }
    };
    fmData.append("pdfFile", file);
    fmData.append("docType", "TCC");
    try {
      const res = await api.post(
        "/postFile",
        fmData,
        config
      );

      onSuccess("Ok");
      console.log("server res: ", res);
    } catch (err) {
      console.log("Eroor: ", err);
      const error = new Error("Some error");
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }) => {
    // console.log(file, fileList, event);
    //Using Hooks to update the state to the current filelist
    setDefaultFileList(fileList);
    //filelist - [{uid: "-1",url:'Some url to image'}]
  };

  const props = {
    accept: '.pdf',
    listType: 'text',
    multiple: true,
  }

  return (
    <div className="container">
      <Upload
        {...props}
        customRequest={uploadFile}
        onChange={handleOnChange}
        defaultFileList={defaultFileList}
      >
        {defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
      </Upload>
      {progress > 0 ? <Progress percent={progress} /> : null}
    </div>
  );
};

export default SubmitFile;