import { RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Chicken from './components/Chicken/Chicken';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Icecream from './components/IceCream/Icecream';
import MasterComponent from './components/MasterComponent/MasterComponent';
import NotFound from './components/NotFound/NotFound';
import Pasta from './components/Pasta/Pasta';
import Pizza from './components/Pizza/Pizza';
import Seafood from './components/Seafood/Seafood';

import { createHashRouter } from 'react-router-dom';
import Cake from './components/Cake/Cake';
import Cinnabon from './components/Cinnabon/Cinnabon';
import Donuts from './components/Donuts/Donuts';
function App() {

  let routes = createHashRouter([
    {
      path: '/', element: <MasterComponent />, errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'pizza', element: <Pizza /> },
        { path: 'pasta', element: <Pasta /> },
        { path: 'seafood', element: <Seafood /> },
        { path: 'chicken', element: <Chicken /> },
        { path: 'icecream', element: <Icecream /> },
        { path: 'cake', element: <Cake /> },
        { path: 'donuts', element: <Donuts /> },
        { path: 'cinnabon', element: <Cinnabon /> },
        { path: 'details/:id', element: <Details /> }
        
      ]
  }])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
