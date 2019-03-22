import { createReducer } from 'redux-act'

const getDefaultState = () => ({})

export default () => createReducer({}, getDefaultState())
