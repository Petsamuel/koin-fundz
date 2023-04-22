import { useState, useEffect } from "react";
import { ProjectDetail } from "../components/ProjectDetailsForm";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../store";
import { createProject } from "../services/blockchain";
import { toTimestamp } from "../helper/toTimestamp";
import { AlertMessage } from "../components/Alert";

export const CreateProject = () => {
  const [message, setMessage] = useState(null);
  const [step, setStep] = useState(1);
  const [projectData, setProjectData] = useGlobalState("projectData");
  const navigate = useNavigate();
  const {
    country,
    description,
    email,
    expiresAt,
    goal,
    organizationType,
    state,
    title,
    imageUrl,
  } = projectData;

  const handleSubmit = async (e) => {
    e.preventDefault();
    switch (true) {
      case state === "":
        setMessage("state not filled");
        break;
      case country === "":
        setMessage("country not filled");
        break;
      case description === "":
        setMessage("description not filled");
        break;
      case expiresAt === "":
        setMessage("expiresAt not filled");
        break;
      case organizationType === "":
        setMessage("organizationType not filled");
        break;
      case title === "":
        setMessage("title not filled");
        break;
      case imageUrl === "":
        setMessage("imageUrl not filled");
        break;

      default:
        await createProject({
          title,
          description,
          imageUrl,
          goal,
          expiresAt: toTimestamp(expiresAt),
          organizationType,
          email,
          country,
          state,
        });
        setMessage(false);
        setStep(step + 1);
        Delay("/project-listing");
        break;
    }
  };
  function Delay(props) {
    setTimeout(() => {
      navigate(props);
    }, 4000);
  }
  useEffect(() => {
    let timeout;

    if (message) {
      // Show the Alert Message for 2 seconds
      timeout = setTimeout(() => {
        setMessage(null);
      }, 4000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [message]);
  console.log(step);

  return (
    <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
          />
          <div className="absolute h-full w-full bg-blueon  bg-opacity-75  place-items-center hidden lg:grid">
            <h5 className="inline-block px-3 py-px   tracking-wider text-white uppercase  mb-3 text-3xl font-extrabold leading-none sm:text-4xl ">
              New Project
            </h5>
          </div>
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
            {/* //TODO: */}
            {/* <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              New Project
            </p> */}
          </div>
          <h5 className="mb-3 text-3xl font-extrabold sm:text-4xl leading-tight pt-5 lg:py-0">
            {step !== 4 ? (
              "Campaign Details"
            ) : (
              <span className="animate-pulse ">Creating Project...</span>
            )}
          </h5>
          <AlertMessage message={message} />
          <div className="mb-5 text-gray-800 ">
            <ProjectDetail steps={step} />
          </div>
          <div className="flex items-center mt-8 gap-4">
            {step > 1 && step <= 3 ? (
              <button
                className="inline-flex text-white hover:bg-gradient-to-r to-indigo-600 from-mainOn border-0 py-2 px-6 focus:outline-none bg-blueon rounded text-lg transition-all ease-in duration-75"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
            ) : (
              ""
            )}
            <button
              className="inline-flex text-white hover:bg-gradient-to-r to-indigo-600 from-mainOn border-0 py-2 px-6 focus:outline-none bg-blueon rounded text-lg transition-all ease-in duration-75"
              onClick={(e) =>
                step === 3 ? handleSubmit(e) : setStep(step + 1)
              }
            >
              {step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
