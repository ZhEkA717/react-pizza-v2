import './scss/app.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { Suspense, lazy } from 'react';

const Cart = lazy(() => import(/*webpackChunkName: "Cart"*/ './pages/Cart'));
const PizzaBlockDescription = lazy(() => import(/*webpackChunkName: "PizzaBlockDescription"*/ './pages/PizzaBlockDescription/PizzaBlockDescription'));

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Cart/>
                </Suspense>
              } />
              <Route path="/pizza/:id" element={
                <Suspense>
                  <PizzaBlockDescription/>
                </Suspense>
              } />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;