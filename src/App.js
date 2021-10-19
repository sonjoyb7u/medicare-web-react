import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Error404 from './components/ErrorPage/Error404/Error404';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Appointment from './components/Appointment/Appointment';
import FacilityDetail from './components/FacilityDetail/FacilityDetail';
import AuthDataProvider from './Context/AuthDataProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="">
      <AuthDataProvider>
        <Router>
          <Header></Header>
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route exact path="/home">
                <Home></Home>
              </Route>
              <PrivateRoute exact path="/facility-detail/:facilityId">
                <FacilityDetail></FacilityDetail>
              </PrivateRoute>
              <Route exact path="/registration">
                <Registration></Registration>
              </Route>
              <Route exact path="/login">
                <Login></Login>
              </Route>
              <PrivateRoute exact path="/appointment">
                <Appointment></Appointment>
              </PrivateRoute>
              <Route path="*">
                <Error404></Error404>
              </Route>
            </Switch>
          <Footer></Footer>
        </Router>
      </AuthDataProvider>
    </div>
  );
}

export default App;
