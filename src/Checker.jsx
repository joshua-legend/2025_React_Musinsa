import { FaCheck } from "react-icons/fa";

const Checker = (props) => {
  const { text, isValid } = props;
  return (
    <span style={{ color: isValid ? "#56BA9F" : "#E0E0E0" }}>
      <FaCheck /> {text}
    </span>
  );
};

export default Checker;
