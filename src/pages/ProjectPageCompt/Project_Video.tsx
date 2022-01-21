import React from 'react';
import Box from "@mui/material/Box";
import YouTubePlayer from 'react-player/youtube';

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%) ",
 

};

interface ProjectVideoProps {
    url?: string;
}


const ProjectVideo: React.FunctionComponent<ProjectVideoProps> = (props) => {
    return (
      <>
        <Box
          className="absolute w-11/12 sm:w-10/12 lg:w-7/12  rounded-md bg-opacity-0 "
          sx={style}
        >
          <div className=" relative pt-[56.25%] animate-growWidth  transition-all ">
            <YouTubePlayer
              className=" absolute top-0 left-0"
              url={props.url}
              width="100%"
              height="100%"
              playing
              controls
              muted={true}
            />
          </div>
        </Box>
      </>
    );
}

export default ProjectVideo;