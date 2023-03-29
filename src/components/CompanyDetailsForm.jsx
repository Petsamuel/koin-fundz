import { useGlobalState } from "../store";
import { SelectField, FormField } from "./custom/FormField";

export const CompanyDetails = () => {
  const [projectData, setProjectData] = useGlobalState("projectData");

  const options = ["Profit", "Charity", "Startup", "Non-Profit"];

  return (
    <div className="flex flex-wrap gap-[40px] flex-col">
      <div className="lg:flex gap-[40px] lg:w-6/12">
        <SelectField
          labelName="Type of Organization *"
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
      </div>

      <div className="lg:flex gap-[40px] ">
        <FormField
          labelName="Company Name *"
          placeholder="Koin Funds"
          inputType="text"
          value={projectData.companyName}
          handleChange={(e) => {
            setProjectData({
              ...projectData,
              companyName: e.target.value,
            });
          }}
        />
        <FormField
          labelName="Email *"
          placeholder="Ayeolakenny@gmail.com"
          inputType="email"
          value={projectData.email}
          handleChange={(e) => {
            setProjectData({
              ...projectData,
              email: e.target.value,
            });
          }}
        />
      </div>
      <div className="lg:flex gap-[40px] ">
        <FormField
          labelName="Address *"
          placeholder="Address"
          inputType="text"
          value={projectData.address}
          handleChange={(e) => {
            setProjectData({
              ...projectData,
              address: e.target.value,
            });
          }}
        />
        <FormField
          labelName="Country *"
          placeholder="Nigeria"
          inputType="text"
          value={projectData.country}
          handleChange={(e) => {
            setProjectData({
              ...projectData,
              country: e.target.value,
            });
          }}
        />
      </div>
      <div className="lg:flex gap-[40px] ">
        <FormField
          labelName="State *"
          placeholder="Lagos"
          inputType="text"
          value={projectData.state}
          handleChange={(e) => {
            setProjectData({
              ...projectData,
              state: e.target.value,
            });
          }}
        />
        <FormField
          labelName="Website (Optional)"
          placeholder="https://"
          inputType="url"
          value={projectData.website}
          handleChange={(e) => {
            setProjectData({
              ...projectData,
              website: e.target.value,
            });
          }}
        />
      </div>
    </div>
  );
};
