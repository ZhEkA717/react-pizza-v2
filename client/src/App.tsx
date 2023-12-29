import './scss/app.scss';

import { Header } from './components';
import { AppRouter } from './components/AppRouter';

// const Cart = lazy(() => import(/*webpackChunkName: "Cart"*/ './pages/Cart'));
// const PizzaBlockDescription = lazy(() => import(/*webpackChunkName: "PizzaBlockDescription"*/ './pages/PizzaBlockDescription'));

function App() {
  return (
    <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            {/* <Routes>
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
            </Routes> */}
            <AppRouter/>
          </div>
        </div>
    </div>
  );
}

export default App;