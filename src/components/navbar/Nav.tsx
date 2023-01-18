export default function Nav() {
  return (
    <nav className="flex justify-between items-center py-10">
      <a href="/">
        <button className="text-lg font-medium">Creative Minds</button>
      </a>
      <ul className="flex items-center gap-10">
        <a href="/">Join Now</a>
        <div className="flex items-center gap-6">
          <a href="/post">
            <button className="font-medium bg-cyan-500 text-white py-2 px-4 rounded-md text-sm">
              Post
            </button>
          </a>
          <a href="/dashboard">
            <img
              referrerPolicy="no-referrer"
              className="w-12 rounded-full cursor-pointer"
              src=""
              alt=""
            />
          </a>
        </div>
      </ul>
    </nav>
  );
}
