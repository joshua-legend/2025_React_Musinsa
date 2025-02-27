const Button = (props) => {
  const { text, isAllNecessarychecked } = props;
  return (
    <div
      onClick={() => {
        isAllNecessarychecked ? alert("통과") : alert("필수 누르셈 ㅅㄱ");
      }}
      style={{
        padding: "10px",
        width: "500px",
        backgroundColor: isAllNecessarychecked ? "black" : "#efefef",
        color: isAllNecessarychecked ? "white" : "grey",
        textAlign: "center",
        borderRadius: "5px",
      }}
    >
      {text}
    </div>
  );
};

export default Button;
