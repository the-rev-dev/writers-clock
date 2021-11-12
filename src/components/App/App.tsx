import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from '../HomePage/HomePage';
import { GamePage } from '../GamePage/GamePage';
import { AppHeader } from '../AppHeader/AppHeader';
// import { AppFooter } from '../AppFooter/AppFooter';

export const App: React.FC<{}> = () => {

  return (
    <div className="App" style={{height: "90vh"}}>
      <AppHeader />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />}/>

      </Routes>

      {/* <AppFooter /> */}
    </div>
  );
}