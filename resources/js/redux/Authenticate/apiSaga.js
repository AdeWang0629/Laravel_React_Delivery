import {all, call, put, takeLatest} from 'redux-saga/effects'
import actions from '../Authenticate/actions';
import {postRequest, getCustomRequest, getRequest, deleteRequest} from '../../config/axiosClient'
import {message} from 'antd';
import { browserRedirect } from '../../routes/helpers';
import axiosClient from '../../config/axiosClient';
function* login(action) {
  try {
    yield call(() => getCustomRequest('sanctum/csrf-cookie'));
    const response = yield call(() => postRequest('login', action.payload));

    const jwtToken = response.data.token;
    localStorage.removeItem('user');
    localStorage.setItem('jwt_token', jwtToken);
    localStorage.setItem(
      'user',
      JSON.stringify({
        email: response.data.user[0].email,
      }),
    );
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

    yield put({type: actions.LOGIN_SUCCESS, payload: response.data.user[0]});
  } catch (error) {
    yield put({type: actions.LOGIN_FAILURE});
    if(error.response.status === 401) {
      message.error(error.response.data.message);
    } else if(error.response.status === 422) {
      message.error(error.response.data.message);
    } else {
      message.error('Something Went Wrong');
    }
  }
}

function* register(action) {
  try {
    const response = yield call(() => postRequest('register', action.payload));

    const jwtToken = response.data.token;
    localStorage.removeItem('user');
    localStorage.setItem('jwt_token', jwtToken);
    localStorage.setItem(
      'user',
      JSON.stringify({
        email: response.data.user.email,
      }),
    );
    axiosClient.defaults.headers.common['Authorization'] = `Bearer ${jwtToken}`;

    yield put({type: actions.REGISTER_SUCCESS, payload: response.data.user});
  } catch (error) {
    yield put({type: actions.REGISTER_FAILURE});
    if(error.response.status === 422) {
      message.error(error.response.data.message);
    } else {
      message.error('Something Went Wrong');
    }
  }
}

function* register_team(action) {
  yield call(browserRedirect, '/onboarding/dept');
}

function* register_dept(action) {
  yield call(browserRedirect, '/onboarding/plans');
}

function* getAuthUser() {
  try {
    const response = yield call(() => getRequest('auth/user'));
    yield put({type: actions.GET_AUTH_USER_SUCCESS, payload: response.data});
  } catch (error) {
    yield put({type: actions.GET_AUTH_USER_FAILURE});
  }
}

function* logout() {
  try {
    localStorage.removeItem('jwt_token');
    yield call(() => deleteRequest('logout'));
    yield put({type: actions.LOGOUT_SUCCESS});
  } catch (e) {
    yield put({type: actions.LOGOUT_FAILURE});
  }
}


export default function* rootSaga() {
  yield all([takeLatest(actions.LOGIN, login)]);
  yield all([takeLatest(actions.GET_AUTH_USER, getAuthUser)]);
  yield all([takeLatest(actions.LOGOUT, logout)]);
  yield all([takeLatest(actions.REGISTER, register)]);
  yield all([takeLatest(actions.REGISTER_TEAM, register_team)]);
  yield all([takeLatest(actions.REGISTER_DEPT, register_dept)]);
}