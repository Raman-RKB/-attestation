import Cookies from 'js-cookie'
import { AppRoutes } from "./AppRoutes";

function MyApp() {
  const userToken = Cookies.get('token')
  return (
    <>
      <AppRoutes user={userToken} />
    </>
  );
}

export default MyApp;

