import react,{useState} from 'react';

interface letter {
    letter: string;
    className: string;
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
      {props.letter}
    </span>
  );
};

export default Letter;