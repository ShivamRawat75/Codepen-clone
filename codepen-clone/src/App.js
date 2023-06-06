
import DataProvider from './context/DataProvider';

import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <DataProvider>
        <Home />
      </DataProvider>

    </div>
  );
}

export default App;
