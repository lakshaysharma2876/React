import { useContext } from "react";
import userContext from "../utils/userContext";

const Footer = () => {

    const info = useContext(userContext);

    return (
        <div className="p-4 m-4 gap-x-3 text-2xl font-bold">
            <span>For help, you can contact : {info.user.name} at {info.user.email}</span>
        </div>
    );
}

export default Footer;