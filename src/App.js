import React from 'react';
import Routter from './Router';
import styles from './App.css';

function loader(){
  document.querySelector('.loader-container')
  .classList.add('hidden');
}

setTimeout(loader, 100);

function App() {
  return (
    <div className={styles.App}>
      <div class="loader-container">
          <div class="loader"></div>
      </div>
      <Routter />
    </div>
  );
}

export default App;
