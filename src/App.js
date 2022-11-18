
import './App.css';
import Hero from './components/Hero';
import TaskBoard from './components/TaskList/TaskBoard';
import TabBoard from './components/TabList/TabBoard';

import ThemeSwitch from './components/ThemeSwitch';
import ComponentPlaceholder from './components/ComponentPlaceholder';
import Divider from './components/Divider';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <div id="top" className="snap-both flex flex-col items-center m-auto gap-5">

      <Hero />
      <ThemeSwitch />

      <Divider title="Task List" status="BETA" />
      <TaskBoard />

      <Divider title="Tab List" status="BETA" />
      <TabBoard />

      <Divider title="Tab + Task List" status="PRE-ALPHA" />
      <ComponentPlaceholder />

      <Divider title="Calculator Input" status="BETA" />
      <Calculator/>
    </div>
  );
}

export default App;
