import Checker from "./Checker";
import Input from "./Input";

const MemberShipInput = (props) => {
  const { someChange, placeholder, checkers } = props;

  return (
    <>
      <Input change={someChange} placeholder={placeholder} />
      {checkers.map((v) => (
        <Checker text={v.text} isValid={v.isValid} />
      ))}
    </>
  );
};

export default MemberShipInput;
