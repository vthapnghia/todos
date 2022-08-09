import { createSlice } from "@reduxjs/toolkit";

export const loading = createSlice({
    name: "loading",
    initialState: {
        flag: true
    },
    reducers: {
        changeLoading: (state) => {
            state.flag = false;
        }
    }
})

export const { changeLoading } = loading.actions;
export default loading.reducer;