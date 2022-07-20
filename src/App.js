import Header from './components/Header';
import logo from './assets/logo.svg';
import './App.css';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Header logo={logo}/>
      <Profile userName="Skullomanic84"/>
    </div>
  );
}

export default App;
