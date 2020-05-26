import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial State

const initalState = {
    transactions: [
           { id: 1, text: 'Flower', amount: -20 },
           { id: 2, text: 'Salary', amount: 300 },
           { id: 3, text: 'Book', amount: -10 },
           { id: 4, text: 'Camera', amount: 150 }
         ]
}

// Create context

export const GlobalContext = createContext(initalState);

// Provider component

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState); // need to call dispatch whenever using a reducer

    // whatever we wrap in App.js is going to be the children, provides state to the children
    return (<GlobalContext.Provider value={{
        transactions: state.transactions
    }}>
        {children}  
    </GlobalContext.Provider>)
}