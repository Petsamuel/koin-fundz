export const SelectField = ({ value, labelName, optionList, handleChange }) => {
  return (
    <label className="flex-1 flex flex-col ">
      {labelName && (
        <>
          <select
            onChange={handleChange}
            value={value}
            className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-gray-300 bg-text-[8px] rounded-[10px] cursor-pointer sm:w-5/6"
          >
            {optionList.map((index, key) => (
              <option value={index} key={key}>
                {index}
              </option>
            ))}
          </select>
        </>
      )}
    </label>

  );
};

export const ImageField = ({
  src,
  handleChange,
  alt
}) => {
  return (
    <>
      {

        <>
          <img required
            src={src}
            alt={alt}
            className=" object-cover cursor-pointer h-auto max-w-full rounded-lg"
            handleChange={handleChange}
          />
        </>

      }
    </>
  )
}

export const FormField = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  return (
    <label className="flex-1  flex flex-col ">
      {labelName && (
        <span className="font-medium text-[14px] leading-[22px] my-4 ">
          {labelName}
        </span>
      )}
      {isTextArea ? (

        <div className="mt-2">
          <textarea required
            value={value}
            onChange={handleChange}
            placeholder={placeholder} id="about" name="about" rows="10" className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:py-1.5 sm:text-sm sm:leading-6 p-4 outline-none bg-text-[14px]"></textarea>
          <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about Project.</p>
        </div>
      ) : (

        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-gray-300 bg-text-[14px] rounded-[10px] bg-transparent"
        />
      )}
    </label>
  );
};
