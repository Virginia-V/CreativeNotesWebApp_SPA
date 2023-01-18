import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="py-2 px-4 text-sm bg-cyan-500 text-white rounded-lg font-medium ml-8"
      onClick={() => loginWithRedirect()}
    >
      Join Now
    </button>
  );
};

export default LoginButton;
