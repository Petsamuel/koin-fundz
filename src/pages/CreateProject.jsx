import { FormField } from "../components/custom/FormField";
import { useState } from "react"

export const CreateProject = () => {
  const [menu, setMenu] = useState(false);
  const [activeMenu, setactiveMenu] = useState(true);

  const ProjectMenu = () => {
    return (
      <div className="flex gap-x-12">
        <div className={activeMenu ? "text-black border-b-0 rounded-sm border-blueon cursor-pointer" : "text-black border-b-4 border-blueon cursor-pointer pb-2 hover:border-b-0"} onClick={() => !activeMenu}>Custom Project</div>
        <div className={activeMenu ? "text-black border-b-4 rounded-sm border-blueon cursor-pointer pb-2 cursor-pointer" : "cursor-pointer border-blueon text-bla hover:border-b-0"} onClick={() => !activeMenu}> Template </div>
      </div>
    )
  }
  return (
    <div className="bg-gray-200 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {/* {isLoading && Loader...} */}
      <div className="shadow-md  mx-4 py-8 px-10 bg-white rounded-md my-24 p-[16px]">
        <div className=" flex items-center  sm:min-w-[380px] rounded-[10px] my-2">
          <div className="pb-4 text-lg">
            New Project
          </div>
        </div>
        <div>
          <ProjectMenu />
        </div>
        <div className="" role="">
          <form className="w-full mt-[65px] flex flex-col gap-[30px]">
            <div className="flex flex-wrap gap-[40px] flex-col lg:w-6/12">
              <FormField
                labelName="Name *"
                placeholder="John Doe"
                inputType="text"
                // value={form.name}
                handleChange={() => { }}
                className="w-40"
              />
              <FormField
                labelName="Project Title *"
                placeholder="Robots to clean"
                inputType="text"
                // value={form.title}
                handleChange={() => { }}
                className="w-40 "

              />
            </div>
            <FormField
              labelName="Story *"
              placeholder="Write your story"
              isTextArea
              // value={form.description}
              handleChange={() => { }}
            // className="w-md"

            />

            <div className="flex flex-col w-6/12 gap-5">
              <FormField
                labelName="Goal *"
                placeholder="ETH 0.50"
                inputType="text"
                // value={form.target}
                handleChange={() => { }}
              />
              <FormField
                labelName="End Date *"
                placeholder="End Date"
                inputType="date"
                // value={form.deadline}
                handleChange={() => { }}
              />
            </div>
            <div className="flex justify-end items-end mt-[40px] gap-5">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-red-300 rounded text-lg">
                Cancel
              </button>

            </div>
          </form>
          <div>
            {/* section- 2 */}

          </div>
        </div>
      </div>
    </div>
  );
};
