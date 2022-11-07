
import './App.css';
import Hero from './components/Hero';
import ItemTab from './components/ItemTab';

function App() {
  return (
    <div className="flex flex-col items-center m-auto">
        <Hero/>
        <ItemTab/>
    </div>
  );
}

export default App;
