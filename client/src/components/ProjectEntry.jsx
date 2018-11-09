import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal.jsx';
import styles from './styles/ProjectEntry.css';

class ProjectEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project: props.project,
      modalOn: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // componentDidUpdate() {
  //   this.render();
  // }

  openModal() {
    this.setState({
      modalOn: true,
    });
  }

  closeModal(event) {
    event.stopPropagation();
    this.setState({
      modalOn: false,
    });
  }

  render() {
    const { project, modalOn } = this.state;
    console.log(modalOn);
    return (
      <div className={styles.entry} onClick={this.openModal} >
        {modalOn && <Modal project={project} closeModal={this.closeModal} />}
        <figure>
          <img src={project.thumbnailURL} alt={project.title} />
          <figcaption>
            <strong>
              {project.title}
            </strong>
            <p>
              {project.description}
            </p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

ProjectEntry.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectEntry;
