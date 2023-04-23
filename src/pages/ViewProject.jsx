import { useParams } from "react-router-dom";
import { useGlobalState } from "../store";
import {GenButton} from "../components/Buttons"

function ViewProject() {
  const [projectData, setProjectData] = useGlobalState("projects");
  const { id } = useParams();

  const data = projectData.filter((value, index) => id.includes(index));
  // console.log(id);
  console.log(data);

  return (
    <>
      <div className="relative p-4 sm:mx-8 text-transparent py-8 ">
        <div className="p-4  border-gray-200 rounded-lg  ">
          <div className=" flex items-center  sm:min-w-[380px]  my-2 border-b-2  ">
            <div className="pb-4 text-lg text-blueoff">View Project</div>
          </div>
          <section>
            {data ? (
              <>
                {data.map((index) => (
                  <>
                    <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                      <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                        <div class="relative z-10 lg:py-16">
                          <div class="relative h-64 sm:h-80 lg:h-full">
                            <img src={index.imageUrl} alt="" srcset="" />
                          </div>
                        </div>

                        <div class="relative flex items-center bg-gray-100">
                          <span class="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100">
                            {index.title}
                          </span>

                          <div class="p-8 sm:p-16 lg:p-24">
                            <h2 class="text-2xl font-bold sm:text-3xl">
                              {index.title}
                            </h2>

                            <p class="mt-4 text-gray-600">
                              {index.description}
                            </p>

                            <GenButton name="Donate" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </>
            ) : (
              ""
            )}
          </section>
        </div>
      </div>
    </>
  );
}

export default ViewProject;
