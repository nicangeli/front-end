import { createAction, handleActions } from 'redux-actions'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'
export const LOGOUT = 'LOGOUT'

export const loginRequest = createAction(LOGIN_REQUEST)
export const loginSuccess = createAction(LOGIN_SUCCESS)
export const loginError = createAction(LOGIN_ERROR)
export const logout = createAction(LOGOUT)

export const actions = {
  loginRequest,
  loginSuccess,
  loginError,
  logout
}

const defaultState = {
  isLoggingIn: false,
  token: null,
  loginError: null
}

export default handleActions({
  [LOGIN_REQUEST]: (state, action) => {
    // mutate state immutably here
    state.isLoggingIn = true
    return state
  },
  [LOGIN_SUCCESS]: (state, action) => {
    state.isLoggingIn = false
    state.token = action.payload
    return state
  },
  [LOGIN_ERROR]: (state, action) => {
    state.loginError = action.payload
    return state
  },
  [LOGOUT]: (state, action) => {
    return state
  }
}, defaultState)
