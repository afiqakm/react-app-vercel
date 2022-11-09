
import './App.css';
import Hero from './components/Hero';
import TaskBoard from './components/TaskTest/TaskBoard';


function App() {
  return (
    <div className="flex flex-col items-center m-auto">
        <Hero/>
        <div className="divider py-5">Task List</div>
        <TaskBoard/>
    </div>
  );
}

export default App;
