import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './styles/output.css';

export default function App() {
  const Login = lazy(() => import('./pages/login'));
  const SignUp = lazy(() => import('./pages/signup'));
  const Dashboard = lazy(() => import('./pages/dashboard'));
  const NotFound = lazy(() => import('./pages/notFound'));
  const Profile = lazy(() => import('./pages/profile'));

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
