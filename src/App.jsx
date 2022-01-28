import React from 'react';
import Anime from "./pages/Anime";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NotFound from './components/NotFound';
import Facts from './pages/Facts';
import NotFound from './pages/404';

const App = () => {
  return (

    <Router>
      <div>
        {/* <Home /> */}
        <Routes>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/api/v1/" element={<Home/>}/>
          <Route exact path="/api/v1/:anime_name" element={<Anime/>}/>
          <Route exact path="/api/v1/:anime_name/:fact_id" element={<Facts/>}/>
          <Route exact path="/404" element={<NotFound />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App; 