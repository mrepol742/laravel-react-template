import { legacy_createStore as createStore } from 'redux'

const initialState = {
    user: null,
    session_id: null,
}

const changeState = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return { ...state, user: action.payload }
        case 'SET_SESSION_ID':
            return { ...state, session_id: action.payload }
        case 'CLEAR_USER':
            return { ...state, user: null, session_id: null }
        default:
            return state
    }
}

const store = createStore(changeState)
export default store
