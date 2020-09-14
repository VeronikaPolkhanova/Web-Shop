const initialState = {
    activeItems: false,
}
export default function rootReduser(state = initialState, action) {
    switch(action.type){
        case 'ENTER':
            return {
                activeItems: state.activeItems = true
            }
        case 'LEAVE':
            return {
                activeItems: state.activeItems = false
            }
    }
    return state
}