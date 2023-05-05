import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './features/Home/Home';
import User from './features/User/User';
import './App.css';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
