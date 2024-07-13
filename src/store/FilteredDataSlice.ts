import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { stateData } from '../interfaces/interface';

const initialState: stateData = {
    data: [],
    isLoaded: false,
};

const filteredDataSlice = createSlice({
    name: 'filteredAlbumData',
    initialState,
    reducers: {
        filteredData: (state, action: PayloadAction<stateData>) => {
            state.data = action.payload.data;
            state.isLoaded = action.payload.isLoaded;
        },
    },
})

// Action creators are generated for each case reducer function
export const { filteredData } = filteredDataSlice.actions;

export default filteredDataSlice.reducer;