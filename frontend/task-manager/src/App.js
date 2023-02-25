
import './App.css';
import TaskCard from './components/TaskCard';
import {fakeData} from './components/fakeData';



function App() {
  const rows = [];
  fakeData.forEach((task, index) => {
    rows.push(<TaskCard 
        key={index} 
        task={task}
      />);
  })
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <header className="App-header">
        {rows}
        
      </header>
    </div>
  );
}

export default App;
