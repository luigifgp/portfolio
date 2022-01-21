import React from 'react';
import Presentation from './HomePageCompt/HomePage_Presentation';




const HomePage:React.FunctionComponent =() => {
    return (
      //TODO DARKMODE bg-slate-200 dark:

      <div className="homepage noselect">
        <Presentation />
        <p className="mt-7 text-lg sm:text-2x1 md:text-3x1 lg:texl-4xl text-gray-500 italic animate-growWidth">
          Fullstack Developer / React TS
        </p>
        <a href="/contact">
          <button className="button "> Contact me!</button>
        </a>
      </div>
    );
}

export default HomePage;