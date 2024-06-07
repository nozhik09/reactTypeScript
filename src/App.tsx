import './App.css';
import GlobalStyles from "./styles/GlobalStyles";
import HomeWork09 from "./homeworks/HomeWork09/HomeWork09";
import Lesson09 from "./lessons/Lesson_09/Lesson_09";
import Lesson10 from "./lessons/Lesson10/Lesson10";
// import Homework07 from "./homeworks/HomeWork_07/HomeWork_07";
// import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
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
      {/*  <Lesson_08/>*/}
      {/*  <Lesson09/>*/}
      {/*  <HomeWork09/>*/}
        <Lesson10/>
    </div>
  );
}

export default App;
