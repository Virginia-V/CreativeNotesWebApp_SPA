import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login/LoginButton";
import LogoutButton from "./logout/LogoutButton";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
