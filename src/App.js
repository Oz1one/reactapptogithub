import Home from './Pages/home';
import GalleryHome from './Pages/GalleryHome.js';
import Home2 from './Pages/home2.js'
import Home3 from './Pages/home3.js'
import Home4 from './Pages/home4.js'
import Home5 from './Pages/home5.js'
import Home6 from './Pages/home6.js'
import Home7 from './Pages/home7.js'
import Home8 from './Pages/home8.js'
import Home9 from './Pages/home9.js'
import Home10 from './Pages/home10.js'
import Home11 from './Pages/home11.js'


import { BrowserRouter as Router, Routes,useRoutes, Route, Link } from "react-router-dom";

const App = () => {
  
  const routes = useRoutes([
      { path: '/reactapptogithub', element: <GalleryHome/> },
      { path: '/Blessings', element: <Home />},
      { path: '/Blessing2', element: <Home2 />},
      { path: '/Blessing3', element: <Home3 />},
      { path: '/Blessing4', element: <Home4 />},
      { path: '/Blessing5', element: <Home5 />},
      { path: '/Blessing6', element: <Home6 />},
      { path: '/Blessing7', element: <Home7 />},
      { path: '/Blessing8', element: <Home8 />},
      { path: '/Blessing9', element: <Home9 />},
      { path: '/Blessing10', element: <Home10 />},
      { path: '/Blessing11', element: <Home11 />}




  ]);

  return routes;
};

export default App;
