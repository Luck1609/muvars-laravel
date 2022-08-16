import { configureStore } from "@reduxjs/toolkit"
import ModalReducer from "./modal_reducer"

export const Store = configureStore({
  reducer: {ModalReducer}
})