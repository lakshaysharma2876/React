import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(()=> {
        const HelperOnline = () => {
            setIsOnline(true);
        }
        const HelperOffline = () => {
            setIsOnline(false);
        }

        window.addEventListener("online",HelperOnline);
        window.addEventListener("offline",HelperOffline);

        //always close EventListener or they will stack up when you will be online and webpages have more event listeners. good practice
        return ()=> {
            window.removeEventListener("online",HelperOnline);
            window.removeEventListener("offline",HelperOffline);
    };
    },[]);

    return isOnline;
}

export default useOnline;