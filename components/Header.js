export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="text-xl font-bold">Sales Bridge</div>
      <nav className="space-x-4">
        <a href="#" className="text-gray-600 hover:text-black">Start</a>
        <a href="#" className="text-gray-600 hover:text-black">Login</a>
      </nav>
    </header>
  );
}