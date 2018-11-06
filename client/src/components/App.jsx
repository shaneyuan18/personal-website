import React from 'react';
import Header from './Header.jsx';
import Sidebar from './SideBar.jsx';
import Content from './Content.jsx';
import styles from './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={styles.app}>
        <Header />
        <Sidebar />
        <Content />
      </div>
    );
  }
}

export default App;
