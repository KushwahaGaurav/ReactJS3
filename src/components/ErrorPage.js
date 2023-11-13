import { useRouteError } from "react-router-dom"



const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="errorRouter">
        <h1>OOP'S !!</h1>
        <h2>Something Went wrong !!</h2>
        <h3>{err.status}:{err.statusText}</h3>
    </div>
  )
}



export default ErrorPage
