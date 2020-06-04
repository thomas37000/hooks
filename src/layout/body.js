import React from 'react';
import styles from './App.css';

export default function loader(){
  document.querySelector('.loader-container')
  .classList.add('hidden');
  
  return (
    <div class="loader-container">
        <div class="loader"></div>
    </div>
  );
}

setTimeout(loader, 100);

