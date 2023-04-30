
import { Route, Routes } from 'react-router-dom';

// import Home from './Pages/Home';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Navigation from './Pages/Navigation';
// import Notfound from './Pages/Notfound';
// import Userprofile from './Pages/UserProfile';
import Dashboard from './Pages/Dashboard';
import Account from './Pages/Account'
import Settings from './Pages/Settings'
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
        <Route path="/user" element={<Userprofile userId="6969" />} /> */}

        <Route path="/dashboard">
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
      <Dashboard />
      {/* <Navigation /> */}
    </div>
  );
}

export default App;
