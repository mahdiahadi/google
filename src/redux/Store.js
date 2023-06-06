import { configureStore } from "@reduxjs/toolkit";
import { overallEventViewsApi } from "./services/OverallEventViewApi";

const Store = configureStore ({
   reducer:{
        [overallEventViewsApi.reducerPath] : overallEventViewsApi.reducer,
   },
    middleware: (gdm) => gdm().concat(overallEventViewsApi.middleware)
    
})

export default Store;
