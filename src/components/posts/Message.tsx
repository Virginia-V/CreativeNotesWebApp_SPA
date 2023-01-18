import { useAuth0 } from "@auth0/auth0-react";

interface MessageProps {
  children: React.ReactNode;
  description: string;
}

export default function Message({ children, description }: MessageProps) {
  const { user } = useAuth0();
  return (
    <div className="bg-white p-8 border-b-2 rounded-lg">
      <div className="flex items-center gap-2">
        <img src={user?.picture} className="w-10 rounded-full" alt={user?.nickname} />
        <h2>{user?.nickname}</h2>
      </div>
      <div className="py-4">
        <p>{description}</p>
      </div>
      {children}
    </div>
  );
}
