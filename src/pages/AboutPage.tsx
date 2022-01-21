import React, { useState, useEffect } from "react";
import AboutTitle from "./AboutPageCompt/AboutPage_Title";



const AboutPage: React.FunctionComponent = () => {

  return (
    // ToDo darkmode
    <div className=" aboutpage ">
      <div className="xl:pt-20  ">
        <AboutTitle />
        <div className="grid gap-6">
          <p className="content ">
            Hardworking self learning Fullstack Developer, Bringing forth a
            motivated attitude and a variety of powerful skills. I'm hungry to
            learn about new technologies and always want to find the right tool
            for the job, even if that means stepping into the unknown.
          </p>
          <p className="content">
            I'm obsessed to be well-organised and also dedicated to providing
            quality care for ultimate customer satisfaction. Proven ability to
            establish and maintain excellent communication and relationships
            with clients.
          </p>
        </div>
      </div>
      <img
        className=" grid w-[900px] rounded-full animate-growWidth"
        src="img/developer-2.gif"
        alt=""
      />
    </div>
  );
};

export default AboutPage;
