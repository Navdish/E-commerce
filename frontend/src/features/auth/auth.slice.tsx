import {createSlice, miniSerializeError} from "@reduxjs/toolkit"
import { createUser, login } from "./auth.action";
import { RootState } from '../../app/store';

interface initialStateProps {
    isLoading: boolean
    user: object
    error: number | null
}

const initialState : initialStateProps ={
    isLoading : false,
    user: {},
    error: null,
}



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(createUser.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(createUser.fulfilled, (state, action)=> {
            state.isLoading = false;
        })
        builder.addCase(createUser.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error as number;
        })
        builder.addCase(login.pending, (state, action)=> {
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.user = action.payload.user.user;
            state.error = null;
        })
        builder.addCase(login.rejected, (state, action)=> {
            state.isLoading = false;
            state.error = action.error as number;
        })
    }
})

export default authSlice.reducer
