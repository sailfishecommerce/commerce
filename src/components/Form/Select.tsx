interface SelectProps {
  content: selectInputType;
  formik: any;
}

type selectInputType = {
  name: string;
  placeholder: string;
  selectText: string;
  type: string;
  options: { value: string; name: string }[];
};

export default function Select({ content, formik }: SelectProps) {
  return (
    <div className="mb-3 flex flex-col">
      <label className="mb-2" htmlFor="checkout-country">
        {content.placeholder}
      </label>
      <select
        onChange={formik.handleChange}
        value={formik.values[content.name]}
        name={content.name}
        className="border-2 border-gray-200 rounded-md"
        id="checkout-country"
      >
        <option>Choose {content.selectText}</option>
        {content?.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
      <p className="text-red-500 text-sm">
        {formik.errors[content.name] &&
          formik.touched[content.name] &&
          formik.errors[content.name]}
      </p>
    </div>
  );
}
