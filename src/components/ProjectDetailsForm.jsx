import { useState } from "react";
import { useGlobalState } from "../store";
import { FormField, ImageField, SelectField } from "./custom/FormField";
import { countryName } from "../store/listdata";

export const ProjectDetail = ({ steps }) => {
  const [projectData, setProjectData] = useGlobalState("projectData");
  const options = ["Profit", "Charity", "Startup", "Non-Profit"];

  return (
    <div className="leading-tight grid ">
      <div className={steps === 1 ? "leading-normal " : "hidden"}>
        <FormField
          labelName="Project Title *"
          placeholder="Robots to clean"
          inputType="text"
          value={projectData.title}
          handleChange={(e) =>
            setProjectData({ ...projectData, title: e.target.value })
          }
        />
        <FormField
          labelName="Description *"
          placeholder="Write your description"
          isTextArea
          value={projectData.description}
          handleChange={(e) =>
            setProjectData({
              ...projectData,
              description: e.target.value,
            })
          }
        />
      </div>
      <div className={steps === 2 ? "" : "hidden"}>
        <div className="grid grid-cols-2 gap-5">
          <SelectField
            labelName="Type *"
            name="type"
            optionList={options}
            inputType="select"
            value={projectData.organizationType}
            handleChange={(e) => {
              setProjectData({
                ...projectData,
                organizationType: e.target.value,
              });
            }}
          />

          <FormField
            labelName="Fundraising Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            isGroup={true}
            value={projectData.goal}
            handleChange={(e) =>
              setProjectData({ ...projectData, goal: e.target.value })
            }
          />
        </div>

        <FormField
          labelName="Email *"
          placeholder="Support@koinfunds.com"
          inputType="email"
          value={projectData.email}
          handleChange={(e) =>
            setProjectData({ ...projectData, email: e.target.value })
          }
        />
        <div className="grid grid-cols-2 gap-5">
          <SelectField
            name="country"
            labelName="Country *"
            optionList={countryName}
            inputType="select"
            value={projectData.country}
            handleChange={(e) => {
              setProjectData({
                ...projectData,
                country: e.target.value,
              });
            }}
          />

          <FormField
            labelName="State *"
            placeholder="Lagos"
            inputType="text"
            value={projectData.state}
            handleChange={(e) => {
              setProjectData({ ...projectData, state: e.target.value });
            }}
          />
        </div>
      </div>

      <div className={steps === 3 ? "" : "hidden"}>
        <FormField
          labelName="End Date *"
          placeholder="End Date"
          inputType="date"
          value={projectData.expiresAt}
          handleChange={(e) => {
            setProjectData({
              ...projectData,
              expiresAt: e.target.value,
            });
          }}
        />
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          {projectData.imageUrl ? (
            <>
              <ImageField src={projectData.imageUrl} alt="project-photo" />
            </>
          ) : (
            <div className="text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-300"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                >
                  <span>Add </span>
                </label>
                <p className="pl-1">Business Image</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">URL Link Only</p>
            </div>
          )}
        </div>
        <FormField
          id="file-upload"
          name="file-upload"
          placeholder="https://www..."
          inputType="Url"
          value={projectData.imageUrl}
          handleChange={(e) => {
            setProjectData({ ...projectData, imageUrl: e.target.value });
          }}
        />
      </div>
    </div>
  );
};
