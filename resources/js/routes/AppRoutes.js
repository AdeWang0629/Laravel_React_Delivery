import {lazy, Suspense} from 'react';
import { Router, Switch } from 'react-router-dom';
// import { Router } from 'react-router';
import history from '../config/history';
import {PrivateRoute, PublicRoute} from '../routes/helpers';
import ProtectedRoutes from '../routes/ProtectedRoutes';

// const LoginPage = lazy(() => import('../components/LoginPage'));
// const Registration = lazy(() => import('../components/Register'));
const LoginPage = lazy(() => import('../components/auth/SingIn'));
const Registration = lazy(() => import('../components/auth/sign_up/index'));

export function AppRoutes({isAuthenticated}) {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PublicRoute path="/" isAuthenticated={isAuthenticated} exact>
            <LoginPage/>
          </PublicRoute>
          <PublicRoute path="/login" isAuthenticated={isAuthenticated} link="/dashboard" exact>
            <LoginPage/>
          </PublicRoute>
          <PublicRoute path="/signup" isAuthenticated={isAuthenticated} link="/onboarding/team" exact>
            <Registration/>
          </PublicRoute>
          <PrivateRoute path="/" isAuthenticated={isAuthenticated} >
            <ProtectedRoutes/>
          </PrivateRoute>
        </Switch>
      </Suspense>
    </Router>
  );
}
