import React from "react";

export const InitialLoginState = {
  isLoading: false,
  user: null,
};

export enum UserContextActionsTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  REGISTER = "REGISTER",
}

export const AuthContext = React.createContext<any>(InitialLoginState);
