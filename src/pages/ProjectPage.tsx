import React from 'react';
import ProjectTittle from './ProjectPageCompt/Project_Title';
import ProjectCard from './ProjectPageCompt/Project_Card';


const ProjectPage: React.FunctionComponent = () => {
    return (
      <div className="grid mt-20 lg:mt-10 pl-[25px] lg:pl-0  justify-items-center">
        <ProjectTittle />
        <div className="mt-10  ">
          <ProjectCard />
        </div>
      </div>
    );
}

export default ProjectPage;