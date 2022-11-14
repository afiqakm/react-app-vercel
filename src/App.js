
import './App.css';
import Hero from './components/Hero';
import TaskBoard from './components/TaskList/TaskBoard';
import TabBoard from './components/TabList/TabBoard';

import ThemeSwitch from './components/ThemeSwitch';

function App() {
  return (
    <div id="top" className="snap-both flex flex-col items-center m-auto gap-5">
      <Hero />
      <ThemeSwitch />

      <div className="snap-end divider py-6">
        <h1 className='font-bold text-xl'>Task List</h1>

        <div 
        className='tooltip tooltip-info tooltip-bottom' 
        data-tip="entry value can still be duplicate">
          <span className="badge badge-info cursor-pointer ">BETA</span>
      </div>
      </div>

      <TaskBoard />
      <div className="snap-end divider py-6">
        <h1 className='font-bold text-xl'>Tab List</h1>
        <span className="badge badge-info cursor-pointer">BETA</span>
      </div>
      <TabBoard />
      <div className="snap-end divider py-6">
        <h1 className='font-bold text-xl'>Task + Tab List</h1>
        <span className="badge badge-error cursor-pointer">PRE-ALPHA</span>
      </div>
      <div className='w-full max-w-5xl h-120'>
        <div className="hero min-h-full bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Component placeholder</h1>
              <p className="py-6">Expect more components in the near future in this playground.</p>
              <a href="#top" className="btn btn-primary">Back to the start!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
