import './App.css';
import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layaout from "./components/Layout/Layaout";
import Home from "./pages/Home/Home";
import User from "./pages/User/User";
import About from "./pages/About/About";
import Clients from "./pages/Clients/Clients";
import Cargill from "./pages/Clients/Cargill/Cargill";
import Cofco from "./pages/Clients/Cofco/Cofco";
import Nibulon from "./pages/Clients/Nibulon/Nibulon";
import React from "react";
import Lesson13 from "./lessons/Lesson13/Lesson13";


// import HomeWork09 from "./homeworks/HomeWork09/HomeWork09";
// import Lesson09 from "./lessons/Lesson_09/Lesson_09";
// import Lesson10 from "./lessons/Lesson10/Lesson10";
// import Lesson_11 from "./lessons/Lesson11/Lesson_11";
// import HomeWork11 from "./homeworks/HomeWork11/HomeWork11";
// import Homework07 from "./homeworks/HomeWork_07/HomeWork_07";
// import Lesson_08 from "./lessons/Lesson_08/Lesson_08";
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "./lessons/Lesson_07/Lesson_07";
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";


function App() {
    return (
        <BrowserRouter>
            <GlobalStyles/>

            {/*<Lesson_06/>*/}
            {/*  <Lesson_07/>*/}
            {/*  <Homework07/>*/}
            {/*  <Lesson_08/>*/}
            {/*  <Lesson09/>*/}
            {/*  <HomeWork09/>*/}
            {/*  <Lesson10/>*/}
            {/*  <Lesson_11/>*/}
            {/*  <HomeWork11/>*/}
            {/*<Layaout>*/}
            {/*    <Routes>*/}
            {/*        <Route path='/' element={<Home/>}/>*/}
            {/*        <Route path='/user' element={<User/>}/>*/}
            {/*        <Route path='/about' element={<About/>}/>*/}
            {/*        <Route path='/clients' element={<Clients/>}/>*/}
            {/*        <Route path='/clients/nibulon' element={<Nibulon/>}/>*/}
            {/*        <Route path='/clients/cofco' element={<Cofco/>}/>*/}
            {/*        <Route path='/clients/cargill' element={<Cargill/>}/>*/}
            {/*        <Route path='*' element={'Page not found'}/>*/}


            {/*    </Routes>*/}

            {/*</Layaout>*/}

            <Lesson13/>

        </BrowserRouter>
    );
}

export default App;
