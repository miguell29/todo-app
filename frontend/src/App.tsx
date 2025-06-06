import { BrowserRouter, Route, Routes } from "react-router-dom"
import { TaskList } from "./components/TaskList"
import { TaskItem } from "./components/TaskItem"
import { TaskForm } from "./components/TaskForm"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/TaskList" element={<TaskList/>}></Route>
          <Route path="/TaskItem/:id" element={<TaskItem/>}></Route>
          <Route path="/TaskForm" element={<TaskForm/>}></Route>
          <Route path="/TaskForm/:id" element={<TaskForm />}></Route>
          <Route path="*" element={<TaskList/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
