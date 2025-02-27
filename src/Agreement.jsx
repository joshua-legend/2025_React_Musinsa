const Agreement = (props) => {
  const { contents, isNecessary, a } = props;

  return (
    <div style={{ display: "flex" }}>
      <input type="checkbox" onClick={a} />
      <span>{contents}</span>
      <span>{isNecessary ? "(필수)" : "(선택)"}</span>
    </div>
  );
};

export default Agreement;
