## OSS 10주차 


## 1. Project Information

React와 Vite로 만든 할 일 관리 앱입니다. 할 일을 추가·완료·삭제하고 브라우저에 저장 React의 컴포넌트와 상태 관리 구조를 직접 살펴보고 바꿔보기 좋아 선택

- 원본 GitHub: [zikreddincikla/react-todo](https://github.com/zikreddincikla/react-todo)
- 라이선스: MIT

## 2. Installation

프로젝트 폴더에서 다음 명령을 실행

```bash
npm install
npm run dev
```

실행 화면은 개발 서버를 켠 뒤 `http://localhost:5173`에서 확인합니다.

## 3. Source Code Exploration

- `src/main.jsx`: HTML의 root 요소에 React 앱을 연결하는 시작 파일
- `src/App.jsx`: 할 일 목록과 입력값을 관리하고, 추가·삭제·완료 처리를 담당
- `src/Todo.jsx`: 할 일 하나와 완료 및 삭제 버튼을 화면에 표시한다.

### React Component

- `App`: 목록 상태와 입력 폼을 관리하고 각 할 일 항목에 필요한 함수를 전달
- `Todo`: 전달받은 할 일 내용을 보여주며 버튼을 눌렀을 때 부모가 준 함수를 실행

### Code Analysis

```jsx
const [todos, setTodos] = useState(() => {
  const savedTodos = localStorage.getItem("todos");
  return savedTodos ? JSON.parse(savedTodos) : [];
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```



처음 화면을 열 때 localStorage에서 저장된 목록을 읽어 todos의 초기값으로 사용한다. 목록이 바뀌면 useEffect가 실행되어 현재 목록을 JSON 문자열로 저장하므로, 새로고침 후에도 할 일을 다시 불러올 수 있다.

## STEP 4. Customizing

| 구분 | 수정 파일 | 변경 전 | 변경 후 |
|---|---|---|---|
| Text | `src/App.jsx` | 제목 To-Do List, 버튼 Add | 제목 오늘의 할 일, 버튼 추가 |
| Style | `src/index.css` | 배경 검정색 | 짙은 남색 배경 |
| UI/Data | `src/App.jsx` | 입력 글자 수와 빈 목록 안내 없음 | 입력 글자 수(/100자)와 빈 목록 안내 표시 |

## 5. Deployment

- Vercel URL:

## 6. Weekly Review

- 새롭게 배운 점: (1) useState로 화면 상태 관리하기, (2) useEffect로 localStorage와 동기화하기, (3) props로 컴포넌트 사이에 함수를 전달하기.

- 어려웠던 점과 해결: React 상태와 브라우저 저장소의 흐름이 헷갈렸지만, 초기값을 불러오는 부분과 상태 변경 후 저장하는 부분을 나눠 읽어 정리했다.

- AI 사용 : clone coding 할 github 찾기, 전체적인 구조 분석

- 느낌점 : react를 통해서 쉽게 구조를 빠르게 확인할 수 있고  컴포넌트 별로 나누기 때문에 쉽게 수정이 가능하다. 또한 데이터가 변경될 때에도 자동으로 갱신하는 점이 좋은 것 같다.
