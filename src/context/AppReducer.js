// a reducer is a way to change state and send it to components

export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':  // DELETE_TRANSACTION is an action.type that was sent from GlobalState, then returning new state
            return {
                ...state,
                transactions: state.transactions
                .filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}