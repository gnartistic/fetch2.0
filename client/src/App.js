import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Fetch from './components/Fetch';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Fetch />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Signup' element={<Signup />}/>
        </Route>
      </Routes></>
  );
}

export default App;
