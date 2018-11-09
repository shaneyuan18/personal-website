import React from 'react';
import styles from './styles/Modal.css';


const Modal = ({ closeModal, project }) => (
  <div className={styles.modalOverlay} onClick={closeModal}>
    <div className={styles.modal} onClick={stopPropagation}>
      <div className={styles.modalContent}>
        <iframe
          title="project video"
          width="100%"
          height="100%"
          src={project.videoURL}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

const stopPropagation = (event) => {
  event.stopPropagation();
};

export default Modal;
