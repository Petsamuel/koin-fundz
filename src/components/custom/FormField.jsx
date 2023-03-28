// import { TextEditor } from './TextEditor'
export const SelectField = ({
  value,
  labelName,
  optionList,
  handleChange,


}) => {
  return (
    <label className="flex-1 w-full flex flex-col">
      {labelName &&
        <>
          <select onChange={handleChange} value={value} className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-gray-300 bg-text-[8px] rounded-[10px] cursor-pointer">
            {optionList.map((index, key) => (
              <option value={index} key={key}>{index}</option>
            ))}

          </select>
        </>

      }
    </label>
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
    <label className="flex-1 w-full flex flex-col">
      {labelName && (
        <span className="font-medium text-[14px] leading-[22px] my-4 ">
          {labelName}
        </span>
      )}
      {isTextArea ? (
        <textarea
          required
          value={value}
          onChange={handleChange}
          rows={10}
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-gray-300 bg-text-[14px] rounded-[10px] sm:min-w-[300px]"
        />


      ) : (
        <input
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className="py-[15px] sm:px-[25px] px-[15px] outline-none border-[1px] border-gray-300 bg-text-[8px] rounded-[10px]"
        />
      )}
    </label>
  );
};
