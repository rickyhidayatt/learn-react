const Label = (props) => {
  const { htmlfor } = props;
  return (
    <label
      htmlFor={htmlfor}
      className="block text-slate-700 text-sm font-bold mb-2"
    >
      {props.childern}
    </label>
  );
};

export default Label;
