import React from 'react';
import ProgressBar from '../../components/ProgressBar';

import SkillsTitle from './SkillsPage_Title';
import Animation from './SkillAnimation';

const SkillsPage:React.FunctionComponent =  () => {


    return (
      <div className="skillpage  ">
        <div className="xl:pt-60 gap-2">
          <SkillsTitle />
          <div>
            <ul className="content list-disc grid gap-1 ">
              <li>
                Effectively coded software changes and alterations based on
                specific design specifications.
              </li>
              <li>
                Successfully identified diagnosed and fixed website problems
                including broken links, typographical errors and formatting
                issues.
              </li>
              <li>
                helped to achieve a consistent look and visual theme across the
                websites by promoting uniform fonts, formatting, images and
                layout.
              </li>
              <li>
                worked to assess competing websites in regards to content, look
                and feel.
              </li>
              <li>
                Effectively multi tasked and worked well with internal and
                external teams.
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-flow-row items-center xl:w-auto">
          <div className="grid grid-flow-row xl:pt-8 gap-5 xl:pr-32  ">
            <div className="grid gap-2 lg:gap-5 items-start pr-10 xl:w-auto w-9/12">
              <h1>Idioms</h1>
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
              <h1>Languages & Framework</h1>
              <div className=" m-0 sm:ml-0 md:ml-28 lg:ml-36 xl:m-0 md:w-8/12 lg:-w-auto xl:w-auto  w-auto sm:p-0  ">
                <Animation />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default SkillsPage;