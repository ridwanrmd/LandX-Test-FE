import InputBox from "./components/InputBox";
import "bootstrap/dist/css/bootstrap.css"
import { useState } from "react";

function App() {

  const [todoLists, setTodoLists] = useState([
    {id: 1, todo: "bangun tidur", isDone: false},
    {id: 2, todo: "make up bed", isDone: false},
    {id: 3, todo: "sarapan", isDone: false}
  ])

  const renderList = () => {
    return todoLists.map((todo) => {
      return (
        <div className="d-flex pt-3 border-bottom justify-content-between">
          <p className="lead">{todo.todo}</p>
          <div>
            <button className="btn btn-outline-success">Done</button>
            <button className="btn btn-outline-warning mx-3">Cancel</button>
            <button className="btn btn-outline-danger">Delete</button>
          </div>
        </div>
      )
    })
  }

  return (
    <div  className="p-5">
      <InputBox/>
      {renderList()}
    </div>
  );
}

export default App;
