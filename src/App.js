import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import {Route, Routes} from 'react-router-dom';



const App = (props) => {

 
  return (
  
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
      <Routes>
      <Route path="/profile" element = {<Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
				<Route path="/dialogs/*" element = {<Dialogs state={props.state.dialogsPage}/>}/>
        <Route path="/news" element = {<News />}/>
			</Routes>
      </div>
    </div>
    
    );
}

export default App;
