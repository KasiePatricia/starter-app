import React, { useState } from 'react';
import Modal from './Modal';
import Alert from "./Alert";
import { Tooltip } from "./ToolTip";

const TooltipAlertModal = () => (
  <section className="flex flex-col items-center justify-center gap-5 my-14">
    <Tooltip text="Simple tooltip">
      <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
        Hover me!
      </button>
    </Tooltip>
    <div className="p-4">
      <Alert type="info" message="This is an info alert!" />
      <Alert type="warning" message="This is a warning alert!" />
      <Alert type="error" message="This is an error alert!" />
    </div>
    <ModalComponent />
  </section>
);


const ModalComponent: React.FC = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <div className="p-8">
      <button
        onClick={() => setModalVisible(true)}
        className="px-4 py-2 text-white bg-blue-500 rounded-md"
      >
        Click Here
      </button>

      <Modal
        isVisible={isModalVisible}
        title="Modal Title"
        content={<p className="text-black">Add your content here</p>}
        footer={
          <button
            onClick={() => setModalVisible(false)}
            className="px-4 py-2 bg-gray-300 rounded-md"
          >
            Close
          </button>
        }
        onClose={() => setModalVisible(false)}
        />
    </div>
  );
};

export default TooltipAlertModal;
