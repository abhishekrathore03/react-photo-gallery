import type { stateData } from '../interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: stateData = {
    data: [],
    isLoaded: false,
};

const dataSlice = createSlice({
    name: 'albumData',
    initialState,
    reducers: {
        saveData: (state, action: PayloadAction<stateData>) => {
            state.data = action.payload.data;
            state.isLoaded = action.payload.isLoaded;
        },
    },
})

// Action creators are generated for each case reducer function
export const { saveData } = dataSlice.actions;

export default dataSlice.reducer;