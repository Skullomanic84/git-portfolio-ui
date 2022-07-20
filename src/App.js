import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import logo from './assets/logo.svg';
import './App.css';
import Profile from './pages/Profile';
import Projects from './pages/Projects'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header logo={logo}/>
      {/* routing */}
      <Routes>
        <Route path='/' element={<Profile userName="Skullomanic84" />} />
        <Route path='/projects' element={<Projects userName="Skullomanic84" />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
