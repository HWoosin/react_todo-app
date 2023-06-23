import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import TodoTemplate from './component/todo/TodoTemplate';
import Join from './component/user/Join';
import Login from './component/user/Login';

function App() {//일부러 url을 표시해주기 위해 사용하는 Route, 그럼 해당되는 곳에 Link를 줘야함
  return (
    <>
      <Header/>

      <Routes>
        <Route path='/' element={<TodoTemplate/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/join' element={<Join/>}/>
      </Routes>

      <Footer/>
    </>
    
  );
}

export default App;
