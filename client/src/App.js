import { Route, Routes } from 'react-router-dom';

import About from './pages/About';
import Question from './pages/Question';
import Create from './pages/Create';
import Home from './pages/Home';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import Start from './pages/Start';
import EditAnthology from './components/EditAnthology';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='/about' element={<About />} />
        <Route exact={true} path='/create' element={<Create />} />
        <Route exact={true} path='/create/edit' element={<EditAnthology />} />
        <Route exact={true} path='/question' element={<Question />} />
        <Route exact={true} path='/orders' element={<Orders />} />
        <Route exact={true} path='/checkout' element={<Checkout />} />
        <Route exact={true} path='/start' element={<Start />} />
      </Routes>
    </div>
  );
}
export default App;
