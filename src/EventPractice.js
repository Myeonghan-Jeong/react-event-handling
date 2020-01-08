import React, { Component } from "react";

// 클래스형 컴포넌트로 연습해보세요.
class EventPractice extends Component {
  // state를 사용해 입력받은 정보를 저장할 수 있습니다.
  state = {
    username: "",
    message: ""
  };
  // constructor(props) {
  //   super(props);
  //   // 함수 호출을 결정하는 호출부를 설정하는 단계입니다.
  //   // this를 바인딩해 메서드와 컴포넌트의 관계를 유지합니다.
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleClick = this.handleClick.bind(this);
  // }
  // 다만 실제 바인딩은 각 이벤트에서 하는 방법이 더 좋습니다.
  handleChange = e => {
    this.setState({
      // name을 통해 이벤트 핸들링을 하나의 메서드로 처리할 수 있습니다.
      [e.target.name]: e.target.value
    });
  };
  handleClick = e => {
    alert(this.state.username + ": " + this.state.message);
    this.setState({
      username: "",
      message: ""
    });
  };
  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        {/* input이 여러 개라면 name 설정이 필수입니다. */}
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해주세요"
          value={this.state.message}
          onChange={
            // 임의 메서드
            this.handleChange
            // 자바스크립트 이벤트 핸들링
            // e => {
            //   // 이벤트 객체를 출력합니다. 일반적으로 e라고 부릅니다.
            //   this.setState({
            //     message: e.target.value
            //   });
            // }
          }
          onKeyPress={this.handleKeyPress}
        />
        {/* 버튼을 클릭하면 state에 저장된 메세지를 확인하고 state를 초기화 합니다. */}
        <button
          onClick={
            // 임의 메서드
            this.handleClick
            // 자바스크립트 이벤트 핸들링
            // () => {
            //   alert(this.state.message);
            //   this.setState({
            //     message: ""
            //   });
            // }
          }
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
