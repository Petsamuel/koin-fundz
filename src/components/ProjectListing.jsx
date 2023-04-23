import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { useGlobalState } from "../store";
import { ListingSkeleton } from "./Skeleton";
import { ToggleButton } from "./Buttons";

function ProjectListing() {
  const [projectData, setProjectData] = useGlobalState("projects");
  const [toggle, setToggle] = useState(true);

  const Lists = () => {
    return (
      <>
        {projectData.length ? (
          <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
            {projectData.map((data, index) => (
              <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-100 dark:border-gray-100 hover:shadow-lg">
                <a key={projectData.email} href={`/view-project/${index}`}>
                  <img
                    className="rounded-t-lg"
                    src={data.imageUrl && data.imageUrl}
                    alt=""
                  />
                  <span className="absolute bg-gradient-to-r to-indigo-600 from-mainOn text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-white ml-3 z-auto top-2 right-0">
                    {data.organizationType && data.organizationType}
                  </span>
                  <div
                    className="w-full bg-gray-200  dark:bg-gray-700 tooltip"
                    title={`${100 - (data.raised / data.goal) * 100}% left`}
                  >
                    <div
                      className="bg-purple-600 h-2.5  dark:bg-purple-500 text-white text-sm tooltip transition-opacity duration-300"
                      style={{ width: (data.raised * 100) / data.goal + "%" }}
                      title={`${(data.raised * 100) / data.goal}% Completed`}
                    >
                      <div class="tooltip-arrow"></div>
                    </div>
                  </div>
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-blueon ">
                      {data.title && data.title}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.description && data.description}
                  </p>

                  <div class="flex items-center justify-between">
                    <span
                      class="text-3xl font-bold bg-clip-text bg-gradient-to-r to-gray-900 from-mainOn truncate truncate-overflow transition-opacity duration-300 tooltip w-64 cursor-pointer"
                      title="Goal"
                    >
                      <div class="tooltip-arrow"></div>
                      {data.goal && data.goal}
                      <span className="text-sm">eth</span>
                    </span>

                    <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blueon dark:hover:bg-blueoff dark:focus:ring-blue-800">
                      Donate
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rzule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <ListingSkeleton />
        )}
      </>
    );
  };

  const Content = () => {
    return (
      <div
        className={
          toggle
            ? "relative p-4 sm:ml-64 text-transparent py-20 "
            : "relative p-4 sm:mx-8 text-transparent py-20"
        }
      >
        <div className="p-4  border-gray-200 rounded-lg  ">
          <div className=" flex items-center  sm:min-w-[380px]  my-2 border-b-2  ">
            <div className="pb-4 text-lg text-blueoff ">
              <span>All Projects </span>
              <ToggleButton handleEvent={() => setToggle(!toggle)}/>
                

            </div>
          </div>
          <Lists />
        </div>
      </div>
    );
  };
  return (
    <>
      <span className={toggle ? "inline-flex" : "hidden"}>
        <Sidebar />
      </span>
      <Content controller="" />
    </>
  );
}

export { ProjectListing };
