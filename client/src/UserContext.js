import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserContextProvider({children}) {
    const [userInfo, setUserInfo] = useState({})
    return (
        <UserContextProvider value={{userInfo, setUserInfo}}>
            {children}
        </UserContextProvider>
    );
}

export function useUserContext() {
    return useContext(UserContext);
}