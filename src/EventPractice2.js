import React, { useState } from "react";

const EventPractice2 = () => {
  // input이 여러 개라면 이렇게 나눠서 처리합니다.
  // const [username, setUsername] = useState("");
  // const [message, setMessage] = useState("");

  // const onChangeUsername = e => setUsername(e.target.value);
  // const onChangeMessage = e => setMessage(e.target.value);

  // 하지만 form의 형태로 한 번에 받아 이를 나눠서 처리할 수 있습니다.
  const [form, setForm] = useState({
    username: "",
    message: ""
  });
  const { username, message } = form;

  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form을 복사합니다.
      [e.target.name]: e.target.value // 입력한 값으로 덮어 씌웁니다.
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
    // setUsername("");
    // setMessage("");
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나 입력해주세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice2;
