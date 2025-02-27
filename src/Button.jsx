const Button = (props) => {
  const { isValid } = props;

  return <div style={{ backgroundColor: isValid ? "black" : "grey", color: isValid ? "white" : "#efefef", width: "300px", padding: "10px 0", textAlign: "center", borderRadius: "30px" }}>가입</div>;
};

export default Button;
