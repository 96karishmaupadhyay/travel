import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Hotel from './pages/Hotel/Hotel';
import Car from './pages/Car/Car';
import Cruise from './pages/Cruise/Cruise';
import FlightHotel from './pages/FlightHotel/FlightHotel';
import Train from './pages/Train/Train';
import FlightSearchPage from './pages/FlightSearchPage/FlightSearchPage';
import TrainSearchPage from './pages/TrainSearchPage/TrainSearchPage';
import GetInSection from './sections/GetInSection/GetInSection';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/hotel' element={<Hotel/>}/>
      <Route path='/car' element={<Car/>}/>
      <Route path='/cruise' element={<Cruise/>}/>
      <Route path='/flight-hotel' element={<FlightHotel/>}/>
      <Route path='/train' element={<Train/>}/>
      <Route path="/flight-search" element={<FlightSearchPage/>}/>
      <Route path="/train-search" element={<TrainSearchPage/>}/>
      <Route path="/categories" element={<GetInSection/>}/>
    </Routes>
  );
}

export default App;
