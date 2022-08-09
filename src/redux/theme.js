import { createSlice } from "@reduxjs/toolkit";

export const theme = createSlice({
    name: "theme",
    initialState: {
        color:  "#678c89",
    },
    reducers: {
        changeTheme: (state, action) => {
            state.color = action.payload;
        }
    }
})

export const {changeTheme} = theme.actions;
export default theme.reducer;