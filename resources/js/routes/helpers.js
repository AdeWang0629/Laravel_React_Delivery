// Private route restrict to access public pages after login.
import {Redirect, Route} from 'react-router-dom';
import history from '../config/history';
export function PrivateRoute({children, isAuthenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={({location}) =>
        (checkAuthorization() === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {from: location},
            }}
          />
        ))
      }
    />
  );
}

// Public route restrict to access authenticated pages before login.
export function PublicRoute({children, isAuthenticated, link, ...rest}) {
  return (
    <Route
      {...rest}
      render={
        ({location}) =>
          (checkAuthorization() === false ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: link,
                state: {from: location},
              }}
            />
          ))
      }
    />
  );
}

export const browserRedirect = location => {
  history.push(location);
}

export const parseJwt = token => {
  if (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  }
  return null;
};

export const checkAuthorization = () => {
  const storedToken = localStorage.getItem('jwt_token');

  if (storedToken) {
    const tokenPayload = parseJwt(storedToken);

    const expiration = new Date(tokenPayload.exp * 1000).getTime();
    const current = new Date().getTime();

    if (current > expiration) return false;

    return true;
  }

  return false;
};