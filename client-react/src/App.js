import  { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthModel from "./Components/AuthModel";
import Header from './Components/Header';


const HomePage = lazy(() => import('./Pages/HomePage'));

function App() {
  return (
    <div className="w-full flex flex-col justify-center">
        <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header isAuth={ false }/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<div>sdfsadf</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <AuthModel />
    </div>
  );
}

export default App;
