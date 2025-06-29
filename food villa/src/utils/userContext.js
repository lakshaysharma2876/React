import { createContext } from "react";

const userContext = createContext({
    user: {
        name: "Dummy",
        email: "dummy@gmail.com"
    },
});

export default userContext;
