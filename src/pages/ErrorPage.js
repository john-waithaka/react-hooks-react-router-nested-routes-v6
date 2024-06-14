//error page - npm install for dependencies

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);


  //added an
  return (
    <main>
        <h1>Whoops!!! Something went wrong! Sorry about that.</h1>
    </main>
  );
};

export default ErrorPage;