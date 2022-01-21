import React from "react";

import Letter from "../../components/AnimatedLetter";

const ProjectTittle: React.FunctionComponent = () => {
  return (
    <div className="cursor-pointer">
      <Letter letter="P" className="text-OrangeColor " duration={1000} />
      <Letter letter="r" className="text-OrangeColor" duration={1050} />
      <Letter letter="o" className="text-OrangeColor" duration={1150} />
      <Letter letter="j" className="text-OrangeColor" duration={1200} />
      <Letter letter="e" className="text-OrangeColor" duration={1250} />
      <Letter letter="c" className=" text-OrangeColor" duration={1300} />
      <Letter letter="t" className="text-OrangeColor" duration={1350} />
      <Letter letter="s" className=" text-OrangeColor" duration={1400} />
    </div>
  );
};

export default ProjectTittle;
