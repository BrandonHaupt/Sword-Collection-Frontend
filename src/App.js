import './App.scss';
import { Outlet } from 'react-router-dom';
import Header from './pages/Header';

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;