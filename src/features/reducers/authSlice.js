import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isLoggedIn: false,
        loading: false
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        login: (state, action)=>{
            state.user = {
                uid: action.payload.user.uid,
                email: action.payload.user.email,
                displayName: action.payload.user.displayName
             };
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout: (state, action)=>{
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        }
    }
});

export const {login, logout, setLoading} = authSlice.actions;
export default authSlice.reducer;