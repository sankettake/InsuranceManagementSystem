import { createSlice } from '@reduxjs/toolkit'

const initialRequestsState = [
    ]

const requestsSlice = createSlice({
    name: 'requests',
    initialState: initialRequestsState,
    reducers: {
        replaceRequests(state, action) {
            state = action.payload
            return state
        },
        addRequest(state, action) {
            state.push(action.payload)
        }
    }
})

export const { addRequest, replaceRequests } = requestsSlice.actions
export default requestsSlice