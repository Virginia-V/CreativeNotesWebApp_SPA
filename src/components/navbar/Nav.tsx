import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LoginButton from "../../features/auth/login/LoginButton";

export default function Nav() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <nav className="flex justify-between items-center py-10">
      <Link className="text-lg font-medium" to="/dashboard">
        Creative Minds
      </Link>
      <ul className="flex items-center gap-10">
        {!isAuthenticated && <LoginButton />}
        {isAuthenticated && (
          <div className="flex items-center gap-6">
            <Link
              className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm"
              to="/post"
            >
              Post
            </Link>
            <Link to="/dashboard">
              <img
                referrerPolicy="no-referrer"
                className="w-12 rounded-full cursor-pointer"
                src={user?.picture}
                alt={user?.nickname}
              />
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}
