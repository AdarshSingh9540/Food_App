import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const er = useRouteError();
    console.log(er);
    return(
        <>
        <h1>Oops ...!!</h1>
        <h1>Something went wrong ..!!</h1>
        <h1>{er.status + " : "+er.statusText}</h1>
        </>
    )
}

export default Error;