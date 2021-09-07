import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './styles/output.css';

export default function App() {
  const Login = lazy(() => import('./pages/login'));
  const SignUp = lazy(() => import('./pages/signup'));
  const Dashboard = lazy(() => import('./pages/dashboard'));

  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
          <Route path={ROUTES.SIGN_UP} component={SignUp} />
          <Route path={ROUTES.DASHBOARD} component={Dashboard} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}
