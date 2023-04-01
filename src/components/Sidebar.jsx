import { useState } from "react";
import { categoryLists } from "../store/listdata";

function Sidebar() {
    const [isConnected, setIsConnected] = useState(false);
    const [toggle, setToggle] = useState(true);
    const [mobileToggle, setMobileToggle] = useState(true);

    return (
        <>
            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                class="inline-flex items-center p-2 mt-20 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 z-20 relative overflow-scroll"
                onClick={() => setMobileToggle(!mobileToggle)}
            >
                <span class="sr-only">Open sidebar</span>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            {mobileToggle ? (
                <aside
                    id="default-sidebar"
                    class="fixed top-0 left-0 z-10 w-64 h-screen transition-transform translate-x-0 sm:translate-x-0 mt-10"
                >
                    <div class="h-full px-3 py-16 overflow-y-auto bg-gray-50 dark:bg-white shadow-lg">
                        <ul class="space-y-2 font-medium mt-10">
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:blueon"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                    <span class="ml-3">Discover</span>
                                </a>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-600 dark:hover:blueon"
                                    aria-controls="dropdown-example"
                                    data-collapse-toggle="dropdown-example"
                                    onClick={() => setToggle(!toggle)}
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <span
                                        class="flex-1 ml-3 text-left whitespace-nowrap"
                                        sidebar-toggle-item
                                    >
                                        Category
                                    </span>
                                    <svg
                                        sidebar-toggle-item
                                        class="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                {toggle ? (
                                    <ul class=" py-2 space-y-2">
                                        {categoryLists.map((index, key) => (
                                            <li key={key}>
                                                <a
                                                    href="#"
                                                    class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-500 dark:hover:blueon"
                                                >
                                                    {index}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    ""
                                )}
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:blueon"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">
                                        How it works
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-2 text-gray-900 rounded-lg dark:text-gray-600 hover:bg-gray-100 dark:hover:blueon"
                                >
                                    <svg
                                        aria-hidden="true"
                                        class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                                        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                                    </svg>
                                    <span class="flex-1 ml-3 whitespace-nowrap">Resources</span>
                                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-black bg-blueon rounded-full dark:bg-mainOn dark:text-black">
                                        3
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            ) : (
                ""
            )}
        </>
    );
}
export { Sidebar };
