import react,{useState} from 'react';

interface letter {
    letter: string;
    className: string;
}

const Letter = (letter: letter) => {
  const [activeLetter, setActiveLetter] = useState<boolean>(false);

  const active = activeLetter ? "animate-wiggle" : "";

  return (
    <span
      onMouseEnter={() => setActiveLetter(!activeLetter)}
      onMouseLeave={() =>  setTimeout(() => { setActiveLetter(!activeLetter); }, 900)}
      className={
        `homepage_presatation
          ${letter.className } ${active}`}
    >
      {letter.letter}
    </span>
  );
};

export default Letter;