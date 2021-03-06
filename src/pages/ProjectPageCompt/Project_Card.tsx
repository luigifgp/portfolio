import React, {useState} from "react";
import ModalPopUp from "../../components/Modal";
import { Projects, CardProjectData } from './Projects_Data';
import ProjectVideo from './Project_Video';
import { useDispatch } from 'react-redux';
import { modalOpen } from '../../store/action/index';



const ProjectCard: React.FunctionComponent = () => {

  const data: CardProjectData[] = Projects;

  const dispatch = useDispatch(); 


  ///video modal handle
  const [getIndex, setGetIndex] = useState<number | null>(null);
  const activeModal = (index: number, isActive: boolean) => {
      setGetIndex(index);
      dispatch(modalOpen(isActive));
  }

  return (
    <div className="container duration-700 transition-all">
      <div className="flex flex-wrap -mx-10 lg:-mx-4 ">
        {data.map((projects, index) => (
          <div className="w-full md:w-1/2 xl:w-1/3   px-8">
            <div className="bg-DarkModeDark rounded-lg overflow-hidden mb-10 shadow-2xl shadow-black hover:shadow-md  hover:shadow-orange-400 duration-500 transition-all">
              <img
                src={projects.img}
                alt="image"
                className="w-[1550px] h-[240px] hover:scale-105 transition-all duration-500"
              />
              <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                <h3
                  className="
                        font-semibold
                        font-kata
                        text-white
                        text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                >
                  {projects.title}
                </h3>
                <p className="text-base text-white leading-relaxed mb-7">
                  {projects.content}
                </p>

                {projects.languages.map((data) => (
                  <span className="mb-4 inline-block p-2 m-1 rounded-xl font-Kata font-bold justify-self-start text-sm text-green-700 bg-green-700 bg-opacity-20">
                    {data}
                  </span>
                ))}

                <div className=" py-2   ">
                  <a aria-disabled href={projects.urlcode} target="_blank">
                    <button className=" project-card-button">
                      Source Code
                    </button>
                  </a>
                  
                  {/* if exist Video URL show a video Demo Button */}
                  {!projects.urlDemoVideo ? (
                    <a href={projects.urlDemo} target="_blank">
                      <button
                        disabled={projects.haveUrlDemo}
                        className="project-card-button"
                      >
                        Live Demo
                      </button>
                    </a>
                  ) : (
                    <button
                      disabled={projects.haveUrlDemo}
                      onClick={() => activeModal(index, true)}
                      className="project-card-button"
                    >
                      Video Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
            {getIndex === index && (
              <ModalPopUp box={<ProjectVideo url={projects?.urlDemoVideo} />} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;

