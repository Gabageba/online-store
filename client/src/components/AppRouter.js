import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes/routes";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";

const AppRouter = () => {
  const isAuth = false
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/profile" element={<Auth/>}/>
        <Route path='/' element={<Shop/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>

  );
};

export default AppRouter;