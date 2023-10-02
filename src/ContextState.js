import React, { useContext } from "react";

export const initialState = {
    categoria: ""
};

export const ActionTypes = {
  setCategoria: "SET_CATEGORIA"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.setCategoria: {
      return { ...state, categoria: action.newValue};
    }
    default: {
      return state;
    }
  }
};

export const initialContext = {
  contextState: initialState,
  setContextState: () => {},
};

const Context = React.createContext(initialContext);

export function ContextProvider({ children, state = initialState }) {
  const [contextState, setContextState] = React.useReducer(
    reducer,
    state
  );

  return (
    <Context.Provider value={{ contextState, setContextState }}>
      {children}
    </Context.Provider>
  );
}

export const useContextState = () => useContext(Context);