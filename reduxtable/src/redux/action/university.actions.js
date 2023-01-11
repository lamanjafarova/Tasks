import axios from "axios";
// export const getAllUnversity = () => {
//     return async (dispatch) => {
//         dispatch({
//             type: "GET_DATA_START",
//         });
//         try {
//             let response = await axios.get("http://universities.hipolabs.com/search?name=");
//             dispatch({
//                 type: "GET_DATA_SUCCESS",
//                 payload: response.data,
//             });
//         } catch (error) {
//             dispatch({
//                 type: "GET_DATA_FAILED",
//                 payload: error,
//             })
//         }
//     };
// };
export const searchInputValueAction = (value) => {
    return {
        type: "SEARCH_BY_INPUT_VALUE",
        payload: value
    };
};
export const universitySeacrhAction = (inputValue) => {
    console.log(inputValue);
    return async (dispatch) => {
       let response =  await axios.get(`http://universities.hipolabs.com/search?name=${inputValue}`)
        dispatch({
            type: "SEARCH_BTN_INPUT_VALUE",
            payload: response.data
        })
    }
}
