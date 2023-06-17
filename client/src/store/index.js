import { configureStore } from '@reduxjs/toolkit'
import requestsSlice from './requests'

const store = configureStore({
    reducer: {
      requests: requestsSlice,
    },
  })
export default store