import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from 'react';
import Loader from './components/Loader';
const OrderDetails = lazy(() => import('./components/OrderDetails'));
const CustomerDetails = lazy(() => import('./components/CustomerDetails'));
const CustomerTable = lazy(() => import('./components/CustomerTable'));
const LayoutMain = lazy(() => import('./layouts/LayoutMain'));
const OrderTable = lazy(() => import("./components/OrderTable"))

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loader />} >
          <Routes>
            <Route
              path='/'
              element={<LayoutMain />}
            >
              <Route index element={<OrderTable />}></Route>
              <Route path='customer' element={<CustomerTable />}></Route>
              <Route path='customer/details/:id' element={<CustomerDetails />}></Route>
            </Route>
            <Route path='order/details/:id' element={<OrderDetails />} ></Route>
          </Routes>

        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
