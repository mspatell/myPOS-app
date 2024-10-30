import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import POS from './pages/POS';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pos" element={<POS/>}/>
      </Routes>
    </Router>
  );
}

export default App;
