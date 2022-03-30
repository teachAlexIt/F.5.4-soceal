import './App.css';
import Header from './components/Header/Header.js';
import Nav from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <Profile />
    </div>
  );
}

export default App;
