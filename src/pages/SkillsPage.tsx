import React, {useState} from 'react';
import ProgressBar from '../components/ProgressBar';

import SkillsTitle from './SkillsPageCompt/SkillsPage_Title';
import Animation from './SkillsPageCompt/SkillsAnimation';

const SkillsPage:React.FunctionComponent =  () => {

    const [hoverSkills, setHoverSkills] = useState<boolean>(false);

     const getHoverSkillDiv = (getHoverSkillDiv: boolean) => {
       setHoverSkills(getHoverSkillDiv);
     };

    return (
      <div className="skillpage  ">
        <div className="xl:pt-60 gap-2 xl:p-16">
          <SkillsTitle />
          <div>
            <ul className="content list-disc grid gap-1  ">
              <li className="animate-[fadeInUp_1s_both] ">
                Effectively coded software changes and alterations based on
                specific design specifications.
              </li>
              <li className="animate-[fadeInUp_2s_both]">
                Successfully identified diagnosed and fixed website problems
                including broken links, typographical errors and formatting
                issues.
              </li>
              <li className="animate-[fadeInUp_3s_both]">
                helped to achieve a consistent look and visual theme across the
                websites by promoting uniform fonts, formatting, images and
                layout.
              </li>
              <li className="animate-[fadeInUp_4s_both]">
                worked to assess competing websites in regards to content, look
                and feel.
              </li>
              <li className="animate-[fadeInUp_5s_both]">
                Effectively multi tasked and worked well with internal and
                external teams.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-flow-row items-center xl:w-auto">
          <div className="grid grid-flow-row xl:pt-8 gap-5 xl:pr-32  ">
            <div className="grid gap-2 lg:gap-5 items-start pr-10 xl:w-auto w-9/12">
              <h1 className="animate-growHorizontal origin-left">Idioms</h1>
              <div className="">
                <ProgressBar
                  title="Spanish"
                  width="100%"
                  color=" bg-pink-500 "
                />
                <ProgressBar
                  title="English"
                  width="75%"
                  color=" bg-lightLimeColor "
                />
                <ProgressBar
                  title="Portuguese"
                  width="70%"
                  color=" bg-orange-400 "
                />
              </div>
            </div>
            <div className="grid gap-10 xl:gap-5">
              <h1 className="animate-growHorizontal origin-left">
                Languages & Framework
              </h1>

              <div className="relative -ml-4  sm:-ml-0 md:ml-28 lg:ml-36 xl:m-0 md:w-8/12 lg:-w-auto xl:w-auto  w-auto sm:p-0  ">
                <h1
                  onMouseOver={() => getHoverSkillDiv(true)}
                  onMouseOut={() => getHoverSkillDiv(false)}
                  className="!text-white opacity-60 absolute hover:opacity-0 bg-black rounded-full p-4 top-1/2 
                left-1/2 duration-500 transform -translate-x-1/2 -translate-y-1/2 z-40"
                >
                  HOVER ME
                </h1>
                <Animation hoverSkills={hoverSkills} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SkillsPage;