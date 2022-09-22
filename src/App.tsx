import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './components/landing';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={({ }) => <Landing />} />
        {/* <Route path='/login' render={({ }) => <Login />} /> */}
        {/* <Route path='/signup' render={({ }) => <Signup />} /> */}
        {/* <ProtectedRoute
          path={[
            '/dashboard', '/dashboard/',
            '/devices', '/devices/',
            '/account', '/account/',
            '/activities', '/activities/',
            '/help', '/help/',
          ]}
          auth={Auth.isAuthenticated}
          component={Main} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
