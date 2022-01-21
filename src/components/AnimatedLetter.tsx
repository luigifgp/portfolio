import React, {useState} from 'react';
import { Animated } from "react-animated-css";

interface letter {
    letter: string;
    className: string;
    duration: number;
}

const Letter:React.FunctionComponent<letter> = (props) => {
  const [activeLetter, setActiveLetter] = useState<boolean>(false);

  const active = activeLetter ? "animate-wiggle" : "";

  

  return (
    <span
      onMouseEnter={() => setActiveLetter(!activeLetter)}
      onMouseLeave={() =>
        setTimeout(() => {
          activeLetter && setActiveLetter(!activeLetter);
        }, 10000)
      }
      className={`homepage_presatation noselect
          ${props.className} ${active}`}
    >
      <Animated
        animationIn="bounceIn"
        animationOut="bounceOutRight"
        animationInDuration={props.duration}
        isVisible={true}
      >
        {props.letter}
      </Animated>
    </span>
  );
};

export default Letter;