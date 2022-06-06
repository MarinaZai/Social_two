import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { DialogsContainer, DialogsContaner } from './components/Dialogs/DialogsContaner';
import { Header } from './components/Header/Header';
import { Music } from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import { News } from './components/News/News';
import { Profile } from './components/Profile/Profile';
import { Settings } from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { store } from './redux/redux-store';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar /* state={props.state.sidebar} */ />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
