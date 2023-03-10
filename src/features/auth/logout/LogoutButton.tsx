import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      className="font-medium text-white bg-gray-800 py-2 px-4 my-6"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      Sign Out
    </button>
  );
};

export default LogoutButton;
