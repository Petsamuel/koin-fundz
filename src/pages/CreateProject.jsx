import { useState, useEffect } from "react";
import { CompanyDetails } from "../components/CompanyDetailsForm";
import { ProjectDetail } from "../components/ProjectDetailsForm";
import { Pipeline } from "../components/Pipeline";
import { useGlobalState } from "../store";
import { createProject } from "../services/blockchain";
import { toTimestamp } from "../helper/toTimestamp";
import { AlertMessage } from "../components/Alert";
import { milestone } from "../store/listdata";

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

  useEffect(() => {
    let timeout;

    if (projectStatus) {
      // Show the Alert Message for 2 seconds
      timeout = setTimeout(() => {
        setProjectStatus(null);
      }, 4000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [projectStatus]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2 ">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              New Project
            </p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            Campaign Details
          </h5>

          <div className="mb-5 text-gray-800 ">
            {!companyDetail ? <ProjectDetail /> : <CompanyDetails />}
          </div>
        </div>
      </div>
    </div>
  );
};
