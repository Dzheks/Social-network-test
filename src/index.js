import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
  { id: 1, message: 'Hi, how are you' , likesCount: 25},
  { id: 2, message: 'It\'s my first post', likesCount: 55},
  { id: 2, message: 'БЛАБЛА', likesCount: 155},
  { id: 2, message: 'It\'s my first post', likesCount: 55},
  { id: 2, message: 'Hi, how are you', likesCount: 155}
]
let dialogs = [
  { id: 1, name: 'Evgeniy' },
  { id: 2, name: 'Irina' },
  { id: 3, name: 'Nadeaya' }
]
let messages = [
  { id: 1, message: 'Привет' },
  { id: 2, message: 'Yo' },
  { id: 3, message: 'How is your it-kamasutra?' },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
