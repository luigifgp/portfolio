import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import SideBar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import SkillsPage from "./pages/SkillsPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import "./App.css";

const App: React.FunctionComponent = () => {
  return (
    //TODO DARKMODE bg-slate-200 dark:
    <main className="grid  ">
      <div className="justify-self-end mr-40 -mt-2 opacity-30 w-1/5 h-4/5 absolute bg-PurpleColor rounded-lg  z-[0] animate-growVertical origin-top" />
      <div className="justify-self-start ml-2 mt-32 opacity-20 w-1/5 h-5/6 absolute bg-PurpleColor rounded-lg  z-[0]  animate-growVertical origin-bottom " />
      <div className=" justify-self-end mt-48 opacity-10 w-10/12 h-2/4 absolute bg-PurpleColor rounded-lg  z-[0] animate-growHorizontal origin-right" />

      <SideBar />
      <BrowserRouter>
        <div className="ml-4 xl:ml-52 transition-all z-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="skills" element={<SkillsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="projects" element={<ProjectPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
};

export default App;
