import { createSlice } from '@reduxjs/toolkit'

const initialRequestsState = [
        {
            id: 1,
            type: "Leave",
            user: "Sanket",
            duration: "2 days",
            from: "9th June",
            to: "11th June",
            reason: "Out of Station"
        },
        {
            id: 2,
            type: "Leave",
            user: "Sanket",
            duration: "1 days",
            from: "19th June",
            to: "21th June",
            reason: "Not feeling well"
        },
        {
            id: 3,
            type: "Attendance Regularization",
            user: "Amit",
            duration: "2 days",
            from: "7th June",
            to: "8th June",
            reason: "Forgot to login"
        },
        {
            id: 4,
            type: "Attendance Regularization",
            user: "Sanket",
            duration: "2 days",
            from: "5th June",
            to: "6th June",
            reason: "Out for client visit"
        },
        {
            id: 5,
            type: "Leave",
            user: "Amit",
            duration: "4 days",
            from: "29th June",
            to: "30th June",
            reason: "Out of Station"
        },
    ]

const requestsSlice = createSlice({
    name: 'requests',
    initialState: initialRequestsState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export const { add } = requestsSlice.actions
export default requestsSlice.reducer