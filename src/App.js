import './App.css';
import Dialogs from './components/Diologs/Dialogs';
import Header from './components/Header/Header.js';
import Nav from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Nav />
      <div className='main-content'>
        {/* <Profile /> */}
        <Dialogs />
      </div>
    </div>
  );
}

export default App;
