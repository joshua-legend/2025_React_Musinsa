const Counter = (props) => {
  const { cnt, plus, minus } = props;

  return (
    <div style={{ display: "flex", width: "fit-content", padding: "5px", border: "1px solid #efefef", borderRadius: "10px" }}>
      <button onClick={minus} style={{ border: "none", backgroundColor: "transparent" }}>
        -
      </button>
      <span>{cnt}</span>
      <button onClick={plus} style={{ border: "none", backgroundColor: "transparent" }}>
        +
      </button>
    </div>
  );
};

export default Counter;
