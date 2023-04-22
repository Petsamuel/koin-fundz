import { Sidebar } from "./Sidebar";
import { useGlobalState } from "../store";

function ProjectListing() {
  const [projectData, setProjectData] = useGlobalState("projects");

  const Lists = () => {
    return (
      <div className="relative bg-gray-50">
        {projectData.length ? (
          projectData.map((data) => (
            <>
              <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-100 dark:border-gray-100">
                <a href={`/request/${data.id}`} key={projectData.email}>
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

                    <a
                      href={`/request/${data.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blueon dark:hover:bg-blueoff dark:focus:ring-blue-800"
                    >
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
            </>
          ))
        ) : (
          <>
            <div className="grid grid-cols-4 gap-4 mb-4 xs:cols-1 overflow-y-hidden p-2">
              <div
                role="status"
                className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center "
              >
                <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                  <svg
                    className="w-12 h-12 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80M0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
                <div className="w-full">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}
      </div>
    );
  };

  const Content = () => {
    return (
      <div className="relativep-4 sm:ml-64 text-transparent py-20 ">
        <div className="p-4  border-gray-200 rounded-lg  ">
          <div className=" flex items-center  sm:min-w-[380px]  my-2 border-b-2  ">
            <div className="pb-4 text-lg text-blueoff">All Projects</div>
          </div>
          <Lists />
        </div>
      </div>
    );
  };
  return (
    <>
      <Sidebar />
      <Content controller="" />
    </>
  );
}

export { ProjectListing };
