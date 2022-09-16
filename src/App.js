import logo from './logo.svg';
import './App.css';

import { Route, BrowserRouter,Routes } from 'react-router-dom'  
import Navbar from './components/Navbar';
import Dept from './pages/Dept';
import TechDept from './pages/TechDept';
// import BdTeam from './pages/BdTeam';
// import AccDept from './pages/AccDept';
// import Hrdept from './pages/Hrdept';
// import SupDept from './pages/SupDept';
// import Design from './pages/Design';

// Data
import {TechDetails} from './components/SidebarData'
import {TechTeam} from './components/SidebarData'
import {AccDetails} from './components/SidebarData'
import {AccTeam} from './components/SidebarData'
import {BDDetails} from './components/SidebarData'
import {BDTeam} from './components/SidebarData'
import {SupportTeam} from './components/SidebarData'
import {SupTeam} from './components/SidebarData'
import {DesignTeam} from './components/SidebarData'
import {DTeam} from './components/SidebarData'
import {HrDetails} from './components/SidebarData'
import {HrTeam} from './components/SidebarData'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/dept' element={<Dept />} />
          <Route path='/tech' element={<TechDept TechDetails={TechDetails} obj={TechTeam} />} />
          <Route path='/bdteam' element={<TechDept TechDetails={BDDetails} obj={BDTeam} />} />
          <Route path='/account' element={<TechDept TechDetails={AccDetails} obj={AccTeam} />} />
          <Route path='/teamhr' element={<TechDept TechDetails={HrDetails} obj={HrTeam} />} />
          <Route path='/support' element={<TechDept TechDetails={SupportTeam} obj={SupTeam} />} />
          <Route path='/design' element={<TechDept TechDetails={DesignTeam} obj={DTeam} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
