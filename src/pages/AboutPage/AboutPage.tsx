import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Letter from "../HomePage/Letter";

const AboutPage: React.FunctionComponent = () => {
  const [message, setMessage] = useState<string>("");

  return (
    // ToDo darkmode
    <div className="grid grid-flow-col">
      <div className="aboutpage">
        <div className=" ">
          <Letter letter="A" className="" />
          <Letter letter="b" className="" />
          <Letter letter="o" className="" />
          <Letter letter="u" className="" />
          <Letter letter="t" className="" />
          <Letter letter="m" className="pl-4 md:pl-8" />
          <Letter letter="e" className="" />
        </div>

        <p className=" lg:text-xl  md:text-md  text-sm text-white !font-normal">
          Hardworking self learning Fullstack Developer, Bringing forth a
          motivated attitude and a variety of powerful skills. I'm hungry to
          learn about new technologies and always want to find the right tool
          for the job, even if that means stepping into the unknown.
        </p>
        <p className="lg:text-xl  md:text-md  text-sm text-white !font-normal ">
          I'm obsessed to be well-organised and also dedicated to providing
          quality care for ultimate customer satisfaction. Proven ability to
          establish and maintain excellent communication and relationships with
          clients.
        </p>
      </div>
      <img src="img/developer-2.gif" alt="" />
    </div>
  );
};

export default AboutPage;
