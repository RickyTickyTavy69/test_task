import {BrowserRouter, Routes, Route} from "react-router-dom";
import Editor from "./pages/Editor/Editor.tsx";
import SequenzPage from "./pages/Sequences/SequenzPage.tsx";
import MainPage from "./pages/MainPage.tsx";

import "./index.css";


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<MainPage/>}>
                <Route path="editor" element={
                        <Editor/>
                }/>
                <Route path="result" element={
                        <SequenzPage/>
                }/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
