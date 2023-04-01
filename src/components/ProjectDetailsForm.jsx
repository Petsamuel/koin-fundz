import { useGlobalState } from "../store";
import { FormField } from "./custom/FormField";

export const ProjectDetail = () => {
  const [projectData, setProjectData] = useGlobalState("projectData");

  return (
    <div className="flex flex-wrap gap-[40px] flex-col">
      <img
        src={
          projectData.imageUrl
            ? projectData.imageUrl
            : "https://waterfieldtech.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png"
        }
        alt="project-image"
        className="h-full w-full object-cover cursor-pointer"
      />
      <div className="lg:flex gap-[40px] ">
        <FormField
          labelName="Image Url*"
          placeholder="paste image url here"
          inputType="text"
          value={projectData.imageUrl}
          handleChange={(e) => {
            setProjectData({ ...projectData, imageUrl: e.target.value });
          }}
        />
      </div>
      <div className="lg:flex gap-[40px] ">
        <FormField
          labelName="Project Title *"
          placeholder="Robots to clean"
          inputType="text"
          value={projectData.title}
          handleChange={(e) => {
            setProjectData({ ...projectData, title: e.target.value });
          }}
        />
      </div>
      <FormField
        labelName="Description *"
        placeholder="Write your description"
        isTextArea
        value={projectData.description}
        handleChange={(e) => {
          setProjectData({
            ...projectData,
            description: e.target.value,
          });
        }}
      />

      <div className="lg:flex gap-[40px]">
        <FormField
          labelName="Fundraising Goal *"
          placeholder="ETH 0.50"
          inputType="text"
          value={projectData.goal}
          handleChange={(e) => {
            setProjectData({ ...projectData, goal: e.target.value });
          }}
        />
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
      </div>
    </div>
  );
};
