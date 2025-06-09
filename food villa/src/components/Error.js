import {useRouteError} from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <>
        <h1>Oops !!</h1>
        <h1>Error Encountered</h1>
        <h1>{err.status + " : " + err.statusText}</h1>
        </>
    )
}

export default Error;