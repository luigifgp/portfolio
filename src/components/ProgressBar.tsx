import React from 'react';

interface progressBar {
  title: string;
  width: string;
  color: string;
}


const ProgressBar: React.FunctionComponent<progressBar> = (props) => {
  return (
    <div className="">
      <p className=" text-white lg:text-2x1 text-sm"> {props.title} </p>
      <div className=" bg-gray-200 h-1 mb-6 rounded-xl">
        <div
          className={` ${props.color} h-1 rounded-xl animate-growHorizontal origin-left`}
          style={{ width: `${props.width}` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;