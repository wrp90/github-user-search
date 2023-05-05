import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './features/Home/Home';
import './App.css';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
