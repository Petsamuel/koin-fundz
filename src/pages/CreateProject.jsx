import { useState, useEffect } from "react";
import { CompanyDetails } from "../components/CompanyDetailsForm";
import { ProjectDetail } from "../components/ProjectDetailsForm";
import { Pipeline } from "../components/Pipeline";
import { useGlobalState } from "../store";
import { createProject } from "../services/blockchain";
import { toTimestamp } from "../helper/toTimestamp";
import { AlertMessage } from "../components/Alert";

export const CreateProject = () => {
  const [companyDetail, setCompanyDetail] = useState(false);
  const [active, setActive] = useState(0);
  const [projectData, setProjectData] = useGlobalState("projectData");
  const [projectStatus, setProjectStatus] = useState(null);
  const {
    address,
    companyName,
    country,
    description,
    email,
    expiresAt,
    goal,
    organizationType,
    state,
    title,
    imageUrl,
    website,
  } = projectData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !address ||
      !companyName ||
      !country ||
      !description ||
      !email ||
      !expiresAt ||
      !goal ||
      !organizationType ||
      !state ||
      !title ||
      !imageUrl
    ) {
      setProjectStatus(false);
    }

    await createProject({
      title,
      description,
      imageUrl,
      goal,
      expiresAt: toTimestamp(expiresAt),
      organizationType,
      companyName,
      email,
      address,
      country,
      website,
      state,
    });
    setProjectStatus(true);
  };

  const milestone = [
    "Fill in Project Information",
    "Organization Information",
    "Start Project",
  ];

  useEffect(() => {
    let timeout;

    if (projectStatus) {
      // Show the info message for 2 seconds
      timeout = setTimeout(() => {
        setProjectStatus(null);
      }, 4000);
    }

    // Cleanup function to cancel the timeout if the component unmounts before it completes
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [projectStatus]);

  return (
    <div className="bg-gray-200 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4 ">
      {/* {isLoading && Loader...} */}
      <div className={projectStatus === null ? "hidden mt-3" : "block mt-3"}>
        <AlertMessage projectStatus={projectStatus} />
      </div>
      <div className="shadow-md  mx-4 py-8 px-10 bg-white rounded-md my-24 p-[16px] lg:w-11/12">
        <div className=" flex items-center  sm:min-w-[380px]  my-2 border-b-2 border-gray-200 ">
          <div className="pb-4 text-lg ">New Project</div>
        </div>
        <div className="">
          <Pipeline milestone={milestone} active={active} />
        </div>

        <form className="flex  flex-col mt-[65px gap-[30px]">
          {!companyDetail ? <ProjectDetail /> : <CompanyDetails />}

          <div className="flex justify-end items-end mt-[40px] gap-5">
            {!companyDetail ? (
              <>
                <button
                  className="inline-flex text-white hover:bg-gradient-to-r to-indigo-600 from-mainOn border-0 py-2 px-6 focus:outline-none bg-blueon rounded text-lg transition-all ease-in duration-75"
                  onClick={() => {
                    setCompanyDetail(true);
                    setActive(1);
                  }}
                >
                  Proceed
                </button>
              </>
            ) : (
              <>
                <button
                  className="inline-flex text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-blueon rounded text-lg"
                  onClick={() => {
                    setCompanyDetail(false);
                    setActive(0);
                  }}
                >
                  Previous
                </button>

                <button
                  className="inline-flex text-white hover:bg-gradient-to-r to-indigo-600 from-mainOn border-0 py-2 px-6 focus:outline-none bg-blueon rounded text-lg transition-all ease-in duration-75"
                  onClick={(e) => handleSubmit(e)}
                >
                  Submit
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
