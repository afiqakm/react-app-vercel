
import './App.css';
import Hero from './components/Hero';
import TaskBoard from './components/TaskList/TaskBoard';
import TabBoard from './components/TabList/TabBoard';

import ThemeSwitch from './components/ThemeSwitch';
import ComponentPlaceholder from './components/ComponentPlaceholder';
import { ParallaxProvider } from 'react-scroll-parallax';
function App() {
  return (
    <ParallaxProvider>
      <div id="top" className="snap-both flex flex-col items-center m-auto gap-5">
          
          <Hero />       

        <ThemeSwitch />

        <div className="sticky top-0  snap-end divider py-6 z-20 bg-base-100">
          <h1 className='font-bold text-xl'>Task List</h1>
          <span className="badge badge-info cursor-pointer ">BETA</span>
        </div>

        <TaskBoard />
        <div className=" sticky top-0 snap-end divider py-6 z-30 bg-base-100">
          <h1 className='font-bold text-xl'>Tab List</h1>
          <span className="badge badge-info cursor-pointer">BETA</span>
        </div>
        <TabBoard />
        <div className="sticky top-0 snap-end divider py-6 z-30">
          <h1 className='font-bold text-xl'>Task + Tab List</h1>
          <span className="badge badge-error cursor-pointer">PRE-ALPHA</span>
        </div>
        <ComponentPlaceholder />
      </div>
    </ParallaxProvider>
  );
}

export default App;
