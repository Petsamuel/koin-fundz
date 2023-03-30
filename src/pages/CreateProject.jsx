import { useState } from "react";
import { CompanyDetails } from "../components/CompanyDetailsForm";
import { ProjectDetail } from "../components/ProjectDetailsForm";
import { useGlobalState } from "../store";

export const CreateProject = () => {
  const [companyDetail, setCompanyDetail] = useState(false);
  const [active, setActive] = useState(0);
  const [projectData, setProjectData] = useGlobalState("projectData");
  // const [projectData, setProjectData] = useState({
  //   name: "",
  //   title: "",
  //   description: "",
  //   goal: "",
  //   expiresAt: "",
  //   organizationType: "Profit",
  //   companyName: "",
  //   email: "",
  //   address: "",
  //   country: "",
  //   state: "",
  //   website: "",
  // });

  const milestone = [
    "Fill in Project Information",
    "Organization Information",
    "Start Project",
  ];

  const Pipeline = () => {
    return (<>
      <div className="container">
        <div className="flex text-sm">
          {milestone.map((index, key) => (
            <p className={active === key ? "flex text-blueon border-2 border-blueon rounded-sm py-4 mr-8 px-4 items-center " : "flex mr-8 px-4 bg-gray-100 items-center justify-items-center"} key={key}>{key}&nbsp;&nbsp;{index}</p>
          ))}
        </div>
      </div>
    </>)
  }


  return (
    <div className="bg-gray-200 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && Loader...} */}
      <div className="shadow-md  mx-4 py-8 px-10 bg-white rounded-md my-24 p-[16px] lg:w-11/12">
        <div className=" flex items-center  sm:min-w-[380px]  my-2 border-b-2 border-gray-200 ">
          <div className="pb-4 text-lg ">New Project</div>
        </div>
        <div className="my-8 xs:hidden">
          <Pipeline />
        </div>
        <div className="flex gap-x-12 text-lg font-normal font-[Montserrat] my-8">
          {!companyDetail ? (
            <p classNam="leading-4">
              Set up the basic of your fundraising campaign
            </p>
          ) : (
            <p classNam="leading-4">Set up Organization Information</p>
          )}
        </div>

        <form className="flex  flex-col mt-[65px gap-[30px]">
          {!companyDetail ? <ProjectDetail /> : <CompanyDetails />}

          <div className="flex justify-end items-end mt-[40px] gap-5">
            {!companyDetail ? (
              <>
                <button
                  className="inline-flex text-white bg-blueon border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
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
                  className="inline-flex text-white bg-gray-300 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={() => {
                    setCompanyDetail(false);
                    setActive(0);
                  }}
                >
                  Previous
                </button>
                <button
                  className="inline-flex text-white bg-blueon border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(projectData);
                  }}
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
