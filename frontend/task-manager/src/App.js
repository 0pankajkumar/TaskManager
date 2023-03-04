
import { useState, useEffect } from 'react';
import './App.css';
import TaskCard from './components/TaskCard';
import axios from "axios";
import AddNewTaskButton from './components/buttons/addNewTask';


function App() {

  const [tasks, setTasks] = useState();
  let localFlaskServer = "http://127.0.0.1:5000"

  const fetchData = () => {
    return axios.get(localFlaskServer + '/tasks')
          .then((response) => setTasks(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])
  
 
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <header className="App-header">
        <AddNewTaskButton />
        {tasks && tasks.map((task, index) => 
          <TaskCard key={index} task={task}/>
        )}
      </header>
    </div>
  );
}

export default App;
