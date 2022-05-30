import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import PricingPage from './pages/pricing-page/pricing-page';
import Home from './pages/home-page/home-page';
import LogIn from './pages/login-page/login';
import Register from './pages/register-page/register-page';
import RequireVisitor from './routing/require-visitor';
import PagesLayoutGlobal from './components-global/page-layout-global/pages-layout-global';

import ShoppingCart from './pages/shopping-page-not-finished/shoppin-cart';
import { Store } from './store/store';
import ShoppingCartTemporery from './pages/shopping-page-not-finished/shopping-cart-temporery';

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<PagesLayoutGlobal />}>
          <Route index element={<Home />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/cart" element={<ShoppingCartTemporery />} />
          <Route
            path="/login"
            element={(
              <RequireVisitor>
                <LogIn />
              </RequireVisitor>
            )}
          />
          <Route
            path="/register"
            element={(
              <RequireVisitor>
                <Register />
              </RequireVisitor>
            )}
          />
        </Route>
      </Routes>
    </Provider>
  </BrowserRouter>
);

export default App;
