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
        `inline-block tracking-tighter  text-8xl font-medium text-white hover:text-OrangeColor transition-all duration-75"
          ${letter.className } ${active}`}
    >
      {letter.letter}
    </span>
  );
};

export default Letter;