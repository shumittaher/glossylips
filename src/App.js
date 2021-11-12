import './App.css';
import HomeTotal from './Pages/Home/HomeTotal/HomeTotal';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginTotal from './Pages/UserManagement/LoginTotal/LoginTotal';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import ExploreTotal from './Pages/Explore/ExploreTotal/ExploreTotal';
import OrdersConfirmation from './Pages/OrdersConfirmation/OrdersConfirmation';
import PrivateRoute from './Pages/UserManagement/PrivateRoute/PrivateRoute';
import DashboardTotal from './Pages/Dashboard/DashboardTotal/DashboardTotal';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard/AdminDashboard';
import AdminRoute from './Pages/UserManagement/AdminRoute/AdmingRoute';



function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>

          <Header />
          <Switch>

            <Route exact path="/">
              <HomeTotal />
            </Route>

            <Route path="/home">
              <HomeTotal />
            </Route>
            <Route path="/explore">
              <ExploreTotal />
            </Route>
            <Route path="/login">
              <LoginTotal />
            </Route>
            <AdminRoute path="/admin">
              <AdminDashboard />
            </AdminRoute>
            <PrivateRoute path="/ordersconfirmation/:productId">
              <OrdersConfirmation />
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashboardTotal />
            </PrivateRoute>

          </Switch>


        </BrowserRouter>

      </AuthProvider>


    </div>
  );
}

export default App;
