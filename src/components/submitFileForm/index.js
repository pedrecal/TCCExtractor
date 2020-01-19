import React, { useState } from 'react'

import { Upload, Button, Progress } from 'antd';
import {UploadOutlined} from '@ant-design/icons'
import api from '../../services/api';

const SubmitFile = () => {
  const [defaultFileList, setDefaultFileList] = useState([]);
  const [progress, setProgress] = useState(0);

  const uploadFile = async options => {
    const { onSuccess, onError, file, onProgress } = options;

    const fmData = new FormData();
    const config = {
      headers: {
      "content-type": "multipart/form-data",
      'authtoken': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZGY1NzA4ZGU4MDhhZDJiMjNmNjhjNWYiLCJpYXQiOjE1Nzk0NDU5NzIsImV4cCI6MTU3OTQ2Mzk3Mn0.WmtVGWD_kdzGuKb5nxCK_EXFXPRsntIEmtP0sWQYnJY"
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
    <div>
      <div>Aqui são feitos os uploads dos arquivos de TCC, e automaticamente extraídos os dados. O resultado da extração pode ser visualizado na aba de Informações extraçãoidas</div>
      <br></br>
      <Upload
        {...props}
        customRequest={uploadFile}
        onChange={handleOnChange}
        defaultFileList={defaultFileList}
      >
        {/* {defaultFileList.length >= 1 ? null : <div>Upload Button</div>} */}
        <Button>
          <UploadOutlined /> Upload
        </Button>
      </Upload>
      {progress > 0 ? <Progress percent={progress} /> : null}
    </div>
  );
};

export default SubmitFile;