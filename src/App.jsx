import { useState } from "react";
import Checker from "./Checker";
import Input from "./Input";
import Button from "./Button";
import MemberShipInput from "./MemberShipInput";

function App() {
  const [idValue, setIdValue] = useState("");
  const [pwValue, setPwValue] = useState("");

  const idChange = (e) => {
    setIdValue((prev) => e.target.value);
  };

  const pwChange = (e) => {
    setPwValue((prev) => e.target.value);
  };

  const checkLength = (value, min, max) => min <= value.length && value.length <= max;
  const checkSpecial = (value) => [..."!@$%^*_+~"].some((v) => value.includes(v));

  const isLengthIDValid = 6 <= idValue.length && idValue.length <= 20;
  const pwLengthIDValid = 8 <= pwValue.length && pwValue.length <= 20;
  const hasSpecial = [..."!@$%^*_+~"].some((v) => pwValue.includes(v));

  const [inputs, setInputs] = useState([
    {
      value: "",
      someChange: (e) => {
        setInputs((prev) => {
          const newArr = [...prev];
          newArr[0].value = e.target.value;
          newArr[0].checkers[0].isValid = checkLength(e.target.value, 6, 20);
          return newArr;
        });
      },
      placeholder: "아이디를 입력해 주세요",
      checkers: [{ text: "6~20자 내외", isValid: false }],
    },
    {
      value: "",
      someChange: (e) => {
        setInputs((prev) => {
          const newArr = [...prev];
          newArr[1].value = e.target.value;
          newArr[1].checkers[0].isValid = checkLength(e.target.value, 8, 20);
          newArr[1].checkers[1].isValid = checkSpecial(e.target.value);
          return newArr;
        });
      },
      placeholder: "비밀번호를 입력해 주세요",
      checkers: [
        { text: "8~20자 내외", isValid: false },
        { text: "특수문자 (!@$%^*_+~)", isValid: false },
      ],
    },
  ]);
  return (
    <>
      {inputs.map((v) => (
        <MemberShipInput {...v} />
      ))}
      <Button isValid={inputs.every((v) => v.checkers.every((v1) => v1.isValid))} />
    </>
  );
}

export default App;
