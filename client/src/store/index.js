import { configureStore } from '@reduxjs/toolkit'
import requestsSlice from './requests-slice'

const store = configureStore({
    reducer: {
      requests: requestsSlice.reducer,
    },
  })
export default store