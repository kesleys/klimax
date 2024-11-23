import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Aleatorios from './Aleatorios';

function RoutesApp () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;