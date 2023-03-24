import { FormField } from "../components/custom/FormField";

export const CreateProject = () => {
  return (
    <div className="bg-gray-200 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && Loader...} */}
      <div className="bg-gray-300 flex justify-center items-center p-[16px] sm:min-w-[380px] rounded-[10px]">
        <h1 className="font-bold sm:text-[25px] text-[18px] leading-[38px]">
          Create a Project
        </h1>
      </div>
      <form className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Your Name *"
            placeholder="John Doe"
            inputType="text"
            // value={form.name}
            handleChange={() => {}}
          />
          <FormField
            labelName="Project Title *"
            placeholder="Robots to clean"
            inputType="text"
            // value={form.title}
            handleChange={() => {}}
          />
        </div>
        <FormField
          labelName="Story *"
          placeholder="Write your story"
          isTextArea
          // value={form.description}
          handleChange={() => {}}
        />
        <div className="w-full flex justify-center items-center p-4 bg-indigo-500 h-[120px] rounded-[10px]">
          <h4 className="font-bold text-[25px] text-white">
            You will get 97% of the raised amount, 3% goes to upkeep of the
            webapp
          </h4>
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Goal *"
            placeholder="ETH 0.50"
            inputType="text"
            // value={form.target}
            handleChange={() => {}}
          />
          <FormField
            labelName="End Date *"
            placeholder="End Date"
            inputType="date"
            // value={form.deadline}
            handleChange={() => {}}
          />
        </div>
        <div className="flex justify-center items-center mt-[40px]">
          <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit Project
          </button>
        </div>
      </form>
    </div>
  );
};
