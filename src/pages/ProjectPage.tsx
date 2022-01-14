import React from 'react';
import ProjectTittle from './ProjectPageCompt/Project_Title';
import ProjectCard from './ProjectPageCompt/Project_Card';


const ProjectPage: React.FunctionComponent = () => {
    return (
      <div className="grid mt-20 lg:mt-10 pl-8 md:pl-0  justify-center items-center justify-items-center">
        <ProjectTittle />
        <div className="mt-10  ">
          <ProjectCard />
        </div>
      </div>
    );
}

export default ProjectPage;