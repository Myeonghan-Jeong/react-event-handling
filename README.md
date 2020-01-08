# chapter04. Event Handling

- 사용자가 웹 브라우저에서 DOM 요소들과 상호 작용하는 것을 **이벤트**라고 합니다.

> 다음 코드를 [여기서](https://jsbin.com/)에서 테스트해보세요.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
  </head>
  <body>
    <button onclick="alert('excuted')">
      Click Me
    </button>
  </body>
</html>
```

## 4.1 리액트의 이벤트 시스템

> src/Say.js를 확인하세요.

### 4.1.1 이벤트를 사용할 때 주의 사항

1. 이벤트 이름은 carmelCase로 작성합니다.

   - 예를 들어 HTML의 onclick은 리액트에서 `onClick`입니다.

2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달합니다.

   - HTML은 "" 안에 실행할 코드를 넣었지만 리액트는 함수 형태의 객체를 전달합니다.

3. DOM 요소에만 이벤트를 설정할 수 있습니다.

   - div, button 등의 DOM 요소에는 이벤트를 설정할 수 있지만, 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없습니다.

   > 즉, MyComponent에 `onClick={doSomething}`을 전달하면 이는 이름이 onClick인 props를 전달합니다.

   - 다만, 전달받은 props를 컴포넌트 내부의 DOM 이벤트로 사용할 수 있습니다.

### 4.1.2 이벤트 종류

- 리액트에서 지원하는 이벤트 종류는 다음과 같습니다.

  - Clipboard, Touch, Composition, UI, Keyboard, Wheel, Focus, Media etc

> 더 많은 이벤트는 [여기서](https://facebook.github.io/react/docs/events.html)을 확인하세요.

## 4.2 예제로 이벤트 핸들링 익히기

> src/EventPractice.js를 확인하세요.

### 4.2.1 컴포넌트 생성 및 불러오기

#### 4.2.1.1 컴포넌트 생성

#### 4.2.1.2 App.js에서 EventPractice 렌더링

### 4.2.2 onChange 이벤트 핸들링하기

#### 4.2.2.1 onChange 이벤트 설정

#### 4.2.2.2 state에 input 값 담기

#### 4.2.2.3 버튼을 누를 때 comment 값을 공백으로 설정하기

### 4.2.3 임의 메서드 만들기

#### 4.2.3.1 기본 방식

#### 4.2.3.2 Property Initializer Syntax를 사용한 메서드 작성

### 4.2.4 input 여러 개 다루기

### 4.2.5 onKeyPress 이벤트 핸들링

## 4.3 함수형 컴포넌트로 구현해 보기

> src/EventPractice2.js를 확인해보세요.

## 4.4 정리

- 리액트에서 이벤트를 다루는 것은 순수 자바스크립트 또는 jQuery를 사용한 애플리케이션에서 이벤트를 다루는 것과 비슷합니다.

- 클래스형 컴포넌트와 함수형 컴포넌트 모두 구현 가능하며 클래스형 컴포넌트에서 하는 거의 모든 작업은 함수형 컴포넌트에서 할 수 있습니다.

  - 함수형 컴포넌트는 `useState`를 통해 `form` 객체를 만들어 데이터를 저장하는 편이 여러 input을 받아야 할 때 더 편리합니다.
