import { createSlice } from '@reduxjs/toolkit'

const initialRequestsState = {requests: []}

const requestsSlice = createSlice({
    name: 'requests',
    initialState: initialRequestsState,
    reducers: {
        replaceRequests(state, action) {
            state.requests = action.payload
        },
        addRequest(state, action) {
            state.push(action.payload)
        }
    }
})

export const { addRequest, replaceRequests } = requestsSlice.actions
export default requestsSlice