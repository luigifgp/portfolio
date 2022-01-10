import React, { useEffect } from "react";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from './pages/AboutPage/AboutPage';
import SkillsPage from "./pages/SkillsPage/SkillsPage";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    //TODO DARKMODE bg-slate-200 dark:
    <main className=" ">
      <SideBar />
      <BrowserRouter>
        <div className="ml-4 xl:ml-52 transition-all">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
