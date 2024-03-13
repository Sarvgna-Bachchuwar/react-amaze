import { useRouteError } from "react-router-dom"

const Error = () => {
  const err = useRouteError();
  return(
    <div>
      <h1>Page Not Found</h1>
      <h3>{err.message}</h3>
      <h3>{err.status}</h3>
      <h3>{err.statusText}</h3>
      <h3>{err.data}</h3>
    </div>
  )
}

export default Error