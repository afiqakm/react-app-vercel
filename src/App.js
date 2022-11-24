
import './App.css';
import { useState } from 'react';
import Hero from './components/Hero';
import TaskBoard from './components/TaskList/TaskBoard';
import TabBoard from './components/TabList/TabBoard';
import ThemeSwitch from './components/ThemeSwitch';
import ComponentPlaceholder from './components/ComponentPlaceholder';
import Divider from './components/Divider';
import Calculator from './components/Calculator/Calculator';
import Calendar from './components/Calendar/Calendar';
import ChangelogP1 from './components/Changelog/Changelog-p1';

function App() {  
  const [Project, setProject] = useState(false)
  const [tip, setTip] = useState(false)


  function handleClick() {
    setProject(!Project);
    setTip(!tip);
    //console.log('button clicked');
  }


  return (
    <div id="top" className="snap-both flex flex-col items-center m-auto gap-5">

      <Hero />
      <ThemeSwitch />

      <Divider title="Task List" status="BETA" onClickBadge={handleClick} dataTip={tip? "click again to view component." : "click here to view changelog"}/>
      <TaskBoard/>
      {Project? <ChangelogP1/> : null}
      
      <Divider title="Tab List" status="BETA" dataTip={"changelog not created yet"} />
      <TabBoard />

      <Divider title="Tab + Task List" status="PRE-ALPHA" />
      <ComponentPlaceholder />

      <Divider title="Calculator Input" status="BETA" dataTip={"changelog not created yet"} />
      <Calculator/>

      <Divider title="Calendar Input" status="ALPHA" />
      <Calendar/>
    </div>
  );
}

export default App;
