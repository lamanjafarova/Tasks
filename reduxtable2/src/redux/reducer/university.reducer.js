let InitialState = {
    loading: true,
    data: undefined,
    error: undefined,
    inputValue: "",
};
export const universityReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "GET_DATA_START":
            return {
                ...state,
                loading: true,
            }
        case "GET_DATA_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case "GET_DATA_FAILED":
            return {
                    ...state,
                    loading: false,
                    error: action.payload
                };
        case "SEARCH_BY_INPUT_VALUE":
            return {
                    ...state,
                    loading: false,
                    inputValue: action.payload,
                };
         case "SEARCH_BTN_INPUT_VALUE":
                    return {
                            ...state,
                            loading: false,
                            data: action.payload
                        };
            
           
    
        default:
            return state;
    }
}