import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Screens/Home'
import Board from './Screens/Board'
import DayImg from './Screens/DayImg'
import DayResponse from './Screens/DayResponse'

function App() {
  // Home need route
  // day1~day8 need route
  // Use navigate("/") to route
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/board' element={<Board />} />
        <Route path='/day/:id' element={<DayImg />} />

        <Route path='/day/:id/response' element={<DayResponse />} />
        <Route path='/day/:id/response/*' element={<DayResponse />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );


}

export default App;
