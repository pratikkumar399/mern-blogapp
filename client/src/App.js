import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './components/UserContext';


function App() {
  return (

    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/login'} element={<LoginPage />}></Route>
          <Route path={'/register'} element={<RegisterPage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>



  );
}

export default App;
