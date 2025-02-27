import { useState } from "react";
import Agreement from "./Agreement";
import Button from "./Button";

function App() {
  const [agreements, setAgreements] = useState([
    { contents: "만 14세 이상입니다.", isNecessary: true, isChecked: false },
    { contents: "무신사, 무신사 스토어 이용 약관", isNecessary: true, isChecked: false },
    { contents: "마케팅 목적의 개인정보 수집 및 이용 동의", isNecessary: false, isChecked: false },
    { contents: "광고성 정보 수신 동의", isNecessary: false, isChecked: false },
  ]);

  const click = (i) => {
    setAgreements((prev) => {
      const newArr = [...prev];
      newArr[i].isChecked = !newArr[i].isChecked;
      return newArr;
    });
  };

  return (
    <>
      <section style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {agreements.map((v, i) => (
          <Agreement
            {...v}
            a={() => {
              click(i);
            }}
          />
        ))}
      </section>
      <Button isAllNecessarychecked={agreements.filter((v) => v.isNecessary).every((v) => v.isChecked)} text={"동의하고 본인인증하기"} />
    </>
  );
}

export default App;
