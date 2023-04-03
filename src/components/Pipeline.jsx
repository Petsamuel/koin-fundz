export const Pipeline = ({ milestone, active }) => {
  return (
    <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 justify-center mt-8 mb-16">
      {milestone.map((index, key) => (
        <li
          className={
            active === key
              ? "flex items-center text-blue-600 dark:text-blueon space-x-2.5"
              : "flex items-center text-gray-500 dark:text-gray-400 space-x-2.5"
          }
        >
          <span
            className={
              active === key
                ? "flex items-center justify-center w-8 h-8 border border-blue-600 rounded-full shrink-0 dark:border-blueon"
                : "flex items-center justify-center w-8 h-8 border border-gray-500 rounded-full shrink-0 dark:border-gray-400"
            }
          >
            {key}
          </span>
          <span>
            <h3 class="font-medium leading-tight">{index}</h3>
            {/* <p class="text-sm">Complete details here</p> */}
          </span>
        </li>
      ))}
    </ol>
  );
};
