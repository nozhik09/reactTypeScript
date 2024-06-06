import './App.css';
import GlobalStyles from "./styles/GlobalStyles";
// import Homework07 from "./homeworks/HomeWork_07/HomeWork_07";
import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";


function App() {
  return (
    <div className="App">
        <GlobalStyles/>
      {/*<Lesson_06/>*/}
      {/*  <Lesson_07/>*/}
      {/*  <Homework07/>*/}
        <Lesson_08/>
    </div>
  );
}

export default App;
