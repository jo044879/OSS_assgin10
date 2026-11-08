## OSS 10주차 


### Project Structure

- `src/main.jsx`: HTML의 `root` 요소에 React 앱을 연결하는 시작 파일입니다.
- `src/App.jsx`: 할 일 목록과 입력값을 관리하고, 추가·삭제·완료 처리를 담당합니다.
- `src/Todo.jsx`: 할 일 하나와 완료 및 삭제 버튼을 화면에 표시합니다.

### React Component

- `App`: 목록 상태와 입력 폼을 관리하고 각 할 일 항목에 필요한 함수를 전달합니다.
- `Todo`: 전달받은 할 일 내용을 보여주며 버튼을 눌렀을 때 부모가 준 함수를 실행합니다.

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



처음 화면을 열 때 `localStorage`에서 저장된 목록을 읽어 `todos`의 초기값으로 사용합니다. 목록이 바뀌면 `useEffect`가 실행되어 현재 목록을 JSON 문자열로 저장하므로, 새로고침 후에도 할 일을 다시 불러올 수 있습니다.

---
