
import './App.css';
import Hero from './components/Hero';
import TaskBoard from './components/TaskTest/TaskBoard';


function App() {
  return (
    <div className="flex flex-col items-center m-auto gap-5">
      <Hero />
      <div className="divider py-5">
        <div className='indicator'>
          <h1 className='font-bold text-xl pb-3'>Task List</h1> 
          <span className="indicator-item indicator-bottom indicator-center badge badge-info">BETA</span>
        </div>
      </div>
      <TaskBoard />
      <div className="divider py-5">
        <div className='indicator'>
          <h1 className='font-bold text-xl pb-3'>Tab List</h1>
          <span className="indicator-item indicator-bottom indicator-center badge badge-error">PRE-ALPHA</span>
        </div>
      </div>
    </div>
  );
}

export default App;
