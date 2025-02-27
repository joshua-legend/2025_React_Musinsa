import { useState } from "react";
import InputCheckers from "./InputCheckers";
import Button from "./Button";
function App() {
  const checkLength = (value, min, max) => min <= value.length && value.length <= max;
  const hasSpecial = (value) => [..."!@$%^*_+"].some((v) => value.includes(v));
  const hasAt = (value) => value.includes("@");

  const [inputs, setInputs] = useState([
    {
      value: "",
      placeholder: "아이디 입력하세요",
      inputChange: (e) => {
        setInputs((prev) => {
          const newArr = [...prev];
          newArr[0].value = e.target.value;
          newArr[0].checkers[0].isValid = checkLength(e.target.value, 6, 20);
          return newArr;
        });
      },
      checkers: [{ text: "6~20글자 입력", isValid: false }],
    },
    {
      value: "",
      placeholder: "비밀번호 입력하세요",
      inputChange: (e) => {
        setInputs((prev) => {
          const newArr = [...prev];
          newArr[1].value = e.target.value;
          newArr[1].checkers[0].isValid = checkLength(e.target.value, 8, 20);
          newArr[1].checkers[1].isValid = hasSpecial(e.target.value);
          return newArr;
        });
      },
      checkers: [
        { text: "8~20글자 입력", isValid: false },
        { text: "특수문자 (!@$%^*_+~)", isValid: false },
      ],
    },
    {
      value: "",
      placeholder: "이메일 입력하세요",
      inputChange: (e) => {
        setInputs((prev) => {
          const newArr = [...prev];
          newArr[2].value = e.target.value;
          newArr[2].checkers[0].isValid = hasAt(e.target.value);
          return newArr;
        });
      },
      checkers: [{ text: "@이 필수", isValid: false }],
    },
  ]);

  return (
    <>
      {inputs.map((v) => (
        <InputCheckers {...v} />
      ))}
      <Button isValid={inputs.every((v) => v.checkers.every((v1) => v1.isValid))} />
    </>
  );
}

export default App;
