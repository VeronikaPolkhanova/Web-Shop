const initialState = {
    books: [], 
}
export default function (state = initialState, action) {
    switch (action.type) {
        case 'ADD_BUCKET':
            return {
               ...state, books: [...state.books,  action.payload]
            }
            break;
        case 'REMOVE_BUCKET':
            return {
                ...state, books: state.filter((it) => it.id !== action.payload)
            }
            break;
    }
    return state
}