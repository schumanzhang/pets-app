import './App.css';

import Pets from './components/Pets';

// functional component
// JSX
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello world.
        </p>
        <Pets content="This is where I show my pets!!!!!"/>
      </header>
    </div>
  );
}

export default App;
