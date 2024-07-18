import type { AppDispatch } from "../store";
import { saveData } from "../store/DataSlice";

const GALARY_URL: string = process.env.GALARY_URL || 'https://jsonplaceholder.typicode.com/photos';

/**
 * Function to communicate with outside API and store the data in Redux Store
 */
export const getData = async (dispatch: AppDispatch) => {
    try {
        const res = await fetch(GALARY_URL);
        const data = await res.json();

        dispatch(saveData({ data, isLoaded: true }));
        return true;
    } catch (error) {
        dispatch(saveData({
            isLoaded: false,
            data: []
        }));
    }
}