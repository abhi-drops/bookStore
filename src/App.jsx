import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Navigate, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
