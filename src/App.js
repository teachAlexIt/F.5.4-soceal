import './App.css';
import Dialogs from './components/Diologs/Dialogs';
import Header from './components/Header/Header.js';
import Nav from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import {BrowserRouter,Route} from 'react-router-dom'
function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Nav />
        <div className='main-content'>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' component={Dialogs} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
