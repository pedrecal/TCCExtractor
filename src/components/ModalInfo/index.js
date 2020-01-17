import React, { useState } from 'react';
import { Modal } from 'antd';

export default function ModalInfor({ isVisible }) {
  const [visible, setVisible] = useState(isVisible);

  const handleOk = e => {
    console.log(e);
    setVisible(false);
  };
  return (
    <div>
      <Modal title="Basic Modal" visible={visible} onOk={handleOk}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
}
