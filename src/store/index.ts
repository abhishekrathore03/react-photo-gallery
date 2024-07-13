import DataSlice from './DataSlice';
import filteredData from './FilteredDataSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    // Current functionality could have been achived using one single slice but wanted to have two slice for more modularity
    reducer: {
        albumData: DataSlice, //The actual data from server
        filteredAlbumData: filteredData //Filtered data from search box
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;