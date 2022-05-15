import  { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AuthModel from "./Components/AuthModel";
import Header from './Components/Header';


const HomePage = lazy(() => import('./Pages/HomePage'));

function App() {
  const [isShowAuthModel, setIsShowAuthModel] = useState(false);

  const handleAuthModel = () => {
    setIsShowAuthModel(!isShowAuthModel)
  }

  return (
    <div className="w-full flex flex-col justify-center">
        <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header isAuth={ false } showAuthModel={ handleAuthModel }/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/wishlist" element={<div>sdfsadf</div>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
      <AuthModel showModel={ isShowAuthModel } closeModel={handleAuthModel} />
    </div>
  );
}

export default App;
