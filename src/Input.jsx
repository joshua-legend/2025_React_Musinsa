const Input = (props) => {
  const { placeholder, change } = props;

  return (
    <div style={{ display: "flex", alignItems: "center", border: "1px solid #efefef", borderRadius: "8px", padding: "4px 6px" }}>
      <input onChange={change} placeholder={placeholder} style={{ border: "none", width: "100%", outline: "none" }} type="text" />
    </div>
  );
};

export default Input;
