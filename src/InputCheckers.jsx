import Checker from "./Checker";
import Input from "./Input";

const InputCheckers = (props) => {
  const { inputChange, placeholder, checkers } = props;

  return (
    <>
      <Input change={inputChange} placeholder={placeholder} />
      {checkers.map((v) => (
        <Checker text={v.text} isValid={v.isValid} />
      ))}
    </>
  );
};

export default InputCheckers;
