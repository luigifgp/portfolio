import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar/Sidebar';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    //TODO DARKMODE bg-slate-200 dark:
    <div className=" bg-DarkModelight ">
      <SideBar />
      <div className="ml-16 xl:ml-52 transition-all">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
