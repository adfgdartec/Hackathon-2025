import { useState } from 'react';
import '../src/css/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MapPage from './pages/Map';
import DetailsPage from './pages/detailsPage';
import MissionPage from './pages/MissionPage';
import Donations from './pages/DonationPage';
import Navbar from './components/NavbarComp';
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
    <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/details/:id" component={DetailsPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/mission" component={MissionPage} />
        <Route path="/donations" component={Donations} />
      </Switch>
    </div>
  );
}

export default App;
