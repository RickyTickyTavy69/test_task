import {BrowserRouter, Routes, Route} from "react-router-dom";
import Editor from "./pages/Editor/Editor.tsx";
import SequenzPage from "./pages/SequenzPage.tsx";
import MainPage from "./pages/MainPage.tsx";

import "./index.css";


function App() {

    // добавить кнопку чтобы вынуть степ из потока выполнения так сказать.
    // параметры я не показываю сейчас

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
