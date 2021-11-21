import { FETCH_DATA, FETCH_DATA_ERROR, FETCH_DATA_SUCCESS } from "../actions";
import produce from "immer";
export const initialState = {
    isLoading: false,
    datas: [],
    status: ''
}
const titleReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case FETCH_DATA:
                console.log('fetch data')
                draft.isLoading = true;
                draft.datas = [];
                draft.status = 'IN_PROGRESS';
                break;

            case FETCH_DATA_SUCCESS:
                console.log('=success')
                draft.isLoading = false;
                draft.datas = action?.payload?.items;
                draft.status = 'SUCCESS';
                break;

            case FETCH_DATA_ERROR:
                draft.isLoading = true;
                draft.datas = [];
                draft.status = 'ERROR';
                break;
        }
    })

export default titleReducer;