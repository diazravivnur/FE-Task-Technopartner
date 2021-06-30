import { createContext, useReducer } from "react";

export const UserContext = createContext();

const initialState = {
  login: localStorage.getItem("token") !== null,
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  showLoginPopup: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "success":
    case "login":
      localStorage.setItem("token", payload.token);
      localStorage.setItem("user", JSON.stringify(payload));
      return {
        ...state,
        login: true,
        user: payload,
      };

    default:
      throw new Error();
  }
};

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {children}
    </UserContext.Provider>
  );
};
