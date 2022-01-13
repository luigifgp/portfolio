import React from 'react';
import ProjectTittle from './ProjectPageCompt/Project_Title';
import ProjectCard from './ProjectPageCompt/Project_Card';


const ProjectPage: React.FunctionComponent = () => {
    return (
      <div className="grid justify-center items-center justify-items-center">
        <ProjectTittle />
        <div className="">
          <ProjectCard />
        </div>
      </div>
    );
}

export default ProjectPage;