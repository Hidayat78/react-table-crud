import './App.css';
// import Navbar from './component/Navbar';
import TableData from './component/TableData';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path='/update/:id' element={<Update />} />
        </Routes>
      </BrowserRouter> */}


      {/* <Navbar /> */}
      <TableData />

    </div>
  );
}

export default App;
