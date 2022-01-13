import React from "react";

const data = ["HTML", "TAILWIND", "REACT", "TYPESCRIPT", "NODEJS"];

const ProjectCard: React.FunctionComponent = () => {
  return (
    <div className="container">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3  px-4">
          <div className="bg-DarkModeDark rounded-lg overflow-hidden mb-10 shadow-2xl shadow-black hover:shadow-md hover:scale-[1.01] hover:shadow-orange-400 duration-500 transition-all">
            <img
              src="/project-img/project1.png"
              alt="image"
              className="w-full hover:scale-125 transition-all duration-500"
            />
            <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
              <h3>
                <a
                  href="#"
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
                  50+ Best creative website themes & templates
                </a>
              </h3>
              <p className="text-base text-white leading-relaxed mb-7">
                Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
                Lorem consectetur adipiscing elit.
              </p>
            
                {data.map((data) => (
                  <span className="mb-4 inline-block p-2 m-1 rounded-xl font-Kata font-bold justify-self-start text-sm text-green-700 bg-green-700 bg-opacity-20">
                    {data}
                  </span>
                ))}
             
              <div className=" py-2   ">
                <a aria-disabled href="#" target="_blank">
                  <button className="project-card-button"> Source Code</button>
                </a>

                <a href="#" target="_blank">
                  <button className="project-card-button">Live Demo</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

{
  /* //skew-x-[-8deg] */
}
{
  /* 
{/* 
//  <div className="grid grid-cols-4">
//         <div className="project-box ">
//           <div className="grid">
//             <img */
}
{
  /* //               className=" rounded-t-lg "
//               src="/project-img/project1.png"
//               alt="project-img"
//             />
//           </div> */
}

{
  /* //           <h1 className="text-white text-4xl  ">First Project</h1>
//           <p className="text-white text-left font-mono text-lg">
//             thisi dshi sdhsijejj ahaijw ajsdi qhjqidaasj huasdj haidjj jaiiasidj
//             hjhduejvk hidjjek
//           </p>
          */
}
{
  /* //             {data.map((data) => ( */
}
{
  /* //               <span className=" p-2 m-1 rounded-xl justify-self-start text-sm text-green-700 bg-green-700 bg-opacity-20">
//                 {data}
//               </span>
            ))}
          
//           
//         </div> */
}
{
  /* //       </div> */
}
