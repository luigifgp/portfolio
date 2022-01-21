import React from "react";
import Letter from "../../components/AnimatedLetter";

const SkillsTitle: React.FunctionComponent = () => {
  return (
    <div className=" mb-3 ">
      <Letter letter="M" className="text-OrangeColor " duration={1000} />
      <Letter letter="y" className=" text-OrangeColor" duration={1050} />
      <Letter
        letter="S"
        className="pl-4 md:pl-8 text-OrangeColor"
        duration={1100}
      />
      <Letter letter="k" className="text-OrangeColor" duration={1150} />
      <Letter letter="i" className="text-OrangeColor" duration={1200} />
      <Letter letter="l" className=" text-OrangeColor" duration={1250} />
      <Letter letter="l" className="text-OrangeColor" duration={1300} />
      <Letter letter="s" className="text-OrangeColor" duration={1350} />
    </div>
  );
};
export default SkillsTitle;
